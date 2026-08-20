import { useState, useEffect } from 'react';
import type { BlogPost } from '../types';
import { fetchBlogPosts } from '../data/sanity';
import { MOCK_BLOG_POSTS } from '../data/mockData';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(MOCK_BLOG_POSTS);
  const [loading, setLoading] = useState(true);
  const [usingMock, setUsingMock] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function loadPosts() {
      try {
        const livePosts = await fetchBlogPosts(controller.signal);
        if (isMounted && livePosts && livePosts.length > 0) {
          setPosts(livePosts);
          setUsingMock(false);
        }
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error('Failed to fetch Sanity blog posts, falling back to mock data:', err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { posts, loading, usingMock };
}
