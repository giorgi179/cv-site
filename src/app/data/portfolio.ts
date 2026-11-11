// ──────────────────────────────────────────────────────────────
// All site content lives here. Edit this file, not the templates.
// TODO: replace each `repoUrl` with the exact repository link.
// ──────────────────────────────────────────────────────────────

export const GITHUB = 'https://github.com/giorgi179';

export const PROFILE = {
  name: 'Giorgi Meshveliani',
  role: 'Angular / .NET Full Stack Developer',
  location: 'Tbilisi, Georgia',
  email: 'giorgimeshveliani03@gmail.com',
  phone: '+995 597 040 055',
  github: GITHUB,
  intro:
    'Self-taught developer who designs, builds and deploys full-stack web apps on his own — Angular on the front, ASP.NET Core on the back.',
  summary:
    'Self-taught Angular / .NET Full Stack Developer who builds and deploys production-grade web applications end-to-end. Proficient in Angular, TypeScript, RxJS and Angular Signals on the frontend, and C#, ASP.NET Core and SQL Server on the backend. Every project here was designed, built and deployed independently — covering component-driven architecture, REST API design, authentication, database design and responsive SCSS (BEM). Solid grounding in OOP, clean code and SOLID; a fast learner comfortable across the whole stack.',
};

export const MARQUEE = [
  'Angular', 'TypeScript', 'RxJS', 'Signals', 'SCSS · BEM', 'C#', 'ASP.NET Core',
  'Entity Framework Core', 'SQL Server', 'PostgreSQL', 'JWT', 'SignalR', 'Render', 'Git',
];

export interface SkillGroup { title: string; items: string[] }

export const SKILLS: SkillGroup[] = [
  { title: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'Angular Signals', 'HTML5', 'CSS3 / SCSS (BEM)', 'SSR'] },
  { title: 'Backend & Data', items: ['C#', 'ASP.NET Core', 'REST API design', 'Entity Framework Core', 'SQL Server', 'PostgreSQL', 'LINQ', 'JWT auth', 'SignalR'] },
  { title: 'Tools & Practices', items: ['Git / GitHub', 'Postman', 'Render (deployment)', 'OOP', 'SOLID', 'Clean Architecture basics', 'Agile / Scrum basics', 'CI basics'] },
];

export const LEARNING = ['Storybook', 'Jest', 'Nrwl Nx'];

export const EDUCATION = {
  school: 'IT Academy STEP — Tbilisi, Georgia',
  field: 'Computer Science & Software Development',
  period: '2023 – 2026',
  documents: ['Software Development Certificate', 'Enrollment Confirmation', 'Programming Training Diploma'],
};

export const LANGUAGES = [
  { name: 'Georgian', level: 'Native' },
  { name: 'English', level: 'Intermediate (technical reading & writing)' },
  { name: 'Russian', level: 'Basic' },
];

export interface ProjectSection { title: string; text: string }

export interface Project {
  slug: string;
  title: string;
  kind: string;
  status: string;
  tagline: string;
  overview: string;
  stack: string[];
  highlights: string[];
  sections: ProjectSection[];
  liveUrl?: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'bookstore-platform',
    title: 'Bookstore Platform',
    kind: 'Full Stack Web Application',
    status: 'Live',
    tagline: 'An online bookstore: catalog, cart, orders and JWT authentication.',
    overview:
      'A complete bookstore application with a RESTful ASP.NET Core backend and an Angular frontend, deployed as two separate services on Render.',
    stack: ['Angular', 'RxJS', 'Signals', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JWT', 'Render'],
    highlights: [
      'User authentication with JWT',
      'Book catalog, shopping cart and order management',
      'Search with debounce',
      'Intersection-observer animations',
      'Fully responsive across devices',
    ],
    sections: [
      { title: 'Frontend', text: 'Component-based Angular architecture using RxJS for async flows and Angular Signals for state management. Search is debounced to avoid needless requests, and sections animate in with an intersection observer.' },
      { title: 'Backend', text: 'A RESTful API in ASP.NET Core with Entity Framework Core on SQL Server, powering authentication, the catalog, the cart and orders.' },
      { title: 'Deployment', text: 'Frontend and backend are deployed as separate services on Render.' },
    ],
    liveUrl: 'https://bookstore-sz30.onrender.com/auth',
    repoUrl: GITHUB,
  },
  {
    slug: 'publishers-portal',
    title: 'GIORGI. Publishers Portal',
    kind: 'Full Stack Web Application',
    status: 'Live',
    tagline: 'A publishing-house portal built for speed, SEO and clean structure.',
    overview:
      'A portal for a publishing house where browsing, search, cart and sign-in flows sit on top of a carefully structured Angular app with a custom SCSS architecture.',
    stack: ['Angular', 'SCSS · BEM', 'Lazy loading', 'ASP.NET Core', 'SQL Server', 'Render'],
    highlights: [
      'SEO optimization with Open Graph and Twitter Card metadata',
      'Custom SCSS architecture using BEM',
      'Book browsing, search, cart and authentication flows',
      'Lazy-loaded routes for performance',
    ],
    sections: [
      { title: 'SEO & sharing', text: 'Page metadata plus Open Graph and Twitter Card tags, so links to the portal preview properly when shared.' },
      { title: 'UI architecture', text: 'A responsive interface on a custom SCSS architecture that follows BEM, with a clean component structure.' },
      { title: 'Performance', text: 'Angular routing with lazy loading keeps the initial bundle small.' },
    ],
    liveUrl: 'https://bink-angular.onrender.com/home',
    repoUrl: GITHUB,
  },
  {
    slug: 'mycar-ge',
    title: 'MyCar.ge',
    kind: 'Car marketplace for Georgia',
    status: 'In progress',
    tagline: 'An Angular SSR marketplace with a bilingual UI and a luxury design system.',
    overview:
      'A car marketplace for Georgia built with Angular and server-side rendering on top of a .NET backend. It is the most ambitious project here and is still being built and deployed.',
    stack: ['Angular (SSR)', 'Signals', 'Reactive Forms', '.NET', 'JWT', 'JSON-LD', 'Render'],
    highlights: [
      'Professional SEO: SeoService, JSON-LD, Open Graph, structured data',
      'Multi-step add-car form with reactive validation and signal-based state',
      'Georgian / English translation with a custom TranslatePipe',
      'Register with email verification, login with JWT',
      'Luxury SCSS design system, responsive down to 320px',
    ],
    sections: [
      { title: 'Design system', text: 'A dark sidebar with gold accents, built in SCSS and responsive down to 320px, plus a full-screen animated loader at the app root and a header driven by a reactive isLoggedIn signal.' },
      { title: 'Forms & filters', text: 'A multi-step add-car form with reactive validation and signal-based state. Filter state lives in query params, read through ActivatedRoute.' },
      { title: 'Auth & i18n', text: 'Registration with email verification and JWT login through an AuthService. The UI switches between Georgian and English through a TranslatePipe backed by ka.json and en.json.' },
      { title: 'SSR & deployment', text: 'Resolved recurring SSR issues (IntersectionObserver and isPlatformBrowser guards), CORS configuration and Node.js version pinning while deploying both frontend and backend on Render.' },
    ],
    repoUrl: GITHUB,
  },
  {
    slug: 'bookapi',
    title: 'BookAPI',
    kind: '.NET Web API',
    status: 'Deployed',
    tagline: 'A .NET Web API on PostgreSQL, hosted on Render with Neon.tech.',
    overview:
      'A backend-focused project: a .NET Web API backed by PostgreSQL on Neon.tech, with the operational work of keeping a free-tier deployment healthy.',
    stack: ['.NET Web API', 'PostgreSQL', 'Npgsql', 'Neon.tech', 'Render', 'UptimeRobot'],
    highlights: [
      'Migrated the database from an expired Render PostgreSQL instance to Neon.tech',
      'Fixed an Npgsql connection-string issue (key-value format, not URI)',
      'UptimeRobot keeps the Render service awake',
    ],
    sections: [
      { title: 'Database migration', text: 'When the Render PostgreSQL database expired, I moved the API to Neon.tech. The Npgsql provider needed the key-value connection-string format rather than a URI.' },
      { title: 'Keeping it awake', text: 'An UptimeRobot monitor pings the Render service so the free-tier instance stays responsive.' },
    ],
    repoUrl: GITHUB,
  },
];
