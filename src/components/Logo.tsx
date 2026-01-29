import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

export function Logo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-foreground';
  
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <Wrench className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className={`text-xl font-bold ${textColor}`}>
        Taller<span className="text-primary">Pro</span>
      </span>
    </Link>
  );
}
