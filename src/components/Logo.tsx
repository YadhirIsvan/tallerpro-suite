import { useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';

export function Logo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const navigate = useNavigate();
  const textColor = variant === 'light' ? 'text-white' : 'text-foreground';
  
  return (
    <button onClick={() => navigate('/')} className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <Car className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className={`text-xl font-bold ${textColor}`}>
        autotronia<span className="text-primary">.com</span>
      </span>
    </button>
  );
}
