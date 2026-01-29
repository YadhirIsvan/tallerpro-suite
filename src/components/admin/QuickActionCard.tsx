import { Link } from 'react-router-dom';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href: string;
  iconColor?: string;
  iconBgColor?: string;
}

export function QuickActionCard({
  icon: Icon,
  title,
  subtitle,
  href,
  iconColor = 'text-primary',
  iconBgColor = 'bg-primary/10'
}: QuickActionCardProps) {
  return (
    <Link to={href} className="quick-action group">
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl transition-colors", iconBgColor)}>
        <Icon className={cn("h-6 w-6", iconColor)} />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
