import { createClient } from '@sanity/client';
import type { BlogPost, PillarType } from '../types';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
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
  if (!sanityClient) return [];
  const query = `*[_type == "post"] | order(publishedAt desc)`;
  const docs = await sanityClient.fetch(query, {}, { signal });
  return docs.map(mapPostDoc);
}

export async function fetchBlogPostBySlug(slug: string, signal?: AbortSignal): Promise<BlogPost | null> {
  if (!sanityClient) return null;
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const doc = await sanityClient.fetch(query, { slug }, { signal });
  return doc ? mapPostDoc(doc) : null;
}
