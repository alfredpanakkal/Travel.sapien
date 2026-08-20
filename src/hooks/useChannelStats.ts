import { useState, useEffect } from 'react';
import { CHANNEL_STATS as INITIAL_STATS } from '../data/mockData';

export function useChannelStats() {
  const [stats, setStats] = useState(INITIAL_STATS);

  useEffect(() => {
    let isMounted = true;
    fetch('/api/youtube-stats')
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
      .then(data => {
        if (isMounted && data && !data.error) {
          setStats(prev => ({
            ...prev,
            subscribers: data.subscribers || prev.subscribers,
            totalVideos: data.totalVideos || prev.totalVideos,
            avatarUrl: data.avatarUrl || prev.avatarUrl,
            channelBannerUrl: data.channelBannerUrl || prev.channelBannerUrl,
          }));
        }
      })
      .catch(() => {
        // Silently preserve initial stats if network error occurs
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return stats;
}
