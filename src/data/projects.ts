import offerwatchDashboard from '../assets/projects/offerwatch-dashboard.jpg';
import offerwatchStats from '../assets/projects/offerwatch-stats.jpg';
import offerwatchInterviewPrep from '../assets/projects/offerwatch-interview-prep.jpg';
import offerwatchStories from '../assets/projects/offerwatch-stories.jpg';
import fullstackStarterScreenshot from '../assets/projects/react-java-fullstack-starter.jpg';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  statLabel: string; // what the "stat bar" represents for this project
  statValue: number; // 0-100, illustrative depth indicator
  links: { label: string; url: string }[];
  accent: 'pink' | 'teal' | 'lavender';
  kind: 'app' | 'client';
  status?: string; // optional badge, e.g. "Learning project · In progress"
  images?: { src: string; alt: string; label: string }[]; // images[0] is the card's hero image
}

export const projects: Project[] = [
  {
    slug: 'offerwatch',
    name: 'Offerwatch',
    tagline: 'A full-stack SaaS job application tracker.',
    description:
      "Offerwatch keeps every application, interview stage, and offer in one place instead of scattered across spreadsheets and email threads. Built with JWT authentication and Google Sign-In, PostgreSQL on Supabase with row-level security enforced via Spring Security, and a freemium model with Stripe billing planned for paid tiers. I own the full product lifecycle: UI/UX, REST API design, database schema, CI/CD, and production infrastructure on Railway.",
    role: 'Solo full-stack developer (product, backend, and UI)',
    stack: ['Angular 21', 'Spring Boot', 'PostgreSQL', 'Supabase', 'Railway'],
    statLabel: 'Data layer',
    statValue: 85,
    links: [
      { label: 'Live demo', url: 'https://offerwatch-production-8cbf.up.railway.app/' },
      { label: 'GitHub', url: 'https://github.com/KehlseyHoman/offerwatch' },
    ],
    accent: 'teal',
    kind: 'app',
    images: [
      { src: offerwatchDashboard, alt: 'Offerwatch dashboard showing job applications grouped by status', label: 'Dashboard' },
      { src: offerwatchStats, alt: 'Offerwatch analytics page with interview pipeline funnel and application sources', label: 'Analytics' },
      { src: offerwatchInterviewPrep, alt: 'Offerwatch interview prep page with curated questions and personal notes', label: 'Interview Prep' },
      { src: offerwatchStories, alt: 'Offerwatch behavioral stories page organized by theme', label: 'Stories' },
    ],
  },
  {
    slug: 'react-java-fullstack-starter',
    name: 'React + Java Fullstack Starter',
    tagline: 'A beginner-friendly full-stack starter template, built around a real chore & bill-splitting app.',
    description:
      "An open-source starter for developers learning React and Spring Boot together: working CRUD out of the box (add, view, and check off chores against an H2 database), then a guided 10-step roadmap that walks through adding a real Person entity, a Bill model, an 'who owes whom' calculation, auth, and deployment, each step introducing a new concept roughly easiest to hardest. Built with intentional gaps rather than as a finished app, so the person using it is writing real code from the first feature onward.",
    role: 'Creator (open-source teaching resource)',
    stack: ['React', 'JavaScript', 'Spring Boot', 'Java', 'H2'],
    statLabel: 'Full-stack coverage',
    statValue: 80,
    links: [{ label: 'GitHub', url: 'https://github.com/KehlseyHoman/react-java-fullstack-starter' }],
    accent: 'lavender',
    kind: 'app',
    status: 'Starter template · open-source',
    images: [
      { src: fullstackStarterScreenshot, alt: 'The Chore Board UI: a corkboard-style app with pinned chore cards, each showing an assignee and a checkbox, plus a form to add and pin new chores', label: 'Chore Board' },
    ],
  },
  {
    slug: 'shelved',
    name: 'Shelved',
    tagline: 'A social app for book lovers, built natively for iOS.',
    description:
      "Shelved is a social reading app: track what you're reading, share it, see what friends are picking up next. Built entirely in SwiftUI with Firebase Auth for identity and AWS Amplify for backend infrastructure, a deliberate step outside the web stack to prove the frontend instincts translate across platforms. This was a learning project to pick up SwiftUI and mobile development, and it's shelved in an unfinished state rather than actively maintained.",
    role: 'Solo iOS developer',
    stack: ['SwiftUI', 'Firebase Auth', 'AWS Amplify'],
    statLabel: 'Platform range',
    statValue: 70,
    links: [{ label: 'GitHub', url: 'https://github.com/KehlseyHoman/shelved-mobile' }],
    accent: 'lavender',
    kind: 'app',
    status: 'Learning project · unfinished',
  },
  {
    slug: 'kitchen-designs-by-wendy',
    name: 'Kitchen Designs by Wendy',
    tagline: 'Marketing site for a kitchen design business.',
    description:
      "A production website built and deployed for a small business client, handling everything from design and DNS configuration to performance optimization and ongoing maintenance.",
    role: 'Freelance frontend developer',
    stack: ['WordPress', 'Cloudflare', 'AWS Lightsail'],
    statLabel: 'Client site',
    statValue: 100,
    links: [{ label: 'Visit site', url: 'https://www.kitchendesignsbywendy.com/' }],
    accent: 'pink',
    kind: 'client',
  },
  {
    slug: 'twin-bay-stoneworks',
    name: 'Twin Bay Stoneworks',
    tagline: 'Marketing site for a stoneworks and masonry business.',
    description:
      "A production website built and deployed for a small business client, handling everything from design and DNS configuration to performance optimization and ongoing maintenance.",
    role: 'Freelance frontend developer',
    stack: ['WordPress', 'Cloudflare', 'AWS Lightsail'],
    statLabel: 'Client site',
    statValue: 100,
    links: [{ label: 'Visit site', url: 'https://www.twinbaystoneworksllc.com/' }],
    accent: 'teal',
    kind: 'client',
  },
];
