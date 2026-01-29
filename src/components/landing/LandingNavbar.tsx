import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-funciona', label: 'Cómo Funciona' },
  { href: '#contacto', label: 'Contacto' },
];

export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
            Iniciar Sesión
          </Button>
          <Button size="sm" onClick={() => navigate('/register')}>
            Crear Cuenta
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full" onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>
                Iniciar Sesión
              </Button>
              <Button className="w-full" onClick={() => { navigate('/register'); setIsMenuOpen(false); }}>
                Crear Cuenta
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
