import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'emergency-alert',
    title: 'Emergency Alert Platform',
    description: 'Comprehensive alert management platform with real-time geolocation, user authentication, and REST API integration.',
    longDescription: 'A full-stack emergency alert system featuring real-time geolocation tracking, secure user authentication, and a robust REST API. The platform enables efficient alert management with a modern React frontend and scalable Node.js backend architecture.',
    technologies: ['React', 'Node.js', 'Express', 'REST API', 'Geolocation', 'JWT Authentication'],
    featured: true,
    repositories: {
      frontend: 'https://github.com/Tanofxp/boton-mapa',
      backend: 'https://github.com/Tanofxp/btn-mobile',
    },
  },
  {
    id: 'foto-map',
    title: 'Foto Map',
    description: 'Mobile application for capturing geolocated photographs with integrated address management system.',
    longDescription: 'React Native mobile app that combines photography with geolocation services, allowing users to capture images with precise location data and manage address information seamlessly.',
    technologies: ['React Native', 'JavaScript', 'Geolocation', 'Camera API'],
    githubUrl: 'https://github.com/Tanofxp',
  },
  {
    id: 'api-node',
    title: 'API Node',
    description: 'Scalable REST API built with Node.js, Express, and TypeScript following industry best practices.',
    longDescription: 'Production-ready REST API featuring complete CRUD operations, authentication middleware, and clean architecture principles. Built with TypeScript for type safety and maintainability.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'REST API', 'JWT'],
    githubUrl: 'https://github.com/Tanofxp',
  },
  {
    id: 'scn-solutions',
    title: 'SCN Solutions',
    description: 'Corporate website for a technology solutions company with modern design and responsive layout.',
    longDescription: 'Professional corporate website showcasing technology services with a focus on user experience and responsive design across all devices.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    githubUrl: 'https://github.com/Tanofxp',
  },
];

