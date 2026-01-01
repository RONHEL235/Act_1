export const heroData = {
  name: 'Ronee Helepi',
  role: 'Software Engineering student passionate about building modern web applications.',
}

export const aboutData = {
  description:
    'Student [Forever], Writer, Philosopher and Software Developer.',
}

export type Project = {
  title: string
  description: string
}

export const projectsData: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and TypeScript.',
  },
  {
    title: 'Student Management System',
    description: 'A small system built to manage student records.',
  },
  {
    title: 'Student Management System',
    description: 'A small system built to manage student records.',
  },
  {
    title: 'Student Management System',
    description: 'A small system built to manage student records.',
  },
  {
    title: 'Student Management System',
    description: 'A small system built to manage student records.',
  }
]

export type Skill = {
  name: string
  level?: string 
}

export const skillsData: Skill[] = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Git' },
  { name: 'SQL' },
]

export type BlogPost = {
  title: string
  excerpt: string
  link?: string
}

export const blogData: BlogPost[] = [
  {
    title: 'Learning React with TypeScript',
    excerpt: 'A guide I wrote while building my portfolio using React and TypeScript.',
    link: '#',
  },
  {
    title: 'Deploying a Portfolio on Vercel',
    excerpt: 'Step-by-step tutorial on how to deploy a React project online.',
    link: '#',
  },
  {
    title: 'Why Type Safety Matters',
    excerpt: 'Thoughts on using TypeScript to avoid runtime errors in web projects.',
    link: '#',
  },
]

export const contactData = {
  email: 'roneehelepi70@gmail.com',
}
