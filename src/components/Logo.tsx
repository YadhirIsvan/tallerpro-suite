import { useNavigate } from 'react-router-dom';
import logoImage from '@/assets/logo.jpeg';

export function Logo({ variant = 'default', showText = true }: { variant?: 'default' | 'light'; showText?: boolean }) {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/')} className="flex items-center gap-2">
      <img 
        src={logoImage} 
        alt="Autotronia Logo" 
        className="h-10 w-10 object-contain rounded-lg"
      />
      {showText && (
        <span className={`text-xl font-bold ${variant === 'light' ? 'text-white' : 'text-foreground'}`}>
          autotronia<span className="text-primary">.com</span>
        </span>
      )}
    </button>
  );
}
