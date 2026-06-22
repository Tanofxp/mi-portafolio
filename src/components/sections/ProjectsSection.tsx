'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

// GitHub Icon Component
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="gradient-bg-2" withDivider>
      <Container size="xl">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of projects showcasing my technical skills and problem-solving abilities"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Featured Project */}
          {featuredProject && (
            <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
              <Card hover glow className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Project Image/Visual */}
                  <div className="relative aspect-video lg:aspect-square rounded-xl bg-linear-to-br from-accent/20 via-accent/10 to-transparent border border-border overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl lg:text-7xl font-bold text-accent/30 group-hover:scale-110 transition-transform duration-300">
                        {featuredProject.title.split(' ').map(w => w[0]).join('')}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="accent" className="text-xs">Featured</Badge>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {featuredProject.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-base lg:text-lg">
                        {featuredProject.longDescription || featuredProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {featuredProject.repositories?.frontend && (
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(featuredProject.repositories!.frontend, '_blank')}
                        >
                          <GithubIcon className="w-4 h-4 mr-2" />
                          Frontend
                        </Button>
                      )}
                      {featuredProject.repositories?.backend && (
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(featuredProject.repositories!.backend, '_blank')}
                        >
                          <GithubIcon className="w-4 h-4 mr-2" />
                          Backend
                        </Button>
                      )}
                      {featuredProject.liveUrl && (
                        <Button
                          size="sm"
                          onClick={() => window.open(featuredProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card hover className="h-full flex flex-col">
                  {/* Project Visual */}
                  <div className="relative aspect-video rounded-lg bg-linear-to-br from-muted/20 to-transparent border border-border overflow-hidden mb-6 group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(161,161,161,0.1),transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-muted/30 group-hover:scale-110 transition-transform duration-300">
                        {project.title.split(' ').map(w => w[0]).join('')}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted flex-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="default" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 pt-2">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex-1"
                        >
                          <GithubIcon className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="flex-1"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

