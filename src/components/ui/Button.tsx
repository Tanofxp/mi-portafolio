import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'group relative inline-flex items-center justify-center',
    'rounded-xl font-semibold tracking-wide',
    'transition-all duration-300 ease-out',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    'focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background',
    'overflow-hidden',
    // Hover scale effect
    'hover:scale-[1.02] active:scale-[0.98]'
  );

  const variants = {
    primary: cn(
      // Gradient background with shine effect
      'bg-gradient-to-r from-accent via-accent to-accent-hover',
      'text-white font-bold',
      // Enhanced shadows
      'shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
      // Border with glow
      'border-2 border-accent/50 hover:border-accent',
      // Shine animation overlay
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
      'before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700',
      // Subtle inner shadow
      'shadow-inner'
    ),
    secondary: cn(
      // Glass morphism effect
      'bg-linear-to-br from-surface/90 to-surface/70 backdrop-blur-xl',
      'text-foreground',
      // Border with subtle glow
      'border-2 border-white/10 hover:border-accent/40',
      // Shadows
      'shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)]',
      // Hover background shift
      'hover:bg-linear-to-br hover:from-surface hover:to-surface/80',
      // Inner glow on hover
      'hover:shadow-inner'
    ),
    ghost: cn(
      'text-muted hover:text-foreground',
      'border-2 border-transparent hover:border-white/10',
      'hover:bg-linear-to-br hover:from-surface/50 hover:to-surface/30',
      'hover:backdrop-blur-sm',
      'hover:shadow-lg hover:shadow-black/10'
    ),
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm gap-2',
    md: 'px-8 py-4 text-base gap-2.5',
    lg: 'px-10 py-5 text-lg gap-3',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

