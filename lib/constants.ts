import {
  AbstractFlower,
  ArmadilloTails,
  AbstractFlowerProcess,
  Agape,
  BeehiveVase,
  BenchLines,
  Beowolf,
  BleedingBlues,
  BubbleVase1,
  BubbleVase2,
  Clothesline,
  ColoredTiles,
  ColorSplats,
  ColorSplats2,
  ColorSplatsDots,
  Crow,
  CrowProcess,
  CrowsSelfPortrait,
  Curlew,
  Day2Spider,
  Day4PipeWorms,
  Day5CityMoon,
  Flowers,
  FlyingGecko,
  GlazedPlates,
  FlyingGeckoProcess,
  HatGlazeware2,
  HeartSplatters,
  HouseLines,
  Jellyfish,
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
  PhonesRamen,
  QuizzicalFigure,
  RamenGlazeware1,
  RamenGlazeware2,
  SelfPortraitPaint,
  SpaceMan,
  SpaghettiPeople,
  SpillingOver,
  Toothbrush,
  TreesAndMountains,
  UndulatingPlanter,
  WormVase,
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

export const softwareWorkItems = [
  {
    date: 'Feb 2023 - May 2023',
    company: 'UStrive',
    role: 'Full-stack Developer',
    description:
      'Developed and maintained mentor and student portals for an online mentoring platform',
    website: 'https://ustrive.com/',
    tags: [
      'JavaScript',
      'Express',
      'Node.js',
      'React.js',
      'Axios',
      'Twilio',
      'Mixpanel',
      'Docker',
    ],
  },
  {
    date: 'May 2022 - Jan 2023',
    company: 'Mapistry',
    role: 'Full-stack Developer',
    description:
      'Contributed to the front end and back end of the application around dynamic form generation for internal and external use, as well as implemented the maintenance and migration of the existing functionality of the app, to the new site using updated UX/UI designs with the new React, React hooks, React Query, and Typescript tech stack.',
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
    role: 'Front-end Software Engineer',
    description:
      'Worked on the client-facing app on the front-end team and have seen the app through from inception to production.',
    website: 'https://www.mylaurelhealth.com/',
    tags: [
      'JavaScript',
      'Express',
      'Node.js',
      'React.js',
      'Axios',
      'Twilio',
      'Mixpanel',
      'Docker',
    ],
  },
  {
    date: 'Apr 2020 - Jun 2020',
    company: 'Errunds',
    role: 'Full-stack Developer Intern',
    description:
      'Contributed to the client-facing side of the online community marketplace app.',
    website: 'https://tyca.nyc/',
    tags: [
      'JavaScript',
      'Express',
      'Node.js',
      'React.js',
      'Axios',
      'Twilio',
      'Mixpanel',
      'Docker',
    ],
  },
];

export const architectureWorkItems = [
  {
    date: 'Sept 2017 - Dec 2018',
    company: 'Bade Stageberg Cox Architecture',
    role: 'Project Architect / Architectural Designer',
    description: `Supervised multiple construction phases for the relocation of Artists Space, an iconic NYC art gallery – Managed the renovation of a summer kitchen highly tailored to high-profile client’s requirements – Implemented diagrams, detailed sketches, and revised shop drawings – Illustrated concepts as 3D models and renderings – Involved in contractor, client, and consultant correspondence and coordination.`,
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
    description: `Managed multiple phases of single-family NYC residences – Developed and generated detailed drawings and sketches – Revised shop drawings – Generated 3D models, diagrams, and renderings – Involved in contractor, client, and consultant correspondence and coordination.`,
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
– Organized and coordinated interior design work of an award-winning Hamptons residence – Developed design drawings and detailed drawings – Generated 3D models and renderings.`,
    website: 'http://www.audreymatlock.com/',
    tags: ['Vectorworks', 'Illustrator', 'Photoshop', 'Vray', 'Rhinoceros'],
  },
  {
    date: 'Nov 2011 - Apr 2013',
    company: 'Lauren Rubin Architecture',
    role: 'Architectural Designer',
    description: `Assisted in the construction administration phase of multiple single family residences
– Organized and coordinated interior design work for an advertising company and a single-family residence – Generated drawings for furniture placement – Generated 3D concept renderings of each room with – Created all phases of document sets for two single-family residences.`,
    website: 'https://laurenrubinarchitecture.com/',
    tags: ['AutoCad', 'Photoshop', 'Sketchup'],
  },
  {
    date: 'Jul 2009 - Apr 2010',
    company: 'Brillembourg Architects',
    role: 'Junior Architectural Designer',
    description:
      'Assisted in the development of a design proposal for a housing complex/hotel in Venezuela with 3D models, renderings, and 2D drawings – Assisted in all phases of design, development, and construction for a one bedroom Manhattan residential renovation, including the custom design of a dining table and lamp – Revised shop drawings and implemented detailed sketches.',
    website: 'https://www.carlosbrillembourgarchitects.com/',
    tags: ['AutoCad', 'Photoshop', 'Sketchup'],
  },
  {
    date: 'Sep 2007 - April 2009',
    company: 'Garrison Architects',
    role: 'Junior Architectural Designer',
    description:
      'Managed the Grand Army Plaza International Competition submission in Brooklyn, NY – Contributed to concept ideas, 3D models, renderings, and design drawings – Assisted in all phases of design and development for the US Consulate Residence in Samoa – Generated 3D Models, renderings, schematic design, design development, and construction documents',
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

export const artImages = [
  {
    id: 1,
    src: ArmadilloTails,
    altText: 'armadillo-tails',
  },
  {
    id: 2,
    src: BenchLines,
    altText: 'bench-lines',
  },
  {
    id: 3,
    src: Clothesline,
    altText: 'clothesline',
  },
  {
    id: 4,
    src: HouseLines,
    altText: 'house-lines',
  },
  {
    id: 5,
    src: ManWithWeeds,
    altText: 'man-with-weeds',
  },
  {
    id: 6,
    src: SpaceMan,
    altText: 'space-man',
  },
  {
    id: 7,
    src: SpaghettiPeople,
    altText: 'spaghetti-people',
  },
  {
    id: 8,
    src: CrowsSelfPortrait,
    altText: 'crows-self-portrait',
  },
  {
    id: 9,
    src: SpillingOver,
    altText: 'spilling-over',
  },
  {
    id: 10,
    src: Beowolf,
    altText: 'beowolf',
  },
  {
    id: 11,
    src: KingCrownDiamonds,
    altText: 'king-crown-diamonds',
  },
  {
    id: 12,
    src: Flowers,
    altText: 'flowers',
  },
  {
    id: 13,
    src: BleedingBlues,
    altText: 'bleeding-blues',
  },
  {
    id: 14,
    src: HeartSplatters,
    altText: 'heart-splatters',
  },
  {
    id: 15,
    src: Day2Spider,
    altText: 'day-2-spider',
  },
  {
    id: 16,
    src: Day4PipeWorms,
    altText: 'day-4-pipe-worms',
  },
  {
    id: 17,
    src: Day5CityMoon,
    altText: 'day-5-city-moon',
  },
  {
    id: 18,
    src: MirrorMirror,
    altText: 'mirror-mirror',
  },
  {
    id: 19,
    src: Toothbrush,
    altText: 'toothbrush',
  },
  {
    id: 20,
    src: TreesAndMountains,
    altText: 'trees-and-mountains',
  },
  {
    id: 21,
    src: Curlew,
    altText: 'curlew',
  },
  {
    id: 22,
    src: LandscapeHand,
    altText: 'landscape-hand',
  },
  {
    id: 23,
    src: PhonesRamen,
    altText: 'phones-ramen',
  },
  {
    id: 24,
    src: CrowProcess,
    altText: 'crow-process',
  },
  {
    id: 25,
    src: Crow,
    altText: 'crow',
  },
  {
    id: 26,
    src: AbstractFlowerProcess,
    altText: 'abstract-flower-process',
  },
  {
    id: 27,
    src: AbstractFlower,
    altText: 'abstract-flower',
  },
  {
    id: 28,
    src: Jellyfish,
    altText: 'jellyfish',
  },
  {
    id: 29,
    src: Jellyfish2,
    altText: 'jellyfish-2',
  },
  {
    id: 30,
    src: FlyingGeckoProcess,
    altText: 'flying-gecko-process',
  },
  {
    id: 31,
    src: FlyingGecko,
    altText: 'flying-gecko',
  },
  {
    id: 32,
    src: SelfPortraitPaint,
    altText: 'self-portrait-paint',
  },
  {
    id: 33,
    src: ManLinesPaint,
    altText: 'man-lines-paint',
  },
  {
    id: 34,
    src: ColoredTiles,
    altText: 'colored-tiles',
  },
  {
    id: 35,
    src: ColorSplatsDots,
    altText: 'color-splats-dots',
  },
  {
    id: 36,
    src: ColorSplats,
    altText: 'color-splats',
  },
  {
    id: 37,
    src: ColorSplats2,
    altText: 'color-splats-2',
  },
  {
    id: 38,
    src: GlazedPlates,
    altText: 'glazed-plates',
  },
  {
    id: 39,
    src: HatGlazeware2,
    altText: 'hat-glazeware-2',
  },
  {
    id: 40,
    src: BeehiveVase,
    altText: 'beehive-vase',
  },
  {
    id: 41,
    src: RamenGlazeware1,
    altText: 'ramen-glazeware-1',
  },
  {
    id: 42,
    src: RamenGlazeware2,
    altText: 'ramen-glazeware-2',
  },
  {
    id: 43,
    src: BubbleVase1,
    altText: 'bubble-vase-1',
  },
  {
    id: 44,
    src: BubbleVase2,
    altText: 'bubble-vase-2',
  },
  {
    id: 45,
    src: QuizzicalFigure,
    altText: 'quizzical-figure',
  },
  {
    id: 46,
    src: UndulatingPlanter,
    altText: 'undulating-planter',
  },
  {
    id: 47,
    src: WormVase,
    altText: 'worm-vase',
  },
  {
    id: 48,
    src: Mask1,
    altText: 'mask-1',
  },
  {
    id: 49,
    src: Mask2,
    altText: 'mask-2',
  },
  {
    id: 50,
    src: Agape,
    altText: 'agape',
  },
  {
    id: 51,
    src: LittleMan,
    altText: 'little-man',
  },
  {
    id: 52,
    src: LittleManGlazed,
    altText: 'little-man-glazed',
  },
  {
    id: 53,
    src: LoopyManProcess,
    altText: 'loopy-man-process',
  },
  {
    id: 54,
    src: LoopyManGlazed3,
    altText: 'loopy-man-glazed-3',
  },
];
