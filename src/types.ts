export type PillarType = 'budget-breakdowns' | 'family-tips' | 'hidden-gems' | 'travel-hacks';

export interface PillarInfo {
  id: PillarType;
  name: string;
  emoji: string;
  shortDesc: string;
  fullDesc: string;
  badgeBg: string;
  badgeText: string;
  iconName: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string[]; // List of paragraphs / markdown content
  pillar: PillarType;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  author: Author;
  relatedVideoId?: string;
  tags: string[];
  calloutBox?: {
    type: 'tip' | 'warning' | 'budget' | 'secret';
    title: string;
    content: string;
  };
  featured?: boolean;
}

export interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
  likeCount: string;
  isShort?: boolean;
  pillar: PillarType;
  videoUrl: string;
  featured?: boolean;
}

export interface TravelEstimatorInput {
  region: 'southeast-asia' | 'europe' | 'japan' | 'latin-america' | 'usa-canada';
  travelers: number;
  durationDays: number;
  style: 'backpacker' | 'smart-budget' | 'family-comfort' | 'luxury';
}

export interface TravelEstimatorResult {
  flightEst: number;
  stayEst: number;
  foodEst: number;
  activitiesEst: number;
  totalEst: number;
  dailyPerPerson: number;
  insiderTips: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'budget' | 'family' | 'youtube';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  favoriteDestinations: string[];
}
