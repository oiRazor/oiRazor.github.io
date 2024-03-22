const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://crozario.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Crossley Rozario',
  role: 'iOS Developer',
  description:
    '',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/crozario/',
    github: 'https://github.com/crozario',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Date Ready',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://github.com/crozario/crozario/blob/main/assets/dateready-ios.gif',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'crozario@proton.me',
}

export { header, about, projects, skills, contact }
