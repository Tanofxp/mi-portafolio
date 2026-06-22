import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'TailwindCSS', icon: 'tailwind' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'REST APIs', icon: 'api' },
      { name: 'JWT Authentication', icon: 'lock' },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'React Native', icon: 'smartphone' },
      { name: 'Expo', icon: 'expo' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'code' },
      { name: 'Responsive Design', icon: 'layout' },
      { name: 'API Integration', icon: 'plug' },
    ],
  },
];

