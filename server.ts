import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { createServer as createViteServer } from "vite";
import youtubeStatsHandler from "./api/youtube-stats.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Trust proxy for rate limiting behind reverse proxies (Vercel, Cloud Run, etc.)
  app.set("trust proxy", 1);

  // 1. Request logging for monitoring suspicious activity
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - IP: ${req.ip}`);
    next();
  });

  // 2. CORS headers configured for specific domains
  const allowedOrigins = [
    "https://travel-sapien.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://ais-dev-36wlnmpnhepvyhv32lu3id-1072719770483.asia-southeast1.run.app",
    "https://ais-pre-36wlnmpnhepvyhv32lu3id-1072719770483.asia-southeast1.run.app"
  ];
  
  app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error('CORS policy violation'), false);
      }
      return callback(null, true);
    }
  }));

  // 3. Rate limiting: maximum 100 requests per user per minute
  const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    message: { error: "Too many requests, please try again later" },
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use("/api/", apiLimiter);

  // 4. Authentication required for all data modification endpoints
  app.use(express.json());
  app.use((req, res, next) => {
    const modificationMethods = ['POST', 'PUT', 'DELETE', 'PATCH'];
    if (modificationMethods.includes(req.method)) {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Authentication required" });
      }
      // Validate token (using a dummy secret for now, in a real app this would be JWT validation etc.)
      const token = authHeader.split(' ')[1];
      const expectedToken = process.env.API_SECRET_KEY;
      if (expectedToken && token !== expectedToken) {
        return res.status(403).json({ error: "Invalid credentials" });
      }
    }
    next();
  });

  // API Routes
  app.get("/api/youtube-stats", youtubeStatsHandler);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    const studioPath = path.join(distPath, 'studio');

    if (!fs.existsSync(distPath)) {
      console.error("Error: 'dist' directory is missing. Please run the build script first.");
      process.exit(1);
    }

    // Serve Sanity Studio static assets and index
    if (fs.existsSync(studioPath)) {
      app.use('/static', express.static(path.join(studioPath, 'static')));
      app.use('/studio/static', express.static(path.join(studioPath, 'static')));
      app.get('/studio/*', (req, res) => {
        res.sendFile(path.join(studioPath, 'index.html'));
      });
      app.get('/studio', (req, res) => {
        res.sendFile(path.join(studioPath, 'index.html'));
      });
    }

    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // 5. Generic error messages that don't reveal system information
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(`[Error] ${err.message || "Unknown error"}`);
    if (err.message === 'CORS policy violation') {
      return res.status(403).json({ error: "Access denied by CORS policy" });
    }
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
