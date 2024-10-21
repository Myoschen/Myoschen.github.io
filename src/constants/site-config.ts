import { getYear } from 'date-fns'

export const meta = {
  title: 'Ryan\'s Blog',
  description: 'This is a blog built with Next.js and Velite.',
  author: 'Myoschen',
}

export const intro = {
  title: 'Welcome to my blog!',
  description: 'Hi, I\'m Ryan or you can call me Myos, A Front-End Developer.',
}

type Project = {
  name: string
  description: string
  url: string
  disabled?: boolean
}

export const projects: Project[] = [
  {
    name: 'portfolio',
    description: 'My portfolio.',
    url: 'https://github.com/Myoschen/portfolio',
  },
  {
    name: 'next-blog',
    description: 'A minimal blog is built with Next.js, Velite.',
    url: 'https://github.com/Myoschen/next-blog',
  },
  {
    name: 'create-app',
    description: 'A cli tool to scaffold project.',
    url: 'https://github.com/Myoschen/create-app',
  },
]

export const copyright = {
  year: getYear(new Date()),
  owner: 'Myoschen',
}

export const social = {
  github: 'https://github.com/Myoschen',
}
