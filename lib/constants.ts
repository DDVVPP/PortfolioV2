import GitNoteLaptopMobile from '@/public/GitNoteLaptopMobile.png';
import GitNoteFigma from '@/public/GitNote-Figma.png';
import DevTodayFigma from '@/public/DevToday-Figma.png';
import DevTodayLaptopMobile from '@/public/DevTodayLaptopMobile.png';

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
    date: 'Feb 2023 - May 2023',
    company: 'UStrive',
    description: 'An online career and college mentoring platform.',
    role: 'Full-stack Developer',
    details: `Developed and maintained mentor and student portals –– Debugged a duplicate messages issue –– Updated onboarding process in Mixpanel to document user interactions.`,
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
      'Contributed to dynamic form generation for internal and external use –– Successfully migrated existing app functionalities to a new site with updated UX/UI designs while maintaining the functionality of the old site –– Implemented Jest unit tests on the frontend and Mocha unit tests on the backend to ensure code quality',
    website: 'https://www.mapistry.com/',
    tags: [
      'JavaScript',
      'TypeScript',
      'React.js',
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
      'Implemented new features for the client-facing app used by responders, supervisors, and clinicians –– Assisted in interviewing and evaluating 15+ candidates –– Implemented Jest unit tests for new features –– Transitioned the app on the frontend to a new tech stack',
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
      'Implemented cart screen features through the full stack –– Contributed to new user signup and authentication processes –– Worked on the past orders screen',
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
    title: 'DevToday',
    description: 'A content creation platform tailored for developers',
    coverImage: DevTodayLaptopMobile,
    mainImage: DevTodayFigma,
    altText: 'dev-today',
    route: '/projects/dev-today',
    demoLinkV1: 'https://capstone-darshin-adam.vercel.app',
    demoLinkV2: 'https://dev-today-v2.vercel.app',
    githubLink: 'https://github.com/DDVVPP/DevToday',
    tags: [
      'Next.js',
      'TypeScript',
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
    overview:
      'DevToday provides users with an array of tools and resources to effortlessly create and share content, enabling the exchange of knowledge and ideas within the community. The platform features developer-focused posts, podcasts, and event feeds, ensuring users stay informed on the latest in tech. The app encourages engagement through likes, follows, and comments, and allows users to create groups of like-minded individuals, professionals, and enthusiasts in the tech space.',
    learnings: [
      'Proficiency in NextJS: Developed solid proficiency in Next.js, focusing on file-based routing, server-side and client-side components, data fetching, caching, and revalidation.',
      'Backend Development: Strengthened backend skills by working with Prisma and Supabase—creating relational schemas, executing CRUD operations and SQL queries, and building seed files using Prisma and faker.js.',
      'Third-Party Library Integration: Successfully integrated a variety of libraries and frameworks, including TinyMCE, Framer Motion, Shadcn, Upload Dropzone, Google Maps API, and React Datepicker, utilizing Tailwind CSS for styling',
      'Form Handling and Validation: Gained valuable experience in form generation and zod validation',
      'Styling and Responsiveness: Advanced my styling skills in mobile responsiveness, light and dark mode integration, flex layout, while applying custom styles to third-party libraries like Clerk Authentication, TinyMCE, React Datepicker, and Google Maps API.',
    ],
    challenges: [
      /* As a user I want to be able to select a range of dates and times for my meetup. a) My start date should start on today @ the current time b) My end date and time should never be before my start date and time If I select a "start date" that extends past (After) my "end date", my "end date" should automatically reset to the current start date. If I select a new "start date" that's before my "end date", the "end date" does not have to reset. */
      'Create Meetup - React Datepicker: Implement custom logic for selecting start and end date/time. Disable irrelevant options and auto-select relevant date and time according to user selection.',
      /* Adding a member to members input shouldn't make them show in admins box, and vice versa */
      'Create Group - Search and Add Members/Admins: Ensure no duplicates in either the members or admins fields. When a user is added to one field, remove them from the search results of the other.',
      /* Logic currently is to order them like linkedIn - in order they are received - whether read or unread, with infinite scroll */
      'Notifications: Developed a system for ordering all notifications according to most recent first, while highlighting unread ones. Implemented functionality to mark all notifications as read without disrupting the display order. Integrated infinite scroll to allow users to view all notifications.',
      /* createRoot loses the clerkContext (ClerkInstanceContext). It creates a new root typically at the top level of the app - context providers rendered into this root won't have the same context as components outside this root.  Each root has its own separate context hierarchy.
      createPortal: keeps the React component tree intact, but physically renders the component elsewhere in the DOM, like outside the parent div, but within the same root. The context from the parent tree is maintained */
      "Custom Clerk Menu: Utilized React's createPortal() to customize Clerk menu items. Used createPortal() over createRoot() and root.render() as it allowed for better placement within the existing DOM tree, and for maintaining context.",
    ],
    isDisabled: false,
  },
  {
    title: 'GitNote',
    description: 'A knowledge and progress tracker for developers',
    coverImage: GitNoteLaptopMobile,
    mainImage: GitNoteFigma,
    altText: 'git-note',
    route: '/projects/git-note',
    demoLinkV1: 'https://capstone-darshin-adam.vercel.app',
    githubLink: 'https://github.com/DDVVPP/PortfolioV2',
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
    overview: 'Git Note text',
    learnings: [
      'Acquired proficiency in NextJS: File based routing, server side and client side components, data fetching, caching and revalidation',
      'Sharpened my backend skills: Prisma and Supabase, creating schemas with relations, CRUD operations SQL queries, and the creation of a seed file using prisma and faker.js.',
      'Successfully incorporated 3rd party libraries and frameworks: TinyMCE, Framer Motion, Shadcn, Upload Dropzone, Google Maps Api, React Datepicker, Tailwind CSS',
      'Gained a better understanding of form generation and zod validation',
      'Advanced my knowledge of styling: Custom styling for 3rd party libraries and frameworks such as Clerk Authentication, TinyMCE, React Datepicker, and Google Maps Api, mobile responsiveness, light and dark modes, and flex',
    ],
    challenges: [
      'Create Meetup - React Datepicker: Start and end date and time custom logic selection - disable irrelevant dates and times and auto-select relavant date and time according to user selection.',
      'Create Group - Search and add members and/or admins: Adding a user to one input removes user from search in other input - ensure that there are no duplicates in either field or search.',
      'Notifications: Ordering notifications, indicating unread notifications in decided order, marking all notifications as read while maintaining the order, and infinite scroll',
    ],
    isDisabled: true,
  },
];

export const artImageOrderAndTitle = [
  { altText: 'armadillo-tails', customTitle: 'Armadillo-esque' },
  { altText: 'bench-lines', customTitle: 'An Unraveling' },
  { altText: 'house-lines', customTitle: 'A House in Austin' },
  { altText: 'clothesline', customTitle: 'Busy Thoughts' },
  { altText: 'fold-weave', customTitle: 'Not Everything Needs to Fit Just So' },
  { altText: 'disparate-thoughts', customTitle: null },
  { altText: 'spikey-thoughts', customTitle: null },
  { altText: 'fuzzy-splats', customTitle: null },
  { altText: 'man-with-weeds', customTitle: 'In the Weeds' },
  { altText: 'space-man', customTitle: 'Tangled' },
  { altText: 'spaghetti-people', customTitle: 'Wormholes' },
  { altText: 'tear', customTitle: null },
  { altText: 'crows-self-portrait', customTitle: 'Overwhelmed' },
  { altText: 'spilling-over', customTitle: null },
  { altText: 'beowulf', customTitle: 'Book Cover: Beowulf' },
  { altText: 'jelly-fish-abstract', customTitle: 'Abstract Jellyfish' },
  { altText: 'king-crown-diamonds', customTitle: 'The King and his Diamonds' },
  { altText: 'flowers', customTitle: "Flowers for Mother's Day" },
  { altText: 'bleeding-blues', customTitle: null },
  { altText: 'heart-splatters', customTitle: null },
  { altText: 'day2-spider', customTitle: 'Sketch from Memory: Unnerved' },
  { altText: 'day4-pipe-worms', customTitle: 'Sketch from Memory: Burst' },
  {
    altText: 'day5-city-moon',
    customTitle: 'Sketch from Memory: Nighttime Moonscape',
  },
  { altText: 'mirror-mirror', customTitle: 'Is My Face Still There?' },
  { altText: 'toothbrush', customTitle: "I Really Don't Want To" },
  {
    altText: 'trees-and-mountains',
    customTitle: 'In the Darkened Hour by Bruce Boston',
  },
  { altText: 'curlew', customTitle: null },
  { altText: 'landscape-hand', customTitle: 'Encroach' },
  { altText: 'phones-ramen', customTitle: 'Deceit' },
  { altText: 'black-bird-process', customTitle: 'Process: Black Bird' },
  { altText: 'black-bird', customTitle: null },
  {
    altText: 'abstract-flower-process',
    customTitle: 'Process: Abstract Flower',
  },
  { altText: 'abstract-flower', customTitle: null },
  { altText: 'jellyfish2', customTitle: 'Jellyfish' },
  { altText: 'flying-gecko-process', customTitle: 'Process: Winged Gecko' },
  { altText: 'flying-gecko', customTitle: 'Winged Gecko' },
  { altText: 'is-it-safe', customTitle: null },
  { altText: 'fearfully-curious', customTitle: null },
  { altText: 'self-portrait-paint', customTitle: 'Self-Portrait' },
  { altText: 'man-lines-paint', customTitle: 'Portrait of a Man' },
  { altText: 'oranges', customTitle: 'Citrus Wheels' },
  { altText: 'colored-tiles', customTitle: null },
  { altText: 'color-splats-dots', customTitle: 'Color Splats with Dots' },
  { altText: 'crop-circles', customTitle: null },
  {
    altText: 'color-splats',
    customTitle: 'View 1: Disparate Thoughts in Color',
  },
  {
    altText: 'color-splats2',
    customTitle: 'View 2: Disparate Thoughts in Color',
  },
  { altText: 'glazed-plates', customTitle: 'Handmade Plates' },
  { altText: 'hat-glazeware2', customTitle: 'Hat Bowl' },
  { altText: 'beehive-vase', customTitle: null },
  { altText: 'ramen-glazeware1', customTitle: 'Ramen Bowl' },
  { altText: 'ramen-glazeware2', customTitle: 'Bowl' },
  { altText: 'bubble-vase1', customTitle: 'View 1: Bubble Vase' },
  { altText: 'bubble-vase2', customTitle: 'View 2: Bubble Vase' },
  { altText: 'quizzical-figure', customTitle: 'Greenware: Quizzical Figure' },
  { altText: 'undulating-planter', customTitle: null },
  { altText: 'worm-vase', customTitle: null },
  { altText: 'mask1', customTitle: 'View 1: Mask' },
  { altText: 'mask2', customTitle: 'View 2: Mask' },
  { altText: 'agape', customTitle: 'Greenware: Agape Figure' },
  { altText: 'little-man', customTitle: 'Greenware: Happy Little Dude' },
  { altText: 'little-man-glazed', customTitle: 'Glazed: Happy Little Dude' },
  { altText: 'loopy-man-process', customTitle: 'Greenware: Loopy Dude' },
  { altText: 'loopy-man-glazed3', customTitle: 'Glazed: Loopy Dude' },
];
