import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/Logo';

const footerLinks = {
  producto: [
    { label: 'Características', href: '/caracteristicas' },
    { label: 'Beneficios', href: '/beneficios' },
    { label: 'Demo', href: '/demo' },
  ],
  empresa: [
    { label: 'Contacto', href: '/contacto' },
  ],
  // legal: [
  //   { label: 'Privacidad', href: '/privacidad' },
  //   { label: 'Términos', href: '/terminos' },
  // ],
};

export function PromoFooter() {
  const navigate = useNavigate();
  
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              La plataforma líder para la gestión de talleres mecánicos. 
              Digitaliza tu negocio y aumenta tu productividad.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 autotronia.com. Todos los derechos reservados.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Un producto de <span className="font-semibold text-foreground">PallaresCorp</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
