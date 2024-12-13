import GitNoteLaptopMobile from '@/public/GitNoteLaptopMobile.png';
import GitNoteFigma from '@/public/GitNote-Figma.png';
import DevTodayFigma from '@/public/DevToday-Figma.png';
import DevTodayLaptopMobile from '@/public/DevTodayLaptopMobile.png';

import {
  AbstractFlower,
  ArmadilloTails,
  AbstractFlowerProcess,
  Agape,
  BeehiveVase,
  BenchLines,
  Beowulf,
  BleedingBlues,
  BubbleVase1,
  BubbleVase2,
  Clothesline,
  ColoredTiles,
  ColorSplats,
  ColorSplats2,
  ColorSplatsDots,
  CropCircles,
  BlackBird,
  BlackBirdProcess,
  CrowsSelfPortrait,
  Curlew,
  Day2Spider,
  Day4PipeWorms,
  Day5CityMoon,
  FearfullyCurious,
  Flowers,
  FlyingGecko,
  FoldWeave,
  FuzzySplats,
  GlazedPlates,
  FlyingGeckoProcess,
  HatGlazeware2,
  HeartSplatters,
  HouseLines,
  IsItSafe,
  JellyFishAbstract,
  Jellyfish2,
  KingCrownDiamonds,
  LandscapeHand,
  LittleMan,
  LittleManGlazed,
  LoopyManGlazed3,
  LoopyManProcess,
  ManLinesPaint,
  ManWithWeeds,
  Mask1,
  Mask2,
  MirrorMirror,
  Oranges,
  PhonesRamen,
  QuizzicalFigure,
  RamenGlazeware1,
  RamenGlazeware2,
  SelfPortraitPaint,
  SpaceMan,
  SpaghettiPeople,
  SpikeyThoughts,
  SpillingOver,
  Tear,
  Toothbrush,
  TreesAndMountains,
  UndulatingPlanter,
  WormVase,
  DisparateThoughts,
} from '@/public/art';

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

export const artImages = [
  {
    id: 1,
    src: 'https://portfolio-v2-art.s3.us-west-1.amazonaws.com/public/art/ArmadilloTails.jpg',
    altText: 'armadillo-tails',
    title: 'Armadillo-esque',
    tags: ['black and white', 'pen on paper', 'sketchbook sketch'],
  },
  {
    id: 2,
    src: BenchLines,
    altText: 'bench-lines',
    title: 'An Unraveling',
    tags: ['black and white', 'pen on paper', 'sketchbook sketch'],
  },
  {
    id: 3,
    src: HouseLines,
    altText: 'house-lines',
    title: 'A House in Austin',
    tags: ['black and white', 'pen on paper', 'sketchbook sketch'],
  },
  {
    id: 4,
    src: Clothesline,
    altText: 'clothesline',
    title: 'Busy Thoughts',
    tags: ['black and white', 'pen on paper', 'doodle'],
  },
  {
    id: 5,
    src: FoldWeave,
    altText: 'fold-weave',
    title: 'Not Everything Needs to Fit Just So',
    tags: ['black and white', 'pen and pencil on paper', 'doodle'],
  },
  {
    id: 6,
    src: DisparateThoughts,
    altText: 'disparate-thoughts',
    title: 'Disparate Thoughts',
    tags: ['black and white', 'pen on paper', 'doodle'],
  },
  {
    id: 7,
    src: SpikeyThoughts,
    altText: 'spikey-thoughts',
    title: 'Spikey Thoughts',
    tags: ['black and white', 'pen on paper', 'doodle'],
  },
  {
    id: 8,
    src: FuzzySplats,
    altText: 'fuzzy-splats',
    title: 'Fuzzy Splats',
    tags: ['black and white', 'pen on paper', 'doodle'],
  },
  {
    id: 9,
    src: ManWithWeeds,
    altText: 'man-with-weeds',
    title: 'In the Weeds',
    tags: ['black and white', 'pen on paper', 'sketchbook sketch'],
  },
  {
    id: 10,
    src: SpaceMan,
    altText: 'space-man',
    title: 'Tangled',
    tags: ['black and white', 'pen and pencil on paper', 'sketchbook sketch'],
  },
  {
    id: 11,
    src: SpaghettiPeople,
    altText: 'spaghetti-people',
    title: 'Wormholes',
    tags: ['black and white', 'pen on paper', 'sketchbook sketch'],
  },
  {
    id: 12,
    src: Tear,
    altText: 'tear',
    title: 'Tear',
    tags: [
      'black and white',
      'pen on paper',
      'sketchbook sketch',
      'self-portrait',
    ],
  },
  {
    id: 13,
    src: CrowsSelfPortrait,
    altText: 'crows-self-portrait',
    title: 'Overwhelmed',
    tags: [
      'black and white',
      'pen on paper',
      'copic markers',
      'sketchbook sketch',
    ],
  },
  {
    id: 14,
    src: SpillingOver,
    altText: 'spilling-over',
    title: 'Spilling Over',
    tags: ['pen on paper', 'sketchbook sketch'],
  },
  {
    id: 15,
    src: Beowulf,
    altText: 'beowulf',
    title: 'Book Cover: Beowulf',
    tags: ['photoshop', 'illustration', 'book cover idea'],
  },
  {
    id: 16,
    src: JellyFishAbstract,
    altText: 'jellyfish-abstract',
    title: 'Abstract Jellyfish',
    tags: ['photoshop', 'pen on paper', 'sketchbook sketch'],
  },
  {
    id: 17,
    src: KingCrownDiamonds,
    altText: 'king-crown-diamonds',
    title: 'The King and his Diamonds',
    tags: [
      'pen on paper',
      'color pencil on paper',
      'sketchbook sketch',
      'photoshop',
    ],
  },
  {
    id: 18,
    src: Flowers,
    altText: 'flowers',
    title: "Flowers for Mother's Day",
    tags: ['pen on paper', 'experiments in watercolors'],
  },
  {
    id: 19,
    src: BleedingBlues,
    altText: 'bleeding-blues',
    title: 'Bleeding Blues',
    tags: ['pen on wood', 'gouache on wood'],
  },
  {
    id: 20,
    src: HeartSplatters,
    altText: 'heart-splatters',
    title: 'Heart Splatters',
    tags: ['pen on paper', 'gouache on paper', 'sketchbook sketch'],
  },
  {
    id: 21,
    src: Day2Spider,
    altText: 'day-2-spider',
    title: 'Sketch from Memory: Unnerved',
    tags: ['pen on paper', 'photoshop', 'memory sketch'],
  },
  {
    id: 22,
    src: Day4PipeWorms,
    altText: 'day-4-pipe-worms',
    title: 'Sketch from Memory: Burst',
    tags: ['pen on paper', 'photoshop', 'memory sketch'],
  },
  {
    id: 23,
    src: Day5CityMoon,
    altText: 'day-5-city-moon',
    title: 'Sketch from Memory: Nighttime Moonscape',
    tags: ['pen on paper', 'photoshop', 'memory sketch'],
  },
  {
    id: 24,
    src: MirrorMirror,
    altText: 'mirror-mirror',
    title: 'Is My Face Still There?',
    tags: ['pen on paper', 'photoshop', 'self portrait', 'illustration'],
  },
  {
    id: 25,
    src: Toothbrush,
    altText: 'toothbrush',
    title: "I Really Don't Want To",
    tags: ['pen on paper', 'photoshop', 'self portrait', 'illustration'],
  },
  {
    id: 26,
    src: TreesAndMountains,
    altText: 'trees-and-mountains',
    title: 'In the Darkened Hour by Bruce Boston',
    tags: ['pen on paper', 'photoshop', 'poem illustration'],
  },
  {
    id: 27,
    src: Curlew,
    altText: 'curlew',
    title: 'Curlew',
    tags: ['pen on paper', 'photoshop', 'illustration'],
  },
  {
    id: 28,
    src: LandscapeHand,
    altText: 'landscape-hand',
    title: 'Encroach',
    tags: ['pen on paper', 'photoshop', 'illustration'],
  },
  {
    id: 29,
    src: PhonesRamen,
    altText: 'phones-ramen',
    title: 'Deceit',
    tags: ['pen on paper', 'photoshop', 'illustration'],
  },
  {
    id: 30,
    src: BlackBirdProcess,
    altText: 'black-bird-process',
    title: 'Process: Black Bird',
    tags: ['acrylics', 'process', 'arts club nyc', 'surrealist games'],
  },
  {
    id: 31,
    src: BlackBird,
    altText: 'black-bird',
    title: 'Black Bird',
    tags: ['acrylics', 'arts club nyc', 'surrealist games'],
  },
  {
    id: 32,
    src: AbstractFlowerProcess,
    altText: 'abstract-flower-process',
    title: 'Process: Abstract Flower',
    tags: [
      'gouache',
      'process',
      'hilma af klint inspired',
      'abstract art',
      'arts club nyc',
    ],
  },
  {
    id: 33,
    src: AbstractFlower,
    altText: 'abstract-flower',
    title: 'Abstract Flower',
    tags: [
      'gouache',
      'hilma af klint inspired',
      'abstract art',
      'arts club nyc',
    ],
  },
  {
    id: 34,
    src: Jellyfish2,
    altText: 'jellyfish-2',
    title: 'Jellyfish',
    tags: ['gouache'],
  },
  {
    id: 35,
    src: FlyingGeckoProcess,
    altText: 'flying-gecko-process',
    title: 'Process: Winged Gecko',
    tags: ['gouache', 'process', 'options'],
  },
  {
    id: 36,
    src: FlyingGecko,
    altText: 'flying-gecko',
    title: 'Winged Gecko',
    tags: ['gouache'],
  },
  {
    id: 37,
    src: IsItSafe,
    altText: 'is-it-safe',
    title: 'Is it Safe?',
    tags: ['acrylics', 'self-portrait'],
  },
  {
    id: 38,
    src: FearfullyCurious,
    altText: 'fearfully-curious',
    title: 'Fearfully Curious',
    tags: ['acrylics', 'self-portrait'],
  },
  {
    id: 39,
    src: SelfPortraitPaint,
    altText: 'self-portrait-paint',
    title: 'Self-Portrait',
    tags: ['acrylics', 'self-portrait'],
  },
  {
    id: 40,
    src: ManLinesPaint,
    altText: 'man-lines-paint',
    title: 'Portrait of a Man',
    tags: ['acrylics', 'portrait', 'lines'],
  },
  {
    id: 41,
    src: Oranges,
    altText: 'oranges',
    title: 'Citrus Wheels',
    tags: ['pastels on paper', 'experiments in color'],
  },
  {
    id: 42,
    src: ColoredTiles,
    altText: 'colored-tiles',
    title: 'Colored Tiles',
    tags: ['color pencils on paper', 'puerto rico inspired'],
  },
  {
    id: 43,
    src: ColorSplatsDots,
    altText: 'color-splats-dots',
    title: 'Color Splats with Dots',
    tags: ['gouache on wood', 'experiments on wood'],
  },
  {
    id: 44,
    src: CropCircles,
    altText: 'crop-circles',
    title: 'Crop Circles',
    tags: ['gouache on wood', 'experiments on wood'],
  },
  {
    id: 45,
    src: ColorSplats,
    altText: 'color-splats',
    title: 'View 1: Disparate Thoughts in Color',
    tags: ['gouache on wood', 'experiments on wood', 'fluorescent colors'],
  },
  {
    id: 46,
    src: ColorSplats2,
    altText: 'color-splats-2',
    title: 'View 2: Disparate Thoughts in Color',
    tags: ['gouache on wood', 'experiments on wood', 'fluorescent colors'],
  },
  {
    id: 47,
    src: GlazedPlates,
    altText: 'glazed-plates',
    title: 'Handmade Plates',
    tags: ['ceramics', 'hand-built', 'glazed and fired'],
  },
  {
    id: 48,
    src: HatGlazeware2,
    altText: 'hat-glazeware-2',
    title: 'Hat Bowl',
    tags: ['ceramics', 'wheel-thrown', 'glazed and fired'],
  },
  {
    id: 49,
    src: BeehiveVase,
    altText: 'beehive-vase',
    title: 'Beehive Vase',
    tags: ['ceramics', 'wheel-thrown', 'fired', 'glazed interior'],
  },
  {
    id: 50,
    src: RamenGlazeware1,
    altText: 'ramen-glazeware-1',
    title: 'Ramen Bowl',
    tags: ['ceramics', 'wheel-thrown', 'glazed and fired'],
  },
  {
    id: 51,
    src: RamenGlazeware2,
    altText: 'ramen-glazeware-2',
    title: 'Bowl',
    tags: ['ceramics', 'wheel-thrown', 'glazed and fired'],
  },
  {
    id: 52,
    src: BubbleVase1,
    altText: 'bubble-vase-1',
    title: 'View 1: Bubble Vase',
    tags: [
      'ceramics',
      'hand-built',
      'glazed and fired',
      'experiments with glazes',
    ],
  },
  {
    id: 53,
    src: BubbleVase2,
    altText: 'bubble-vase-2',
    title: 'View 2: Bubble Vase',
    tags: [
      'ceramics',
      'hand-built',
      'glazed and fired',

      'experiments with glazes',
    ],
  },
  {
    id: 54,
    src: QuizzicalFigure,
    altText: 'quizzical-figure',
    title: 'Greenware: Quizzical Figure',
    tags: ['ceramics', 'hand-built', 'greenware', 'figurine'],
  },
  {
    id: 55,
    src: UndulatingPlanter,
    altText: 'undulating-planter',
    title: 'Undulating Planter',
    tags: ['ceramics', 'hand-built', 'glazed and fired'],
  },
  {
    id: 56,
    src: WormVase,
    altText: 'worm-vase',
    title: 'Worm Vase',
    tags: [
      'ceramics',
      'hand-built',
      'glazed and fired',
      'experiments with glazes',
    ],
  },
  {
    id: 57,
    src: Mask1,
    altText: 'mask-1',
    title: 'View 1: Mask',
    tags: [
      'ceramics',
      'hand-built',
      'glazed and fired',
      'experiments with glazes',
    ],
  },
  {
    id: 58,
    src: Mask2,
    altText: 'mask-2',
    title: 'View 2: Mask',
    tags: [
      'ceramics',
      'hand-built',
      'glazed and fired',
      'experiments with glazes',
    ],
  },
  {
    id: 59,
    src: Agape,
    altText: 'agape',
    title: 'Greenware: Agape Figure',
    tags: [
      'ceramics',
      'hand-built',
      'greenware',
      'figurine',
      'experiments with glazes',
    ],
  },
  {
    id: 60,
    src: LittleMan,
    altText: 'little-man',
    title: 'Greenware: Happy Little Dude',
    tags: ['ceramics', 'hand-built', 'greenware', 'figurine'],
  },
  {
    id: 61,
    src: LittleManGlazed,
    altText: 'little-man-glazed',
    title: 'Glazed: Happy Little Dude',
    tags: [
      'ceramics',
      'hand-built',
      'glazed and fired',
      'figurine',
      'experiments with glazes',
    ],
  },
  {
    id: 62,
    src: LoopyManProcess,
    altText: 'loopy-man-process',
    title: 'Greenware: Loopy Dude',
    tags: [
      'ceramics',
      'hand-built',
      'greenware',
      'figurine',
      'experiments with texture',
    ],
  },
  {
    id: 63,
    src: LoopyManGlazed3,
    altText: 'loopy-man-glazed-3',
    title: 'Glazed: Loopy Dude',
    tags: [
      'ceramics',
      'hand-built',
      'glazed and fired',
      'figurine',
      'experiments with glazes',
    ],
  },
];

export const projectDetails = [{}];
