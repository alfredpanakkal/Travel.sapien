import { createClient } from '@sanity/client';
import type { BlogPost, PillarType } from '../types';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'g0khk2re';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const sanityClient = projectId ? createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-03-01', 
}) : null;

export function mapPostDoc(doc: any): BlogPost {
  return {
    id: doc._id,
    title: doc.title,
    slug: doc.slug?.current || '',
    excerpt: doc.excerpt || '',
    body: doc.body || [],
    pillar: (doc.pillar as PillarType) || 'budget-breakdowns',
    coverImage: doc.coverImage || '',
    publishedAt: doc.publishedAt || new Date().toISOString(),
    readTime: doc.readTime || '5 min read',
    author: {
      name: doc.author?.name || 'Travel Sapien',
      role: doc.author?.role || 'Nomad Family',
      avatar: doc.author?.avatar || '',
      bio: doc.author?.bio || ''
    },
    relatedVideoId: doc.relatedVideoId || undefined,
    tags: doc.tags || [],
    calloutBox: doc.calloutBox ? {
      type: doc.calloutBox.type,
      title: doc.calloutBox.title,
      content: doc.calloutBox.content
    } : undefined,
    featured: !!doc.featured
  };
}

export async function fetchBlogPosts(signal?: AbortSignal): Promise<BlogPost[]> {
  try {
    const res = await fetch('/api/sanity/posts', { signal });
    if (!res.ok) throw new Error('Proxy fetch failed');
    const docs = await res.json();
    return docs.map(mapPostDoc);
  } catch (error: any) {
    if (error.name === 'AbortError' || error.message?.includes('aborted')) {
      throw error;
    }
    console.error("Failed to fetch blog posts from proxy:", error.message);
    throw error;
  }
}

export async function fetchBlogPostBySlug(slug: string, signal?: AbortSignal): Promise<BlogPost | null> {
  try {
    const res = await fetch(`/api/sanity/posts/${slug}`, { signal });
    if (!res.ok) throw new Error('Proxy fetch failed');
    const doc = await res.json();
    return doc ? mapPostDoc(doc) : null;
  } catch (error: any) {
    if (error.name === 'AbortError' || error.message?.includes('aborted')) {
      throw error;
    }
    console.error("Failed to fetch blog post from proxy:", error.message);
    throw error;
  }
}
