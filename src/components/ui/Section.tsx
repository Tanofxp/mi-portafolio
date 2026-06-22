import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  withDivider?: boolean;
}

export function Section({ children, className, withDivider = false, ...props }: SectionProps) {
  return (
    <>
      <section
        className={cn('py-24 sm:py-32 lg:py-40 w-full', className)}
        {...props}
      >
        <div className="w-full mx-auto">
          {children}
        </div>
      </section>
      {withDivider && <div className="section-divider" />}
    </>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className,
  centered = true 
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-20 lg:mb-24', centered && 'text-center', className)}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

