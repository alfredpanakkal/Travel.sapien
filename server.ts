import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Routes
  app.get("/api/youtube-stats", async (req, res) => {
    try {
      const channelId = "UCE7bljZt0QWpnA8grkEWJvw";
      const fetch = (await import('node-fetch')).default || globalThis.fetch;
      const response = await fetch(`https://www.youtube.com/channel/${channelId}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
      });
      const html = await response.text();
      
      let subscribers = "0";
      let videos = "0";
      let name = "Travel Sapien";
      let avatarUrl = "";
      let channelBannerUrl = "";
      
      const subFallback = html.match(/(\d+(?:\.\d+)?[KM]?)\s+subscribers?/i);
      if (subFallback) subscribers = subFallback[1];
      
      const matchVid = html.match(/(\d+)\s+videos?/i);
      if (matchVid) videos = matchVid[1];
      
      const nameMatch = html.match(/<title>(.*?) - YouTube<\/title>/);
      if (nameMatch) name = nameMatch[1];
      
      // Extract images from ytInitialData
      const jsonMatch = html.match(/var ytInitialData = (\{.*?\});/);
      if (jsonMatch) {
        try {
          const data = JSON.parse(jsonMatch[1]);
          const header = data.header;
          
          let avatarUrls = [];
          let bannerUrls = [];
          
          function findUrls(obj) {
            if (typeof obj === 'string') {
              if (obj.includes('yt3.googleusercontent.com') || obj.includes('yt3.ggpht.com')) {
                if (obj.includes('=s')) avatarUrls.push(obj);
                if (obj.includes('=w')) bannerUrls.push(obj);
              }
            } else if (typeof obj === 'object' && obj !== null) {
              for (const key in obj) {
                if (key === 'url' && typeof obj[key] === 'string' && (obj[key].includes('yt3.googleusercontent.com') || obj[key].includes('yt3.ggpht.com'))) {
                  if (obj[key].includes('=s')) avatarUrls.push(obj[key]);
                  if (obj[key].includes('=w')) bannerUrls.push(obj[key]);
                } else {
                  findUrls(obj[key]);
                }
              }
            }
          }
          findUrls(header);
          
          // Get highest res available
          if (avatarUrls.length > 0) avatarUrl = avatarUrls[avatarUrls.length - 1];
          if (bannerUrls.length > 0) channelBannerUrl = bannerUrls[bannerUrls.length - 1];
        } catch (e) {
          console.error("Error parsing ytInitialData", e);
        }
      }
      
      res.json({
        subscribers,
        totalVideos: videos,
        channelName: name,
        avatarUrl,
        channelBannerUrl
      });
    } catch (error) {
      console.error("Error fetching YouTube stats:", error);
      res.status(500).json({ error: "Failed to fetch YouTube stats" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
