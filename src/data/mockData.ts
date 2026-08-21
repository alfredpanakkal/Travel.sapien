import { BlogPost, YouTubeVideo, PillarInfo, FAQItem, TeamMember } from '../types';

export const BRAND_PILLARS: PillarInfo[] = [
  {
    id: 'budget-breakdowns',
    name: 'Budget Breakdowns',
    emoji: '💰',
    shortDesc: 'Exact itemized costs, spreadsheet breakdowns & daily budgets.',
    fullDesc: 'Real receipts, hotel costs, street food pricing, and hidden fees unveiled so you never overspend.',
    badgeBg: 'bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700/50',
    badgeText: 'text-amber-900 dark:text-amber-200',
    iconName: 'PiggyBank'
  },
  {
    id: 'family-tips',
    name: 'Family Tips',
    emoji: '👨‍👩‍👧‍👦',
    shortDesc: 'Stress-free family itineraries, toddler gear & child safety.',
    fullDesc: 'Tested tricks for traveling with kids of all ages—stroller-friendly routes, kid menus, and meltdown prevention.',
    badgeBg: 'bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-700/50',
    badgeText: 'text-blue-900 dark:text-blue-200',
    iconName: 'Users'
  },
  {
    id: 'hidden-gems',
    name: 'Hidden Gems',
    emoji: '💎',
    shortDesc: 'Off-the-beaten-path destinations, secret beaches & local spots.',
    fullDesc: 'Uncrowded islands, mountain villages, and local eateries skipped by mass tourism guidebooks.',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-700/50',
    badgeText: 'text-emerald-900 dark:text-emerald-200',
    iconName: 'Compass'
  },
  {
    id: 'travel-hacks',
    name: 'Travel Hacks',
    emoji: '⚡',
    shortDesc: 'Airline points, flight glitch alerts, packing hacks & tech setups.',
    fullDesc: 'Master credit card rewards, bypass long airport queues, and travel lighter with smart gear systems.',
    badgeBg: 'bg-rose-100 dark:bg-rose-900/40 border border-rose-300 dark:border-rose-700/50',
    badgeText: 'text-rose-900 dark:text-rose-200',
    iconName: 'Zap'
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'How We Spent Only $42/Day in Thailand for a Family of 4 (Itemized Breakdown)',
    slug: 'thailand-family-budget-breakdown',
    excerpt: 'An exhaustive, transparent list of everything we spent during 3 weeks in Chiang Mai and Koh Phangan—including lodging, meals, and scooter rentals.',
    body: [
      'Thailand remains the crown jewel for budget family travel, but costs can quickly creep up if you stick strictly to tourist resorts. During our 21-day journey, we set a challenge: maintain high comfort while keeping expenses strictly under $50/day for our family.',
      'Our lodging averaged $18/night for a two-bedroom apartment with air conditioning and a shared pool in Chiang Mai. Food was our biggest surprise—delicious night market pad thai and mango sticky rice averaged just $1.50 per portion!',
      'In this detailed guide, we share our exact Google Sheet log with 140+ individual entries covering transport, SIM cards, temple entries, laundry, and emergency healthcare expenses.'
    ],
    pillar: 'budget-breakdowns',
    coverImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-08-10',
    readTime: '6 min read',
    author: {
      name: 'Alfred Sapien',
      role: 'Founder & Family Travel Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Full-time nomad exploring the globe with my family since 2019.'
    },
    relatedVideoId: 'video-1',
    tags: ['Thailand', 'Budget Travel', 'Family Travel', 'Cost Breakdown'],
    calloutBox: {
      type: 'budget',
      title: 'Travel Sapien Money Saver #14',
      content: 'Always withdraw local currency (Thai Baht) in maximum single amounts at bank ATMs and DECLINE the dynamic conversion rate offered on screen! This saved us over $65 in bank markup fees.'
    },
    featured: true
  }
];

export const MOCK_YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'vid-1',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-1',
    title: 'Thailand Travel Costs Exposed: Real $42/Day Family Budget Vlog! 🇹🇭',
    description: 'We spent 3 weeks in Thailand as a family of 4 and logged EVERY single penny. Here is our honest budget breakdown, hotel tours, and night market feast prices!',
    thumbnail: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2 days ago',
    duration: '18:42',
    viewCount: '48.2K views',
    likeCount: '3.4K',
    pillar: 'budget-breakdowns',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw',
    featured: true
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you fund your full-time family travels?',
    answer: 'We fund our journeys through a combination of YouTube ad revenue, sponsorships, digital travel guides, brand partnerships, and remote freelance consulting work. We prioritize high savings and slow, budget-conscious travel.',
    category: 'general'
  }
];

export const MOCK_TEAM: TeamMember[] = [
  {
    name: 'Alfred Sapien',
    role: 'Creator & Expedition Lead',
    bio: 'Former software consultant turned full-time traveler. Obsessed with itemized budget spreadsheets, flight glitch alerts, and street food hunting.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    favoriteDestinations: ['Northern Thailand', 'Albanian Coast', 'Kyoto, Japan']
  }
];

export const CHANNEL_STATS = {
  channelName: 'Travel Sapien',
  channelHandle: '@Travel.Sapien',
  channelUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw',
  instagramUrl: 'https://www.instagram.com/travel.sapien/',
  postsUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw',
  subscribers: '0',
  totalVideos: '0',
  totalViews: '18.4M',
  blogArticles: '86',
  countriesVisited: '48',
  channelBannerUrl: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?auto=format&fit=crop&w=1600&q=80',
  avatarUrl: 'https://images.unsplash.com/photo-1506869640319-fea1a27536d1?auto=format&fit=crop&w=300&q=80',
  description: 'Welcome to Travel Sapien! We are a nomad family proving that you don’t need a fortune to travel the world. Honest budget breakdowns, family survival tips, hidden gems, and real images auto maticaly from youtube'
};
