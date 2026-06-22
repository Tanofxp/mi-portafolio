'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Smartphone,
  Wrench,
  Layout,
  Plug,
  Lock,
  GitBranch,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { skills } from '@/data/skills';

const iconMap: Record<string, React.ReactNode> = {
  react: <Code2 className="w-5 h-5" />,
  typescript: <Code2 className="w-5 h-5" />,
  javascript: <Code2 className="w-5 h-5" />,
  html: <Code2 className="w-5 h-5" />,
  css: <Code2 className="w-5 h-5" />,
  tailwind: <Layout className="w-5 h-5" />,
  nodejs: <Database className="w-5 h-5" />,
  express: <Database className="w-5 h-5" />,
  api: <Plug className="w-5 h-5" />,
  lock: <Lock className="w-5 h-5" />,
  smartphone: <Smartphone className="w-5 h-5" />,
  expo: <Smartphone className="w-5 h-5" />,
  git: <GitBranch className="w-5 h-5" />,
  github: <GitBranch className="w-5 h-5" />,
  postman: <Wrench className="w-5 h-5" />,
  code: <Code2 className="w-5 h-5" />,
  layout: <Layout className="w-5 h-5" />,
  plug: <Plug className="w-5 h-5" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function SkillsSection() {
  return (
    <Section id="skills" withDivider>
      <Container size="lg">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to bring ideas to life"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {skills.map((category) => (
            <motion.div key={category.category} variants={itemVariants}>
              <Card hover className="h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                  <div className="h-1 w-12 bg-accent mx-auto mt-3 rounded-full" />
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-accent/50 hover:bg-surface/50 transition-all group"
                    >
                      <div className="text-accent group-hover:scale-110 transition-transform shrink-0">
                        {skill.icon && iconMap[skill.icon]}
                      </div>
                      <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

