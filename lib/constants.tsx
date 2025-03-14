import GitNoteLaptopMobile from '@/public/GitNoteLaptopMobile.png';
import DevTodayLaptopMobile from '@/public/DevTodayLaptopMobile.png';
import MyPortfolioLaptopMobile from '@/public/MyPortfolioLaptopMobile.png';

export const navbarItems = [
  {
    route: '/about',
    title: 'About',
  },
  {
    route: '/work',
    title: 'Work',
  },
  {
    route: '/projects',
    title: 'Projects',
  },
  {
    route: '/art',
    title: 'Art',
  },
];

export const workTabs = [
  {
    tabType: 'software',
    buttonText: 'Software Engineering',
  },
  {
    tabType: 'architecture',
    buttonText: 'Architecture',
  },
];

export const aboutMeTech = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'PostgreSQL',
  'Node.js',
];

export const softwareWorkItems = [
  {
    date: 'Feb 2025 - Current',
    company: 'Hack for LA',
    description:
      'A civic tech organization that brings together volunteers to build digital tools and services in collaboration with community partners and local government.',
    role: 'Software Developer',
    details: `Contributed to the Hack for LA website, by updating project profile pages and addressing prioritized GitHub issues –– Submitted PRs and participated in peer code reviews to ensure quality and consistency across the codebase –– Created GitHub issues using team templates to help expand and refine the project backlog`,
    website: 'https://www.hackforla.org/',
    tags: ['JavaScript', 'HTML', 'Docker'],
  },
  {
    date: 'Feb 2023 - May 2023',
    company: 'UStrive',
    description: 'An online career and college mentoring platform.',
    role: 'Full-stack Developer',
    details: `Added and updated events to Mixpanel from the FE and BE to more accurately track mentor and student onboarding processes –– Debugged issues in mentor and student portals`,
    website: 'https://ustrive.com/',
    tags: [
      'JavaScript',
      'Express',
      'Node.js',
      'React.js',
      'Axios',
      'Twilio',
      'Mixpanel',
    ],
  },
  {
    date: 'May 2022 - Jan 2023',
    company: 'Mapistry',
    description:
      'An Environmental, Health, and Safety compliance SaaS platform and an early stage startup.',
    role: 'Full-stack / Front-end Developer',
    details:
      'Developed the existing dashboard’s form stencils, form submissions, and custom forms, using SQL queries and React class methods –– Migrated the FE stack from Javascript, Backbone, React Redux, and Sass to Typescript, React, React Query, Styled Components, and MaterialUI with feature flag functionality and Figma designs –– Implemented a new user flow on the main dashboard by organizing content into subpages, ensuring seamless functionality and integration with the existing site –– Implemented Jest unit tests on the FE and Mocha unit tests on the BE to ensure code qualityImplemented Jest unit tests on the FE and Mocha unit tests on the BE to ensure code quality',
    website: 'https://www.mapistry.com/',
    tags: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'React-Redux',
      'Styled Components',
      'MaterialUI',
      'React Query',
      'Jest',
      'Mocha',
      'Node.js',
    ],
  },
  {
    date: 'Jun 2020 - May 2022',
    company: 'Ready',
    description:
      "A healthcare startup that provides more easily accessible non-emergency healthcare by sending responders to a patient's home.",
    role: 'Front-end Software Engineer',
    details:
      'Developed patient registration and encounter records used by responders, supervisors, and clinicians, leveraging React, Formik, Yup validations, and Jest for unit testing –– Implemented dynamic logic to manage visibility, accessibility, and interactivity of inputs and fields, integrating user role-based authorization with encounter and task lifecycle conditions –– Created several custom, reusable frontend UI React components (e.g., Pill, AlertBox, Avatar), using Styled Components, Storybook, and Jest unit tests –– Played an active role in conducting technical interviews of 15+ candidates –– Successfully migrated the app from Javascript, React, GraphQL, and AWS Amplify, to Typescript, React, GraphQL/Apollo Client',
    website: 'https://www.mylaurelhealth.com/',
    tags: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React.js',
      'Apollo GraphQL',
      'Jest',
      'Styled Components',
      'Storybook',
    ],
  },
  {
    date: 'Apr 2020 - Jun 2020',
    company: 'Errunds',
    description:
      'An online community marketplace connecting the user to local brick and mortars.',
    role: 'Full-stack Developer Intern',
    details:
      'Implemented new user signup functionality and authentication –– Implemented cart screen features through the full-stack of the application using Figma designs –– Implemented past orders screen display using GraphQL queries',
    website: 'https://tyca.nyc/',
    tags: [
      'JavaScript',
      'Node.js',
      'React-Redux',
      'React Native',
      'Apollo GraphQL',
      'PostgreSQL',
      'Express.js',
      'Sequelize',
    ],
  },
];

export const architectureWorkItems = [
  {
    date: 'Sept 2017 - Dec 2018',
    company: 'Bade Stageberg Cox Architecture',
    role: 'Project Architect / Architectural Designer',
    description: `Supervised multiple phases for the relocation of Artists Space, an iconic NYC art gallery –– Managed the renovation of a summer kitchen highly tailored to high-profile client’s requirements –– Implemented diagrams, detailed sketches, and revised shop drawings –– Illustrated concepts as 3D models and renderings –– Managed correspondence with contractors, clients, and consultants, ensuring effective communication and coordination.`,
    website: 'https://www.bscarchitecture.com/',
    tags: [
      'AutoCad',
      'Illustrator',
      'Photoshop',
      'Sketch-up',
      'Vray',
      'Rhinoceros',
    ],
  },
  {
    date: 'Oct 2015 - Sept 2017',
    company: "O'Neill Rose Architects",
    role: 'Project Architect / Architectural Designer',
    description: `Managed multiple phases of single-family NYC residences –– Developed and generated detailed construction drawings and sketches –– Revised shop drawings –– Created 3D models, diagrams, and renderings –– Managed correspondence with contractors, clients, and consultants, ensuring effective communication and coordination.`,
    website: 'https://www.oneillrosearchitects.com/',
    tags: [
      'AutoCad',
      'Illustrator',
      'Photoshop',
      'Sketch-up',
      'Vray',
      'Rhinoceros',
    ],
  },
  {
    date: 'Jun 2013 - Oct 2015',
    company: 'Audrey Matlock Architect',
    role: 'Project Architect / Architectural Designer',
    description: `Managed the Construction Administration phase for a single-family NYC apartment
–– Organized and coordinated interior design work of an award-winning Hamptons residence –– Developed design drawings and detailed construction drawings –– Generated 3D models and renderings`,
    website: 'http://www.audreymatlock.com/',
    tags: ['Vectorworks', 'Illustrator', 'Photoshop', 'Vray', 'Rhinoceros'],
  },
  {
    date: 'Nov 2011 - Apr 2013',
    company: 'Lauren Rubin Architecture',
    role: 'Architectural Designer',
    description: `Assisted in the Construction Administration phase of multiple single family residences
–– Organized and coordinated interior design work for an advertising company and a single-family residence –– Generated drawings for furniture placement –– Created 3D concept renderings for each room –– Developed all phases of document sets for two single-family residences.`,
    website: 'https://laurenrubinarchitecture.com/',
    tags: ['AutoCad', 'Photoshop', 'Sketchup'],
  },
  {
    date: 'Jul 2009 - Apr 2010',
    company: 'Brillembourg Architects',
    role: 'Junior Architectural Designer',
    description:
      'Assisted in the development of a design proposal for a housing complex/hotel in Venezuela with 3D models, renderings, and 2D drawings –– Assisted in all phases of design, development, and construction for a one-bedroom Manhattan residential renovation –– Revised shop drawings and implemented detailed construction sketches.',
    website: 'https://www.carlosbrillembourgarchitects.com/',
    tags: ['AutoCad', 'Photoshop', 'Sketchup'],
  },
  {
    date: 'Sep 2007 - April 2009',
    company: 'Garrison Architects',
    role: 'Junior Architectural Designer',
    description:
      'Managed the Grand Army Plaza International Competition submission in Brooklyn, NY –– Contributed to concept ideas, 3D models, renderings, and design drawings –– Assisted in all phases of design and development for the US Consulate Residence in Samoa –– Generated 3D Models, renderings, schematic design, design development, and construction documents',
    website: 'https://www.garrisonarchitects.com/',
    tags: [
      'AutoCad',
      'Photoshop',
      'Illustrator',
      'Sketchup',
      'Vray',
      'Maxwell Render',
    ],
  },
];

export const projects = [
  {
    title: 'DEVTODAY',
    description: (
      <p>
        A content creation platform tailored for developers featuring posts,
        podcasts, groups, and event feeds. The app encourages engagement through
        likes, follows, and comments. Additional features include{' '}
        <span className="textHighlight">authentication</span>, onboarding,{' '}
        <span className="textHighlight">
          cmdK search, notifications, 3rd party API integrations
        </span>
        , profile and content management using{' '}
        <span className="textHighlight">CRUD</span> operations,{' '}
        <span className="textHighlight">light and dark modes</span>, and{' '}
        <span className="textHighlight">mobile responsiveness</span>.
      </p>
    ),
    coverImage: DevTodayLaptopMobile,
    altText: 'dev-today',
    demoLink: 'https://dev-today-v2.vercel.app',
    githubLink: 'https://github.com/DDVVPP/DevToday',
    tags: [
      'TypeScript',
      'Next.js',
      'Clerk',
      'PostgreSQL',
      'Prisma ORM',
      'Supabase',
      'Zod',
      'Tailwind CSS',
      'Shadcn',
      'TinyMCE',
      'Framer Motion',
    ],
    demoCredentials: true,
  },
  {
    title: <h1 className="animate-pulse">GITNOTE - Work In Progress</h1>,
    description: (
      <p>
        A knowledge and progress tracker for developers featuring{' '}
        <span className="textHighlight">authentication</span>, onboarding,{' '}
        <span className="textHighlight">cmdK search and filtering</span>, post
        and profile management using <span className="textHighlight">CRUD</span>{' '}
        operations, and{' '}
        <span className="textHighlight">mobile responsiveness</span>.
      </p>
    ),
    coverImage: GitNoteLaptopMobile,
    altText: 'git-note',
    demoLink: 'https://git-note-tracker.vercel.app/',
    githubLink: 'https://github.com/DDVVPP/GitNote',
    tags: [
      'Next.js',
      'TypeScript',
      'Auth',
      'PostgreSQL',
      'Prisma ORM',
      'Supabase',
      'Zod',
      'Tailwind CSS',
      'Shadcn',
      'TinyMCE',
    ],
    demoCredentials: true,
  },
  {
    title: 'MY PORTFOLIO',
    description: (
      <p>
        This website, which you are currently exploring, is designed and built
        by me to showcase my professional experience, software engineering
        projects, art work, and personal background, featuring{' '}
        <span className="textHighlight">3rd party API integration</span> and{' '}
        <span className="textHighlight">mobile responsiveness</span>.
      </p>
    ),
    coverImage: MyPortfolioLaptopMobile,
    altText: 'my-portfolio',
    githubLink: 'https://github.com/DDVVPP/PortfolioV2',
    tags: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Shadcn',
      'Cloudinary',
      'Framer Motion',
    ],
  },
];

export const artImageOrder = [
  'armadillo-esque',
  'an-unraveling',
  'a-house-in-austin',
  'a-soft-rebellion',
  'coffee.-beer.-sandwiches.',
  'sense-in-chaos',
  'busy-thoughts',
  'not-everything-needs-to-fit-just-so',
  'disparate-thoughts',
  'spikey-thoughts',
  'fuzzy-splats',
  'kaparos',
  'in-the-weeds',
  'tangled',
  'wormholes',
  'apple',
  'tear',
  'overwhelmed',
  'unstable-rest',
  'the-details-that-shape-us',
  'spilling-over',
  'book-cover-beowulf',
  'abstract-jellyfish',
  'the-king-and-his-diamonds',
  "flowers-for-mother's-day",
  'bleeding-blues',
  'heart-splatters',
  'sketch-from-memory-unnerved',
  'sketch-from-memory-burst',
  'sketch-from-memory-nighttime-moonscape',
  'is-my-face-still-there',
  "i-really-don't-want-to",
  'in-the-darkened-hour-by-bruce-boston',
  'curlew',
  'encroach',
  'deceit',
  'process-black-bird',
  'black-bird',
  'process-abstract-flower',
  'abstract-flower',
  'jellyfish',
  'process-winged-gecko',
  'winged-gecko',
  'is-it-safe',
  'fearfully-curious',
  'self-portrait',
  'portrait-of-a-man',
  'a-man-and-his-reflection',
  'citrus-wheels',
  'colored-tiles',
  'raining-balloons',
  'color-splats-with-dots',
  'crop-circles',
  'view-1-disparate-thoughts-in-color',
  'view-2-disparate-thoughts-in-color',
  'handmade-plates',
  'hat-bowl',
  'beehive-vase',
  'ramen-bowl',
  'bowl',
  'view-1-bubble-vase',
  'view-2-bubble-vase',
  'greenware-quizzical-figure',
  'undulating-planter',
  'worm-vase',
  'view-1-mask',
  'view-2-mask',
  'greenware-agape-figure',
  'greenware-happy-little-dude',
  'glazed-happy-little-dude',
  'greenware-loopy-dude',
  'glazed-loopy-dude',
];
