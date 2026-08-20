export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'body', title: 'Body (Paragraphs)', type: 'array', of: [{ type: 'string' }] },
    { name: 'pillar', title: 'Pillar', type: 'string' },
    { name: 'coverImage', title: 'Cover Image URL', type: 'url' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'readTime', title: 'Read Time', type: 'string' },
    { name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'relatedVideoId', title: 'Related Video ID', type: 'string' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'calloutBox',
      title: 'Callout Box',
      type: 'object',
      fields: [
        { name: 'type', title: 'Type', type: 'string', options: { list: ['tip', 'warning', 'budget', 'secret'] } },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'content', title: 'Content', type: 'text' },
      ],
    },
    { name: 'featured', title: 'Featured', type: 'boolean' },
  ],
}