import { defineCollection, z } from 'astro:content';

const guide = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['walkthrough', 'puzzle', 'boss', 'weapon', 'character', 'story', 'faq']),
    chapter: z.number().optional(),
    location: z.string().optional(),
    difficulty: z.string().optional(),
    length: z.string().optional(),
    importantItems: z.number().optional(),
    boss: z.string().optional(),
    items: z.array(z.string()).optional(),
    puzzles: z.array(z.string()).optional(),
    enemies: z.array(z.string()).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    image: z.string().optional(),
    updated: z.date().optional(),
  }),
});

const puzzle = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    difficulty: z.string().optional(),
    reward: z.string().optional(),
    puzzleType: z.enum(['safe-code', 'door-lock', 'symbol', 'logic', 'combination', 'key-item', 'mechanism']).optional(),
    requirements: z.array(z.string()).optional(),
    code: z.string().optional(),
    chapter: z.number().optional(),
    steps: z.array(z.object({
      title: z.string(),
      detail: z.string(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    image: z.string().optional(),
    updated: z.date().optional(),
  }),
});

const boss = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    hp: z.string().optional(),
    weakness: z.string().optional(),
    weaknessEffect: z.string().optional(),
    recommendedWeapon: z.string().optional(),
    difficulty: z.string().optional(),
    reward: z.string().optional(),
    attackPatterns: z.array(z.object({
      name: z.string(),
      description: z.string(),
      counter: z.string().optional(),
    })).optional(),
    strategySteps: z.array(z.object({
      title: z.string(),
      detail: z.string(),
    })).optional(),
    hardcoreTips: z.array(z.string()).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    image: z.string().optional(),
    updated: z.date().optional(),
  }),
});

const weapon = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.string().optional(),
    damage: z.string().optional(),
    ammo: z.string().optional(),
    capacity: z.string().optional(),
    rateOfFire: z.string().optional(),
    reload: z.string().optional(),
    range: z.string().optional(),
    durability: z.string().optional(),
    stability: z.string().optional(),
    precision: z.string().optional(),
    character: z.string().optional(),
    location: z.string().optional(),
    locationDetail: z.string().optional(),
    upgrade: z.string().optional(),
    bestFor: z.string().optional(),
    bestUseCases: z.array(z.string()).optional(),
    upgrades: z.array(z.object({
      name: z.string(),
      effect: z.string(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    image: z.string().optional(),
    updated: z.date().optional(),
  }),
});

const character = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    role: z.string().optional(),
    roleType: z.enum(['main', 'supporting', 'antagonist', 'playable', 'boss']).optional(),
    fullName: z.string().optional(),
    aliases: z.array(z.string()).optional(),
    gender: z.string().optional(),
    status: z.string().optional(),
    firstAppearance: z.string().optional(),
    location: z.string().optional(),
    affiliation: z.string().optional(),
    voiceActor: z.string().optional(),
    relationships: z.array(z.object({
      name: z.string(),
      slug: z.string().optional(),
      relationship: z.string(),
    })).optional(),
    timeline: z.array(z.object({
      title: z.string(),
      detail: z.string(),
    })).optional(),
    endingConnection: z.string().optional(),
    relatedStory: z.array(z.string()).optional(),
    relatedBosses: z.array(z.string()).optional(),
    relatedWeapons: z.array(z.string()).optional(),
    relatedCharacters: z.array(z.string()).optional(),
    relatedGuides: z.array(z.string()).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    image: z.string().optional(),
    updated: z.date().optional(),
  }),
});

const enemy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['common', 'mutated', 'special', 'mini-boss', 'hazard']).optional(),
    location: z.string().optional(),
    locationDetail: z.string().optional(),
    weakness: z.string().optional(),
    weaknessEffect: z.string().optional(),
    threat: z.enum(['low', 'medium', 'high', 'extreme']).optional(),
    behavior: z.string().optional(),
    tactics: z.string().optional(),
    attackPatterns: z.array(z.object({
      name: z.string(),
      description: z.string(),
      counter: z.string().optional(),
    })).optional(),
    strategySteps: z.array(z.object({
      title: z.string(),
      detail: z.string(),
    })).optional(),
    recommendedWeapons: z.array(z.string()).optional(),
    recommendedItems: z.array(z.string()).optional(),
    reward: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    image: z.string().optional(),
    updated: z.date().optional(),
  }),
});

const item = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.enum(['key', 'consumable', 'resource', 'valuable', 'upgrade']).optional(),
    location: z.string().optional(),
    locationDetail: z.string().optional(),
    effect: z.string().optional(),
    usedFor: z.string().optional(),
    usage: z.string().optional(),
    usageDetail: z.string().optional(),
    pickupConditions: z.string().optional(),
    relatedItems: z.array(z.string()).optional(),
    relatedWeapons: z.array(z.string()).optional(),
    relatedPuzzles: z.array(z.string()).optional(),
    relatedGuides: z.array(z.string()).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    keywords: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    image: z.string().optional(),
    updated: z.date().optional(),
  }),
});

export const collections = { guide, puzzle, boss, weapon, character, enemy, item };
