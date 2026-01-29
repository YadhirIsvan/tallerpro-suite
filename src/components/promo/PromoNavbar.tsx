import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/caracteristicas', label: 'Características' },
  { href: '/beneficios', label: 'Beneficios' },
  { href: '/demo', label: 'Demo' },
  { href: '/contacto', label: 'Contacto' },
];

export function PromoNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <Logo />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive(link.href)
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        
        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
            Iniciar Sesión
          </Button>
          <Button size="sm" onClick={() => navigate('/demo')}>
            Prueba Gratis
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
        
        {/* Company Badge */}
        <span className="hidden lg:block text-xs text-muted-foreground">
          by <span className="font-medium">PallaresCorp</span>
        </span>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background md:hidden overflow-hidden"
          >
            <div className="container mx-auto p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { navigate(link.href); setIsMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => { navigate('/login'); setIsMenuOpen(false); }}
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  className="w-full" 
                  onClick={() => { navigate('/demo'); setIsMenuOpen(false); }}
                >
                  Prueba Gratis
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
