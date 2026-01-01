export const heroData = {
  name: 'Ronee',
  role: 'Software Engineering student passionate about building modern web applications.',
}

export const aboutData = {
  description:
    'I am a BSc IT Software Engineering student who enjoys learning new technologies and building practical projects.',
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
]

export const contactData = {
  email: 'ronnee@example.com',
}

export type Skill = {
  name: string
  level?: string // optional, e.g., "Intermediate" or "Advanced"
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
