'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { personalInfo } from '@/data/personal';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function AboutSection() {
  return (
    <Section id="about" className="gradient-bg-2" withDivider>
      <Container size="lg">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer focused on creating impactful digital experiences"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto"
        >
          {/* Left: Visual Element */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-linear-to-br from-accent/20 via-accent/10 to-transparent border border-border overflow-hidden relative group hover:border-accent/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="text-7xl lg:text-8xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted uppercase tracking-wider">Based in</div>
                    <div className="text-xl text-foreground font-semibold">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="space-y-6 order-1 lg:order-2">
            {personalInfo.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-muted leading-relaxed text-base lg:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 md:gap-8 pt-8"
            >
              <div className="bg-linear-to-br from-surface/90 to-surface/70 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-8 md:p-10 hover:border-accent/40 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-accent/20 text-center flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                  4+
                </div>
                <div className="text-sm md:text-base text-muted font-medium">Projects Completed</div>
              </div>
              <div className="bg-linear-to-br from-surface/90 to-surface/70 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-8 md:p-10 hover:border-accent/40 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-accent/20 text-center flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                  10+
                </div>
                <div className="text-sm md:text-base text-muted font-medium">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

