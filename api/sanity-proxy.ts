import { createClient } from '@sanity/client';

export const proxySanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'g0khk2re',
  dataset: process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-03-01',
});

export const postsHandler = async (req, res) => {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) { ..., author-> }`;
    const docs = await proxySanityClient.fetch(query);
    res.json(docs);
  } catch (error) {
    console.error("Proxy posts error:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const postBySlugHandler = async (req, res) => {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] { ..., author-> }`;
    const doc = await proxySanityClient.fetch(query, { slug: req.params.slug });
    res.json(doc);
  } catch (error) {
    console.error("Proxy post error:", error);
    res.status(500).json({ error: "Failed to fetch post" });
  }
};
