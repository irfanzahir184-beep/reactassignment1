import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * ReactionButton Component
 * 
 * A reusable button component for article/comment reactions.
 * Features:
 * - Shows an icon and reaction count
 * - Can be in active/inactive state
 * - Supports different colors for different reaction types
 * - Includes hover and click animations
 * - Only one reaction can be active at a time (handled by parent)
 */

interface ReactionButtonProps {
  /** The Lucide icon component to display */
  icon: LucideIcon;
  /** The label/name of the reaction */
  label: string;
  /** Current count of this reaction */
  count: number;
  /** Whether this reaction is currently active/selected */
  isActive: boolean;
  /** Function to call when the button is clicked */
  onClick: () => void;
  /** Color theme for the reaction (matches design system colors) */
  color: 'like' | 'love' | 'clap';
  /** Optional additional CSS classes */
  className?: string;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({
  icon: Icon,
  label,
  count,
  isActive,
  onClick,
  color,
  className
}) => {
  // Define color classes for each reaction type using our design system
  const colorClasses = {
    like: {
      active: 'bg-like text-white border-like shadow-lg',
      inactive: 'text-like border-like/30 hover:bg-like/10 hover:border-like'
    },
    love: {
      active: 'bg-love text-white border-love shadow-lg',
      inactive: 'text-love border-love/30 hover:bg-love/10 hover:border-love'
    },
    clap: {
      active: 'bg-clap text-white border-clap shadow-lg',
      inactive: 'text-clap border-clap/30 hover:bg-clap/10 hover:border-clap'
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={cn(
        // Base styles
        'flex items-center gap-2 px-4 py-2 transition-all duration-200',
        // Active/inactive styles based on state
        isActive ? colorClasses[color].active : colorClasses[color].inactive,
        // Add bounce animation when clicked
        isActive && 'animate-bounce-reaction',
        // Custom classes
        className
      )}
    >
      {/* Reaction Icon */}
      <Icon 
        className={cn(
          'w-4 h-4 transition-transform duration-200',
          // Scale up slightly when active
          isActive && 'scale-110'
        )} 
      />
      
      {/* Reaction Label and Count */}
      <span className="font-medium">
        {label}
      </span>
      
      {/* Reaction Count */}
      <span 
        className={cn(
          'text-sm px-2 py-1 rounded-full transition-colors duration-200',
          isActive 
            ? 'bg-white/20' 
            : 'bg-muted text-muted-foreground'
        )}
      >
        {count}
      </span>
    </Button>
  );
};

export default ReactionButton;