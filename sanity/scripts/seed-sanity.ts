import { createClient } from '@sanity/client';
import { MOCK_BLOG_POSTS } from '../../src/data/mockData.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../../.env') });

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'g0khk2re';
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN in .env file. Please add it to your .env file.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-03-01',
});

async function seed() {
  console.log("Seeding data to Sanity...");
  
  // Create the author document first
  try {
    console.log("Creating author document...");
    await client.createIfNotExists({
      _id: '24abaa94-b900-4a34-812d-7aecb79db575',
      _type: 'author',
      name: 'Travel Sapien',
      role: 'Nomad Family',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200&h=200',
      bio: 'Exploring the world on a budget and sharing our adventures.'
    });
  } catch (err) {
    console.error("Failed to create author", err);
  }

  for (const post of MOCK_BLOG_POSTS) {
    const doc = {
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      body: post.body,
      pillar: post.pillar,
      coverImage: post.coverImage,
      publishedAt: post.publishedAt,
      readTime: post.readTime,
      author: {
        _type: 'reference',
        _ref: '24abaa94-b900-4a34-812d-7aecb79db575'
      },
      relatedVideoId: post.relatedVideoId,
      tags: post.tags,
      calloutBox: post.calloutBox,
      featured: post.featured,
    };
    
    try {
      console.log(`Uploading post: ${post.title}`);
      await client.create(doc);
    } catch (err) {
      console.error(`Failed to upload post: ${post.title}`, err);
    }
  }
  console.log("Seeding complete!");
}

seed();
