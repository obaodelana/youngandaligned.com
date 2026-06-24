import { defineCollection, z } from 'astro:content';

// Collections ----------------------------------------------------------------
const nav = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    section: z.string(),
    path: z.string().optional(),
  }),
});

const footerExplore = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

const footerConnect = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    subtitle: z.string(),
    image: z.string(),
    audience: z.array(z.string()),
  }),
});

const framework = defineCollection({
  type: 'content',
  schema: z.object({
    num: z.string(),
    name: z.string(),
    tag: z.string(),
    desc: z.string(),
    active: z.boolean().default(false),
    order: z.number().default(0),
    eyebrow: z.string().optional(),
    title: z.string().optional(),
    intro: z.string().optional(),
  }),
});

const personas = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    label: z.string(),
    line: z.string(),
    proof: z.string(),
    name: z.string(),
    initial: z.string(),
    order: z.number().default(0),
  }),
});

const steps = defineCollection({
  type: 'content',
  schema: z.object({
    num: z.string(),
    name: z.string(),
    desc: z.string(),
    detail: z.string(),
    order: z.number().default(0),
  }),
});

const weekly = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    desc: z.string().optional(),
    order: z.number().default(0),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    intro: z.string().optional(),
  }),
});

const features = defineCollection({
  type: 'content',
  schema: z.object({
    tag: z.string(),
    title: z.string(),
    desc: z.string(),
    icon: z.string(),
    span: z.string(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    intro: z.string().optional(),
    order: z.number().default(0),
  }),
});

const decisions = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string().default(''),
    kind: z.enum(['gain', 'for', 'notFor']),
    order: z.number().default(0),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    subheading: z.string().optional(),
    isIntro: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    initial: z.string(),
    role: z.string().optional(),
    feature: z.boolean().default(false),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    order: z.number().default(0),
  }),
});

const intimateTestimonial = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    initial: z.string(),
    eyebrow: z.string().optional(),
  }),
});

const objections = defineCollection({
  type: 'content',
  schema: z.object({
    wait: z.string(),
    reframe: z.string(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    order: z.number().default(0),
  }),
});

const founder = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.string(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    pullQuote: z.string().optional(),
    pullSub: z.string().optional(),
  }),
});

const bio = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.string(),
    roles: z.array(z.string()),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    pullQuote: z.string().optional(),
  }),
});

export const collections = {
  nav,
  footerExplore,
  footerConnect,
  hero,
  framework,
  personas,
  steps,
  weekly,
  features,
  decisions,
  testimonials,
  intimateTestimonial,
  objections,
  founder,
  bio,
};