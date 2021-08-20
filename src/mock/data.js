import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Honyak', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nicholas Honyak',
  subtitle: "I'm a Full-stack Developer",
  cta: "Here's me",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A detail-oriented communicator with robust technical and programming skills. Seven years of professional experience across finance, real estate, and nonprofit sectors. I am a flexible problem solver who lives for technology and is looking for a job in software development.',
  paragraphTwo: true,
  paragraphThree: true,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    info: ' ',
    title: 'Visit my Github to see my latest projects',
  },
  /* ,
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: "Let 's work together",
  btn: 'Send me an email',
  email: 'nicholas@honyak.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/honyak',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/honyak',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
