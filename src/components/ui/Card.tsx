import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className,
  hover = false,
  glow = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles with modern glass morphism effect
        'group relative rounded-2xl bg-linear-to-br from-surface/90 via-surface/80 to-surface/70',
        'backdrop-blur-xl border border-white/10 p-6 transition-all duration-500',
        'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
        // Subtle inner glow
        'before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500',
        // Hover effects
        hover && [
          'hover:border-accent/30 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.25)]',
          'hover:-translate-y-2 hover:scale-[1.02]',
          'hover:before:opacity-100',
          'cursor-pointer'
        ],
        // Enhanced glow effect
        glow && [
          'after:absolute after:inset-0 after:rounded-2xl after:opacity-0',
          'after:bg-linear-to-r after:from-accent/20 after:via-accent/10 after:to-transparent',
          'after:blur-xl after:transition-opacity after:duration-500',
          'hover:after:opacity-100'
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

