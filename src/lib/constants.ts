import type { Youtube } from 'lucide-react'
import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/kabirsinghcodes',
  linkedin: 'https://www.linkedin.com/in/kabirsinghcodes/',
  mail: 'mailto:kabirsingh0405@gmail.com',
  instagram: 'https://www.instagram.com/kabirosky/',
  youtube: 'https://www.youtube.com/@Kabirosky',
  discord: 'https://discordapp.com/users/163300027618295808',
  cal:'https://topmate.io/kabirsingh/',
}

// Global
export const SITE: Site = {
  TITLE: 'Kabir Singh',
  DESCRIPTION:
    'Welcome to this Page, a portfolio and blog by Kabir Singh.',
  AUTHOR: 'Kabir Singh',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// // Blog Page
// export const BLOG: Page = {
//   TITLE: 'Blog',
//   DESCRIPTION: 'Writing on topics I am passionate about.',
// }

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'B.E. Computer Science',
    institution: 'B.E. Computer Science',
    link: 'https://www.sathyabama.ac.in/',
    date: '2019 - 2023',
  },
  {
    title: 'Master in Advanced Computer Science',
    institution: 'Msc Advanced Computer Science',
    link: 'https://www.leedsbeckett.ac.uk/',
    date: '2023 - 2024',
  },
  // {
  //   title: '...',
  //   institution: 'Udemy',
  //   link: 'https://www.udemy.com/',
  //   date: '2018 - 2022',
  // },
  // {
  //   title: '...',
  //   institution: 'Youtube',
  //   link: 'https://www.youtube.com/@midulive',
  //   date: '2018 - 2022',
  // },
  // {
  //   title: 'Tattoo Artist',
  //   institution: 'Tattoo Academy',
  //   link: 'https://www.instagram.com/tattoodcacademy/',
  //   date: '2024 - 2025',
  // },
]

export const EXPERIENCE = [
  {
    company: 'Leeds Beckett University',
    location: 'Leeds, United Kingdom',
    position: 'Global Ambassador',
    start: '2023',
    link: 'https://www.linkedin.com/in/kabirsinghcodes/',
    end: 'Current',
    tasks: [
      'Facilitated Seamless Integration. ',
      'Liaison Between Students and University',
    ],
  },
  {
    company: 'Upgrad',
    location: 'Abu Dhabi, UAE',
    position: 'Corporate Trainer',
    link: 'https://www.linkedin.com/in/kabirsinghcodes/',
    start: '2023',
    end: '2023',
    tasks: [
      'Delivered comprehensive Full-Stack Development training to Central Bank of UAE employees over a month.',
      'Conducted an intensive month-long Full-Stack Development training. ',
      'Improved Full-Stack Development skills of Central Bank of UAE employees',
    ],
  },
  {
    company: 'Upgrad',
    link: 'https://www.linkedin.com/in/kabirsinghcodes/',
    location: 'India',
    position: 'Full Stack Development Trainer',
    start: '2023',
    end: '2024',
    tasks: [
      'Mentorship in Full-Stack Development. ',
      ' Diverse Training Initiatives',
    ],
  },
  {
    company: 'Coding Ninjas',
    location: 'Chennai, India',
    position: 'Mentor',
    start: '2022',
    link: 'https://www.linkedin.com/in/kabirsinghcodes/',
    end: '2023',
    tasks: [
      'Content Creation for Learning. ',
      'Course Development. ',
      'Collaborative Material Development',
    ],
  },
  {
    company: 'Earnst And Young',
    location: 'Gurugram, India',
    position: 'Data Analyst Intern',
    start: '2022',
    link: 'https://www.linkedin.com/in/kabirsinghcodes/',
    end: '2022',
    tasks: [
      'Served as a data analyst, responsible for managing and analyzing complex data sets using Alteryx. ',
      'Collaborated with clients, including OYO and Agilent Technologies, to provide data-driven insights and solutions. ',
      ' Demonstrated proficiency in data manipulation, analysis, and visualization techniques to support the organizations objectives. ',
    ],
  },
  {
    company: 'Unacademy',
    location: 'Pune, India',
    position: 'Plus Educator',
    start: '2021',
    link: 'https://www.linkedin.com/in/kabirsinghcodes/',
    end: '2021',
    tasks: [
      'Served as an educator at Unacademy, responsible for teaching a diverse range of subjects, including C++, Java, Data Structures and Algorithms, Flutter, Dart, HTML, CSS, and Python. ',
      'Conducted live classes on the Unacademy YouTube channel "Code Beyond," reaching and educating over 14,000 students from around the world. ',
      ' Demonstrated expertise in various programming languages and frameworks, effectively communicating complex concepts and empowering students to expand their knowledge and skills.',
    
    ],
  },
]
