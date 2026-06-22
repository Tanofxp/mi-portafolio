'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function ExperienceSection() {
  return (
    <Section id="experience" className="gradient-bg-1" withDivider>
      <Container size="lg">
        <SectionHeader
          title="Experience"
          subtitle="Professional journey and career milestones"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-linear-to-b from-border to-transparent" />
              )}

              <Card hover className="relative mb-8">
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <p className="text-base lg:text-lg text-accent font-medium">
                          {experience.company}
                        </p>
                      </div>
                      {experience.current && (
                        <Badge variant="success" className="shrink-0">
                          Available
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-muted leading-relaxed flex gap-3">
                          <span className="text-accent mt-1.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-surface border border-border rounded-2xl p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-muted mb-6">
              Interested in working together?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium text-lg group"
            >
              Let's connect
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

