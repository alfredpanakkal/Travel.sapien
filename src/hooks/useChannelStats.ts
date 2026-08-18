import { useState, useEffect } from 'react';
import { CHANNEL_STATS as INITIAL_STATS } from '../data/mockData';

export function useChannelStats() {
  const [stats, setStats] = useState(INITIAL_STATS);

  useEffect(() => {
    fetch('/api/youtube-stats')
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setStats(prev => ({
            ...prev,
            subscribers: data.subscribers || prev.subscribers,
            totalVideos: data.totalVideos || prev.totalVideos,
            avatarUrl: data.avatarUrl || prev.avatarUrl,
            channelBannerUrl: data.channelBannerUrl || prev.channelBannerUrl,
          }));
        }
      })
      .catch(err => console.error("Failed to load channel stats", err));
  }, []);

  return stats;
}
