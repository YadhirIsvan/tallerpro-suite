import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle, Star, Users, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';

const stats = [
  { number: '500+', label: 'Talleres activos', icon: Users },
  { number: '50,000+', label: 'Órdenes procesadas', icon: TrendingUp },
  { number: '98%', label: 'Clientes satisfechos', icon: Star },
  { number: '2hrs', label: 'Ahorro diario promedio', icon: Clock },
];

const features = [
  'Gestión de órdenes de trabajo en tiempo real',
  'Calendario de citas integrado',
  'Seguimiento para tus clientes',
  'Control de inventario automático',
  'Reportes y métricas detalladas',
  'Portal exclusivo para clientes',
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PromoNavbar />
      
      {/* Hero Section */}
      <section className="promo-hero relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-radial from-primary/5 to-transparent" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">
                  Software #1 para Talleres Mecánicos
                </span>
              </motion.div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Transforma tu taller con{' '}
                <span className="text-gradient">autotronia.com</span>
              </h1>
              
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-xl">
                La plataforma completa que digitaliza tu negocio, aumenta tu productividad 
                y mejora la experiencia de tus clientes. Todo en un solo lugar.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button 
                  size="lg" 
                  className="group h-12 px-8 text-base"
                  onClick={() => navigate('/demo')}
                >
                  Comenzar Prueba Gratis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-8 text-base"
                  onClick={() => navigate('/demo')}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Ver Demo en Vivo
                </Button>
              </div>
              
              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-3 pb-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <span className="ml-4 text-xs text-muted-foreground">app.autotronia.com</span>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-sidebar">
                  {/* Simulated Dashboard */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="hidden sm:block w-16 bg-sidebar-background p-3">
                      <div className="h-8 w-8 rounded-lg bg-primary mb-6" />
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`h-8 w-8 rounded-lg ${i === 1 ? 'bg-sidebar-accent' : 'bg-sidebar-muted/30'}`} />
                        ))}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-background p-4">
                      <div className="h-5 w-32 rounded bg-muted mb-4" />
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-16 rounded-lg border border-border bg-card p-2">
                            <div className="h-2 w-8 rounded bg-primary/50 mb-2" />
                            <div className="h-4 w-12 rounded bg-muted" />
                          </div>
                        ))}
                      </div>
                      {/* Kanban Preview */}
                      <div className="grid grid-cols-5 gap-2">
                        {['diagnosis', 'approval', 'progress', 'quality', 'ready'].map((status) => (
                          <div key={status} className="h-32 rounded-lg bg-muted/50 p-2">
                            <div className="h-2 w-full rounded bg-primary/30 mb-2" />
                            {[1, 2].map((card) => (
                              <div key={card} className="h-8 rounded bg-card border border-border mb-1" />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl border border-border bg-card p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Orden completada</p>
                      <p className="text-[10px] text-muted-foreground">Hace 2 min</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-1/4 hidden lg:block"
              >
                <div className="rounded-xl border border-border bg-card p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">+25% productividad</p>
                      <p className="text-[10px] text-muted-foreground">Este mes</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What is autotronia.com Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary mb-2 block">¿QUÉ ES AUTOTRONIA.COM?</span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              El sistema completo para tu taller
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              autotronia.com es una plataforma integral que conecta a dueños de talleres, mecánicos, 
              asesores y clientes en un solo ecosistema digital moderno.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Para Dueños de Taller',
                description: 'Control total de tu negocio con métricas en tiempo real, gestión de personal y reportes detallados.',
                icon: '🏢',
                features: ['Dashboard ejecutivo', 'Reportes financieros', 'Gestión de empleados', 'Control de inventario'],
              },
              {
                title: 'Para tu Equipo',
                description: 'Herramientas diseñadas para que asesores y mecánicos trabajen de forma más eficiente.',
                icon: '👥',
                features: ['Tablero Kanban visual', 'Asignación de tareas', 'Historial de servicios', 'Notas y fotos'],
              },
              {
                title: 'Para tus Clientes',
                description: 'Una experiencia moderna que fideliza a tus clientes y los mantiene informados.',
                icon: '⭐',
                features: ['Portal de cliente', 'Seguimiento en vivo', 'Citas online', 'Historial de vehículos'],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" onClick={() => navigate('/caracteristicas')} className="group">
              Explorar Todas las Funciones
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 cta-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              ¿Listo para transformar tu taller?
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
              Únete a cientos de talleres que ya están usando autotronia.com para crecer su negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/demo')}>
                Iniciar Prueba Gratuita
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/contacto')}>
                Hablar con Ventas
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Sin tarjeta de crédito • 14 días gratis • Cancela cuando quieras
            </p>
          </motion.div>
        </div>
      </section>
      
      <PromoFooter />
    </div>
  );
};

export default HomePage;
