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
  },
  {
    id: 'post-2',
    title: '10 Survival Packing Rules for Long-Haul Flights with Toddlers & Kids',
    slug: 'packing-rules-long-haul-flights-kids',
    excerpt: 'Don’t let a 14-hour flight ruin your vacation before it starts. Here are our battle-tested packing systems and flight entertainment kits.',
    body: [
      'Boarding an international flight with young kids can feel like walking into a storm without an umbrella. Over 45+ long-haul flights later, we have perfected our flight survival cabin kit.',
      'Rule #1: Pack an emergency outfit for PARENTS in your carry-on, not just the kids. Spilled juice or unexpected turbulence sickness happens when you least expect it.',
      'Rule #2: Introduce "surprise activity pouches" every 3 hours. Inexpensive fidget toys, sticker books, and offline tablet audiobooks work wonders when fatigue kicks in.'
    ],
    pillar: 'family-tips',
    coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-08-04',
    readTime: '8 min read',
    author: {
      name: 'Elena Sapien',
      role: 'Co-Creator & Gear Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      bio: 'Passionate about minimalist packing, toddler routines, and slow travel.'
    },
    relatedVideoId: 'video-2',
    tags: ['Flying with Kids', 'Packing Hacks', 'Family Travel', 'Long Haul'],
    calloutBox: {
      type: 'tip',
      title: 'In-Flight Hack',
      content: 'Book bulkhead seats or bring an inflatable footrest pillow that converts the airplane seat space into a flat bed for toddlers to sleep comfortably.'
    },
    featured: true
  },
  {
    id: 'post-3',
    title: 'Secret Fishing Village in Albania You Won’t Find on TikTok (Yet)',
    slug: 'secret-fishing-village-albania',
    excerpt: 'Crystal clear turquoise water, $15/night boutique guesthouses, and fresh grilled seafood without the crowds of Santorini or Amalfi.',
    body: [
      'While the European Riviera gets flooded every July with packed beaches and $400/night hotel rates, the Albanian Riviera remains one of Southern Europe’s best kept secrets.',
      'Nestled between steep olive groves and the Ionian Sea, the quiet village of Qeparo offered us Mediterranean paradise at 1/4th the price of neighboring Greece.',
      'Here is how to reach Qeparo by ferry or rental car, where to stay overlooking the sea, and the exact family-run tavern serving $6 octopus dinners.'
    ],
    pillar: 'hidden-gems',
    coverImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-07-28',
    readTime: '5 min read',
    author: {
      name: 'Alfred Sapien',
      role: 'Founder & Family Travel Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Full-time nomad exploring the globe with my family since 2019.'
    },
    relatedVideoId: 'video-3',
    tags: ['Albania', 'Europe Hidden Gems', 'Budget Mediterranean', 'Off The Beaten Path'],
    calloutBox: {
      type: 'secret',
      title: 'Local Insight',
      content: 'Rent a car in Tirana instead of Saranda. You will save nearly 40% on vehicle rental rates and enjoy scenic coastal mountain driving.'
    }
  },
  {
    id: 'post-4',
    title: 'The Ultimate Flight Mistake Fare Strategy: How We Fly Business Class for Coach Prices',
    slug: 'ultimate-flight-mistake-fare-strategy',
    excerpt: 'Learn how automated flight alerts, position repositioning, and Google Flights matrix searching helped us save over $4,200 on airfare this year.',
    body: [
      'Airline pricing algorithms change millions of fare classes every second. Occasionally, human error or currency glitches create "mistake fares"—like a $290 roundtrip ticket from LAX to Tokyo.',
      'In this tutorial, we explain how to set up automated alerts using ITA Matrix, Google Flights Trackers, and how to act within 15 minutes of a glitch fare drop before airlines fix the error.',
      'We also cover your legal rights as a consumer regarding honored ticket rules.'
    ],
    pillar: 'travel-hacks',
    coverImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-07-19',
    readTime: '7 min read',
    author: {
      name: 'Alfred Sapien',
      role: 'Founder & Family Travel Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Full-time nomad exploring the globe with my family since 2019.'
    },
    tags: ['Flight Hacks', 'Glitch Fares', 'Airfare Savings', 'Google Flights'],
    calloutBox: {
      type: 'warning',
      title: 'Important Rule',
      content: 'NEVER call the airline directly after booking a mistake fare! Wait at least 72 hours until the electronic ticket number (e-ticket) is issued and confirmed.'
    }
  },
  {
    id: 'post-5',
    title: 'Japan with Kids on a Budget: 10 Days in Tokyo & Kyoto Under $1,800 Total',
    slug: 'japan-with-kids-budget-guide',
    excerpt: 'Is Japan expensive? Not if you use 7-Eleven gourmet meals, Suica IC cards, family ryokans, and free rooftop parks.',
    body: [
      'Japan is widely perceived as an expensive destination, but smart family travelers can experience Tokyo and Kyoto without breaking the bank.',
      'By utilizing convenience store bento boxes (which are surprisingly gourmet and high quality!), staying in apartment hotels with washer-dryers, and using regional rail passes, our family spent under $180/day combined.',
      'We list 15 free playgrounds in Tokyo, budget Disney tickets hacks, and how to navigate trains stress-free with strollers.'
    ],
    pillar: 'budget-breakdowns',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-07-12',
    readTime: '9 min read',
    author: {
      name: 'Elena Sapien',
      role: 'Co-Creator & Gear Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      bio: 'Passionate about minimalist packing, toddler routines, and slow travel.'
    },
    tags: ['Japan', 'Tokyo', 'Kyoto', 'Budget Travel', 'Family Itinerary'],
    calloutBox: {
      type: 'tip',
      title: 'Luggage Forwarding (Takkyubin)',
      content: 'Send large suitcases directly between Tokyo and Kyoto hotels for just $15 per bag using Yamato Transport. Boarding bullet trains hands-free with kids is priceless!'
    }
  },
  {
    id: 'post-6',
    title: 'E-SIM vs Local SIM: How to Stay Connected in 50+ Countries for $3/GB',
    slug: 'esim-vs-local-sim-travel-tech-guide',
    excerpt: 'Stop paying $10/day international roaming charges to your home carrier! We test Airalo, Maya Mobile, and physical SIM cards head-to-head.',
    body: [
      'Cell phone roaming fees are one of the biggest hidden budget drainers for international travelers.',
      'With modern dual-SIM smartphones, you can install digital eSIM profiles before your plane even lands on the tarmac.',
      'We break down the best eSIM providers for regional travel in Asia, Europe, and Latin America, plus how to set up hotspot tethering for multiple family devices.'
    ],
    pillar: 'travel-hacks',
    coverImage: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80',
    publishedAt: '2026-06-30',
    readTime: '6 min read',
    author: {
      name: 'Alfred Sapien',
      role: 'Founder & Family Travel Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Full-time nomad exploring the globe with my family since 2019.'
    },
    tags: ['eSIM', 'Travel Tech', 'Data Savings', 'Remote Work']
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
  },
  {
    id: 'vid-2',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-2',
    title: 'Flying 15 Hours With 2 Toddlers! (What We Packed & How We Survived) ✈️',
    description: 'Join us on our long haul flight from Los Angeles to Bangkok. In-flight bag tour, sleeping hacks, and how we avoided meltdowns at 30,000 feet.',
    thumbnail: 'https://images.unsplash.com/photo-1540339832862-47459980783b?auto=format&fit=crop&w=800&q=80',
    publishedAt: '1 week ago',
    duration: '14:15',
    viewCount: '89.5K views',
    likeCount: '6.1K',
    pillar: 'family-tips',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw',
    featured: true
  },
  {
    id: 'vid-3',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-3',
    title: 'We Found Europe’s Cheapest Beach Paradise ($15 Guesthouses in Albania) 🏖️',
    description: 'Forget Croatia or Greece! We spent 7 days exploring hidden beaches in Albania. Uncrowded waters, $6 seafood dinners, and pristine coastlines.',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2 weeks ago',
    duration: '22:05',
    viewCount: '112K views',
    likeCount: '8.9K',
    pillar: 'hidden-gems',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw'
  },
  {
    id: 'vid-4',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-4',
    title: '5 Google Flights Hacks Airlines Don’t Want You To Know 🤫',
    description: 'Stop paying full price for airfare! Step-by-step matrix searching, open-jaw route tricks, and how to track price trends like a pro.',
    thumbnail: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80',
    publishedAt: '3 weeks ago',
    duration: '11:50',
    viewCount: '210K views',
    likeCount: '15.2K',
    pillar: 'travel-hacks',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw'
  },
  {
    id: 'vid-short-1',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-s1',
    title: '$1.50 Street Food Feast in Chiang Mai Night Market! 🍜 #shorts',
    description: 'Watch us eat 4 incredible dishes for under $5 total in Thailand!',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=700',
    publishedAt: '3 days ago',
    duration: '0:54',
    viewCount: '340K views',
    likeCount: '28K',
    isShort: true,
    pillar: 'budget-breakdowns',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw'
  },
  {
    id: 'vid-short-2',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-s2',
    title: 'The Inflatable Airplane Footrest Trick Every Parent Needs! 🛏️ #shorts',
    description: 'How to make a full sleeping bed in economy class for under $20.',
    thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=400&q=700',
    publishedAt: '5 days ago',
    duration: '0:45',
    viewCount: '520K views',
    likeCount: '41K',
    isShort: true,
    pillar: 'family-tips',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw'
  },
  {
    id: 'vid-short-3',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-s3',
    title: 'Secret Albania Beach Cave Tour 🌊 #shorts',
    description: 'Floating into crystal clear turquoise waters with nobody else around.',
    thumbnail: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=700',
    publishedAt: '1 week ago',
    duration: '0:58',
    viewCount: '180K views',
    likeCount: '14K',
    isShort: true,
    pillar: 'hidden-gems',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw'
  },
  {
    id: 'vid-short-4',
    videoId: 'UCE7bljZt0QWpnA8grkEWJvw-s4',
    title: 'Never Pay Airport Roaming Fees Again! #shorts',
    description: 'Setup an eSIM in 60 seconds before takeoff.',
    thumbnail: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=700',
    publishedAt: '2 weeks ago',
    duration: '0:49',
    viewCount: '290K views',
    likeCount: '22K',
    isShort: true,
    pillar: 'travel-hacks',
    videoUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you fund your full-time family travels?',
    answer: 'We fund our journeys through a combination of YouTube ad revenue, sponsorships, digital travel guides, brand partnerships, and remote freelance consulting work. We prioritize high savings and slow, budget-conscious travel.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How do you handle schooling for your kids on the road?',
    answer: 'We practice "worldschooling"—combining online accredited curriculum with hands-on immersive history, geography, languages, and nature exploration in every country we visit.',
    category: 'family'
  },
  {
    id: 'faq-3',
    question: 'Are your budget numbers 100% real?',
    answer: 'Yes! Every single dollar, baht, euro, or yen is tracked in our daily expense logging app. We do not omit coffee, taxis, SIM cards, or laundry costs.',
    category: 'budget'
  },
  {
    id: 'faq-4',
    question: 'How often do you upload new YouTube videos and blog articles?',
    answer: 'We upload a new main vlog on YouTube every Sunday at 10 AM EST, release weekly Shorts/Reels, and publish 2–3 in-depth written blog budget breakdowns each month.',
    category: 'youtube'
  },
  {
    id: 'faq-5',
    question: 'How can I support Travel Sapien?',
    answer: 'The best way to support us is by subscribing to our YouTube channel, joining our free newsletter, sharing our blog posts with travel-loving friends, or using our affiliate links when booking flights and gear!',
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
  },
  {
    name: 'Elena Sapien',
    role: 'Co-Creator & Gear / Family Ops',
    bio: 'Master of minimalist packing and kid routines. Keeps the family healthy, energized, and organized across 45+ countries.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    favoriteDestinations: ['Dolomites Italy', 'Costa Rica', 'Koh Samui']
  },
  {
    name: 'Leo & Maya',
    role: 'Junior Explorers & Testers',
    bio: 'Our chief ice cream reviewers, pool splash testers, and playground critics.',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=500&q=80',
    favoriteDestinations: ['Tokyo Disneyland', 'Elephant Sanctuary Chiang Mai', 'Greek Islands']
  }
];

export const CHANNEL_STATS = {
  channelName: 'Travel Sapien',
  channelHandle: '@Travel.Sapien',
  channelUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw',
  instagramUrl: 'https://www.instagram.com/travel.sapien/',
  postsUrl: 'https://www.youtube.com/channel/UCE7bljZt0QWpnA8grkEWJvw',
  subscribers: '142,500',
  totalVideos: '248',
  totalViews: '18.4M',
  blogArticles: '86',
  countriesVisited: '48',
  channelBannerUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  description: 'Welcome to Travel Sapien! We are a nomad family proving that you don’t need a fortune to travel the world. Honest budget breakdowns, family survival tips, hidden gems, and real images auto maticaly from youtube'
};
