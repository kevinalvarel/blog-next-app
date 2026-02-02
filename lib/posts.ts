export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  tags: string[];
  coverImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
  readingTime: string;
}

export const posts: Post[] = [
  {
    slug: "nextjs-15-game-changer",
    title: "Next.js 15: The Game Changer for Modern Web Development",
    excerpt:
      "Explore the revolutionary features in Next.js 15 that are transforming how we build web applications. From improved performance to better developer experience.",
    date: "2026-01-28T10:00:00.000Z",
    tags: ["Next.js", "React", "Web Development"],
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    readingTime: "8 min read",
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    excerpt:
      "Master advanced TypeScript patterns including conditional types, mapped types, and template literal types to build robust enterprise applications.",
    date: "2026-01-25T14:30:00.000Z",
    tags: ["TypeScript", "Programming", "Best Practices"],
    coverImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    author: {
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    readingTime: "12 min read",
  },
  {
    slug: "react-server-components-deep-dive",
    title: "React Server Components: A Deep Dive",
    excerpt:
      "Understanding React Server Components and how they revolutionize data fetching, rendering, and overall application architecture.",
    date: "2026-01-22T09:15:00.000Z",
    tags: ["React", "Server Components", "Architecture"],
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    readingTime: "10 min read",
  },
  {
    slug: "tailwind-css-production-tips",
    title: "Tailwind CSS Production Tips: Optimize Your Builds",
    excerpt:
      "Learn essential optimization techniques for Tailwind CSS in production environments. Reduce bundle size and improve performance significantly.",
    date: "2026-01-20T16:45:00.000Z",
    tags: ["Tailwind CSS", "CSS", "Performance"],
    coverImage:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    author: {
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    readingTime: "6 min read",
  },
  {
    slug: "state-management-2026",
    title: "State Management in 2026: What's Changed?",
    excerpt:
      "A comprehensive guide to modern state management solutions. Compare Redux, Zustand, Jotai, and the latest approaches to managing application state.",
    date: "2026-01-18T11:20:00.000Z",
    tags: ["State Management", "React", "JavaScript"],
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    author: {
      name: "Lisa Anderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
    readingTime: "9 min read",
  },
  {
    slug: "ai-powered-development-tools",
    title: "AI-Powered Development Tools Transforming Coding",
    excerpt:
      "Discover how AI assistants and tools are changing the software development landscape. Learn to leverage AI for better productivity and code quality.",
    date: "2026-01-15T13:00:00.000Z",
    tags: ["AI", "Tools", "Productivity"],
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    author: {
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    readingTime: "7 min read",
  },
  {
    slug: "web-performance-optimization-guide",
    title: "The Complete Web Performance Optimization Guide",
    excerpt:
      "Master web performance optimization with practical techniques for Core Web Vitals, lazy loading, code splitting, and more.",
    date: "2026-01-12T08:30:00.000Z",
    tags: ["Performance", "Web Development", "SEO"],
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    author: {
      name: "Maria Garcia",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    readingTime: "15 min read",
  },
  {
    slug: "building-design-systems",
    title: "Building Scalable Design Systems with React",
    excerpt:
      "A practical approach to creating and maintaining design systems that scale across large organizations and multiple products.",
    date: "2026-01-10T15:15:00.000Z",
    tags: ["Design Systems", "React", "UI/UX"],
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    author: {
      name: "Alex Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    readingTime: "11 min read",
  },
  {
    slug: "graphql-vs-rest-2026",
    title: "GraphQL vs REST in 2026: Making the Right Choice",
    excerpt:
      "An updated comparison of GraphQL and REST APIs. Understand when to use each approach and how to make the best decision for your project.",
    date: "2026-01-08T10:45:00.000Z",
    tags: ["GraphQL", "REST", "API"],
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    author: {
      name: "Sophie Martin",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    readingTime: "8 min read",
  },
  {
    slug: "serverless-architecture-patterns",
    title: "Serverless Architecture Patterns for Modern Apps",
    excerpt:
      "Explore proven serverless architecture patterns and learn how to build scalable, cost-effective applications with AWS Lambda, Vercel, and more.",
    date: "2026-01-05T12:00:00.000Z",
    tags: ["Serverless", "Architecture", "Cloud"],
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    author: {
      name: "Robert Lee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    },
    readingTime: "10 min read",
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
