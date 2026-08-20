export default async function handler(req: any, res: any) {
  const fallbackData = {
    subscribers: "0",
    totalVideos: "0",
    channelName: "Travel Sapien",
    avatarUrl: "https://images.unsplash.com/photo-1506869640319-fea1a27536d1?auto=format&fit=crop&w=300&q=80",
    channelBannerUrl: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?auto=format&fit=crop&w=1600&q=80"
  };

  try {
    const channelId = "UCE7bljZt0QWpnA8grkEWJvw";
    
    // Add timeout controller so request never hangs Express
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    let response;
    try {
      response = await fetch(`https://www.youtube.com/channel/${channelId}`, {
        headers: { 
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9'
        },
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response || !response.ok) {
      return res.status(200).json(fallbackData);
    }

    const html = await response.text();
    
    let subscribers = fallbackData.subscribers;
    let videos = fallbackData.totalVideos;
    let name = fallbackData.channelName;
    let avatarUrl = fallbackData.avatarUrl;
    let channelBannerUrl = fallbackData.channelBannerUrl;
    
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
        
        let avatarUrls: string[] = [];
        let bannerUrls: string[] = [];
        
        function findUrls(obj: any) {
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
        
        if (avatarUrls.length > 0) avatarUrl = avatarUrls[avatarUrls.length - 1];
        if (bannerUrls.length > 0) channelBannerUrl = bannerUrls[bannerUrls.length - 1];
      } catch (e) {
        console.error("Error parsing ytInitialData", e);
      }
    }
    
    return res.status(200).json({
      subscribers,
      totalVideos: videos,
      channelName: name,
      avatarUrl: avatarUrl || fallbackData.avatarUrl,
      channelBannerUrl: channelBannerUrl || fallbackData.channelBannerUrl
    });
  } catch (error) {
    console.error("Error fetching YouTube stats:", error);
    return res.status(200).json(fallbackData);
  }
}
