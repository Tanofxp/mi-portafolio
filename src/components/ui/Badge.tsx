import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success';
}

export function Badge({
  children,
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  const variants = {
    default: cn(
      'bg-linear-to-br from-surface/90 to-surface/70',
      'text-muted',
      'border border-white/10',
      'backdrop-blur-sm',
      'shadow-sm shadow-black/20',
      'hover:border-white/20 hover:shadow-md'
    ),
    accent: cn(
      'bg-linear-to-br from-accent/20 via-accent/15 to-accent/10',
      'text-accent',
      'border border-accent/30',
      'backdrop-blur-sm',
      'shadow-sm shadow-accent/20',
      'hover:border-accent/40 hover:shadow-md hover:shadow-accent/30'
    ),
    success: cn(
      'bg-linear-to-br from-success/20 via-success/15 to-success/10',
      'text-success',
      'border border-success/30',
      'backdrop-blur-sm',
      'shadow-sm shadow-success/20',
      'hover:border-success/40 hover:shadow-md hover:shadow-success/30'
    ),
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1.5 rounded-full',
        'text-xs font-semibold tracking-wide',
        'transition-all duration-300',
        'hover:scale-105',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

