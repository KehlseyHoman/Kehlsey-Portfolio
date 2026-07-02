export interface TimelineItem {
  key: string;
  date: string;
  title: string;
  org: string;
  location?: string;
  description: string;
  accent: 'pink' | 'lavender' | 'teal';
}

export const timeline: TimelineItem[] = [
  {
    key: 'freelance-start',
    date: 'Mar 2018 – Present',
    title: 'Frontend Web Developer, Freelance',
    org: 'Self-Employed',
    location: 'Remote',
    description:
      'Designed and deployed production websites for small business clients on WordPress, Cloudflare, and AWS Lightsail, handling everything from DNS configuration to performance optimization.',
    accent: 'teal',
  },
  {
    key: 'dematic',
    date: 'May 2018 – Aug 2018',
    title: 'Data Analytics Intern',
    org: 'Dematic',
    location: 'Grand Rapids, MI',
    description:
      'Wrote SQL queries against customer data warehouses to surface operational insights, and built Tableau dashboards that replaced manual reporting and cut turnaround time for stakeholders.',
    accent: 'lavender',
  },
  {
    key: 'education',
    date: '2019',
    title: 'B.S. Computer Science',
    org: 'Grand Valley State University',
    location: 'Allendale, MI',
    description: 'Graduated with a Bachelor of Science in Computer Science.',
    accent: 'pink',
  },
  {
    key: 'gentex',
    date: 'Jul 2019 – Dec 2020',
    title: 'Production Support Engineer',
    org: 'Gentex',
    location: 'Zeeland, MI',
    description:
      'Built and maintained internal production-facing tools in Angular and TypeScript for manufacturing operations teams, plus SQL-backed reporting interfaces and VBA-automated data workflows.',
    accent: 'teal',
  },
  {
    key: 'gm',
    date: 'Jan 2021 – May 2026',
    title: 'Software Engineer, Frontend Lead',
    org: 'General Motors',
    location: 'Detroit, MI',
    description:
      'Owned frontend architecture on three of six enterprise production applications over 5.5 years, delivering 350+ features and 300+ bug fixes across dealer-facing platforms, executive dashboards, and internal tools.',
    accent: 'lavender',
  },
];
