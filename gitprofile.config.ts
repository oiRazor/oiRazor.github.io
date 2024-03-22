// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'crozario', 
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'updated', 
        limit: 6,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['crozario/SolarSystemDemo', 'crozario/dogDemo', 'crozario/Rewinder', 'crozario/Impressionist'], 
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Date Ready',
          description:
            'an app to help improve dating profiles. It is currently able to review profile images. We process images using gpt4 vision api. Future updates will include enhancing images, editing images, help users chat with their matches.',
          imageUrl:
            'assets/dateready-ios.gif',
          link: 'https://github.com/crozario',
        },
        {
          title: 'Articulate',
          description:
            'an app for learning new words.',
          imageUrl:
            'assets/articulate-ios.gif',
          link: 'https://github.com/crozario',
        },
        {
          title: 'Tic Tac Toe',
          description:
            'A two player 3x3 grid board game with player vs. player and player vs. AI.',
          imageUrl:
            'assets/tic-tac-toe-ios.gif',
          link: 'https://apps.apple.com/us/app/tic-tac-toe-unbeatable-ai/id6474344689',
        },
        {
          title: 'Solar System Demo',
          description:
            'displays objects from the solar system. Used Spline for displaying interactive 3D objects.',
          imageUrl:
            'assets/solarsystem-ios.gif',
          link: 'https://github.com/crozario/SolarSystemDemo',
        },
        {
          title: 'Dog Demo',
          description:
            'shows random dog images using a public api.',
          imageUrl:
            'assets/dogdemo-ios.gif',
          link: 'https://github.com/crozario/dogdemo',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Crossley Rozario',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'crozario',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'crozario.github.io',
    phone: '',
    email: 'crozario@proton.me',
  },
  resume: {
    fileUrl:
      'assets/resume.pdf',
  },
  skills: [
    'Swift',
    'SwiftUI',
    'iOS Development',
    'MVVM',
    'SQL',
    'Figma',
    'SQL',
    'Git',
    'Communication',
    'Adaptability',
    'Teamwork',
    'Attention to detail',
    'Flexible',
    'Self-motivated',
  ],
  experiences: [
    {
      company: 'Foundasion',
      position: 'iOS Developer',
      from: 'Dec 2021',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Croll Reynolds',
      position: 'Software Engineer Intern',
      from: 'June 2018',
      to: 'Dec 2021',
      companyLink: 'https://croll.com/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'New Jersey Institute of Technology',
      degree: 'Bachelor of Arts in Computer Science',
      from: '2015',
      to: '2020',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],

  blog: {
    source: 'dev',
    username: '', 
    limit: 2, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Please contact me if you have an iOS Developer position. Thank you.`,

  enablePWA: true,
};

export default CONFIG;
