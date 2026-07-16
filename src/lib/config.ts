export interface BaseSEOProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: Date;
  modifiedTime?: Date;
  keywords?: string[];
  noindex?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  image: string;
  twitterHandle: string;
}

export const SITE: SiteConfig = {
  name: 'Requiem Guide',
  title: 'Resident Evil Requiem Survival Guide',
  description: 'Complete Resident Evil Requiem survival guide with chapter walkthroughs, puzzle solutions, boss strategies, weapon locations, character guides, endings and secrets.',
  url: 'https://requiemguide.com',
  image: 'https://requiemguide.com/og-image.jpg',
  twitterHandle: '@requiemguide',
};

export const NAV_LINKS = [
  { href: '/walkthrough', label: 'Walkthrough' },
  { href: '/puzzles', label: 'Puzzles' },
  { href: '/bosses', label: 'Bosses' },
  { href: '/weapons', label: 'Weapons' },
  { href: '/enemies', label: 'Enemies' },
  { href: '/items', label: 'Items' },
  { href: '/characters', label: 'Characters' },
  { href: '/story/endings', label: 'Story' },
  { href: 'mailto:hello@requiemguide.com', label: 'Contact', external: true },
];

export const HUB_LINKS = [
  { href: '/walkthrough', label: 'Walkthrough', icon: 'lucide:map', description: 'Step-by-step chapter guides' },
  { href: '/puzzles', label: 'Puzzles', icon: 'lucide:puzzle', description: 'Solutions for every puzzle' },
  { href: '/bosses', label: 'Bosses', icon: 'lucide:skull', description: 'Weaknesses & strategies' },
  { href: '/weapons', label: 'Weapons', icon: 'lucide:crosshair', description: 'Full weapon database' },
  { href: '/characters', label: 'Characters', icon: 'lucide:users', description: 'Profiles & story roles' },
  { href: '/story/endings', label: 'Endings', icon: 'lucide:film', description: 'Story explained' },
];
