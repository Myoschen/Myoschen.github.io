import { getYear } from 'date-fns'

export const meta = {
  title: 'ryan\'s blog',
  description: 'this is a blog built with Next.js and Velite.',
  author: 'myoschen',
}

export const intro = {
  title: 'welcome to my blog!',
  description: 'hi, i\'m ryan or you can call me myos, a front-end developer.',
}

export const projects = [
  {
    name: 'portfolio',
    description: 'my portfolio.',
    url: 'https://github.com/Myoschen/portfolio',
  },
  {
    name: 'next-blog',
    description: 'a minimal blog is built with next, velite.',
    url: 'https://github.com/Myoschen/next-blog',
  },
  {
    name: 'create-app',
    description: 'a cli tool to scaffold project.',
    url: 'https://github.com/Myoschen/create-app',
    disabled: true,
  },
]

export const copyright = {
  year: getYear(new Date()),
  owner: 'myoschen',
}

export const social = {
  github: 'https://github.com/Myoschen',
}
