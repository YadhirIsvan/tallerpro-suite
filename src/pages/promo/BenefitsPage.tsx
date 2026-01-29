import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, TrendingUp, Clock, Users, Star, Shield, 
  Zap, BarChart3, Heart, CheckCircle, DollarSign, Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';

const ownerBenefits = [
  {
    icon: TrendingUp,
    title: 'Aumenta tus Ingresos',
    description: 'Talleres usando TallerPro reportan hasta 35% más órdenes completadas por mes gracias a la eficiencia operativa.',
    stat: '+35%',
    statLabel: 'más órdenes/mes',
  },
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Automatiza tareas administrativas: citas, recordatorios, inventario y reportes. Recupera hasta 2 horas diarias.',
    stat: '2hrs',
    statLabel: 'ahorro diario',
  },
  {
    icon: BarChart3,
    title: 'Decisiones Inteligentes',
    description: 'Dashboard con métricas en tiempo real. Sabe qué servicios son más rentables, quiénes son tus mejores clientes.',
    stat: '100%',
    statLabel: 'visibilidad',
  },
  {
    icon: Users,
    title: 'Equipo Organizado',
    description: 'Cada mecánico sabe qué hacer, el asesor tiene toda la información y tú supervisas sin microgestionar.',
    stat: '50%',
    statLabel: 'menos errores',
  },
  {
    icon: DollarSign,
    title: 'Control Financiero',
    description: 'Seguimiento de pagos, cotizaciones y facturación. Nunca pierdas dinero por órdenes olvidadas.',
    stat: '0',
    statLabel: 'fugas de dinero',
  },
  {
    icon: Shield,
    title: 'Profesionalismo',
    description: 'Impresiona a tus clientes con un sistema moderno. Comprobantes digitales, portal de cliente, seguimiento.',
    stat: '⭐',
    statLabel: 'imagen premium',
  },
];

const clientBenefits = [
  {
    icon: Smartphone,
    title: 'Citas desde el Celular',
    description: 'Agendan cita en 30 segundos desde su teléfono. Eligen fecha, hora y servicio sin llamar.',
  },
  {
    icon: Zap,
    title: 'Seguimiento en Tiempo Real',
    description: 'Ven exactamente en qué etapa está su vehículo. Sin necesidad de llamar para preguntar.',
  },
  {
    icon: Heart,
    title: 'Historial Completo',
    description: 'Acceden a todos los servicios realizados a su auto. Útil para mantenimiento preventivo.',
  },
  {
    icon: Star,
    title: 'Experiencia Premium',
    description: 'Se sienten atendidos con un sistema moderno. Notificaciones cuando su auto está listo.',
  },
];

const BenefitsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PromoNavbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-medium text-primary mb-2 block">BENEFICIOS</span>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
              Gana más, trabaja menos, <span className="text-gradient">crece tu negocio</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              TallerPro no es solo software, es una inversión que se paga sola. 
              Descubre cómo beneficia a tu taller y a tus clientes.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Owner Benefits */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-sm font-medium text-primary mb-2 block">PARA DUEÑOS DE TALLER</span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Beneficios que impactan tu bolsillo
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Cada función de TallerPro está diseñada para ahorrarte dinero, tiempo o ambos.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ownerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-300 group-hover:bg-primary/10" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{benefit.stat}</p>
                      <p className="text-xs text-muted-foreground">{benefit.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Divider */}
      <div className="border-t border-border" />
      
      {/* Client Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary mb-2 block">PARA TUS CLIENTES</span>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Clientes felices = Clientes que regresan
              </h2>
              <p className="text-muted-foreground mb-8">
                Cuando tus clientes tienen una buena experiencia, te recomiendan y vuelven. 
                TallerPro les da herramientas que los hacen sentir especiales.
              </p>
              
              <div className="space-y-6">
                {clientBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto w-64">
                <div className="rounded-[2.5rem] border-8 border-foreground/10 bg-card p-2 shadow-2xl">
                  <div className="rounded-[2rem] bg-background overflow-hidden">
                    <div className="bg-primary/10 p-4 text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">🚗</span>
                      </div>
                      <p className="text-sm font-medium">Mi Vehículo</p>
                      <p className="text-xs text-muted-foreground">Honda Civic 2022</p>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">Estado actual</p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-green-600">En Progreso</span>
                      </div>
                      
                      {/* Progress Steps */}
                      <div className="space-y-3">
                        {[
                          { name: 'Recepción', done: true },
                          { name: 'Diagnóstico', done: true },
                          { name: 'Reparación', done: false, current: true },
                          { name: 'Calidad', done: false },
                          { name: 'Entrega', done: false },
                        ].map((step, i) => (
                          <div key={step.name} className="flex items-center gap-3">
                            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${
                              step.done ? 'bg-green-500 text-white' : 
                              step.current ? 'bg-primary text-white' : 
                              'bg-muted text-muted-foreground'
                            }`}>
                              {step.done ? <CheckCircle className="h-4 w-4" /> : i + 1}
                            </div>
                            <span className={`text-sm ${step.current ? 'font-medium' : ''}`}>{step.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating notification */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-16 top-1/3 bg-card rounded-xl border border-border p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">¡Tu auto está listo!</p>
                      <p className="text-[10px] text-muted-foreground">Hace 5 min</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonial/Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Resultados que hablan por sí solos
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '+35%', label: 'Aumento en órdenes', sublabel: 'promedio mensual' },
              { number: '2hrs', label: 'Ahorro de tiempo', sublabel: 'cada día' },
              { number: '98%', label: 'Satisfacción', sublabel: 'de clientes' },
              { number: '0', label: 'Órdenes perdidas', sublabel: 'con nuestro sistema' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <p className="text-4xl font-bold text-gradient mb-2">{stat.number}</p>
                <p className="font-medium text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 cta-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Empieza a ver resultados hoy
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
              14 días de prueba gratis. Sin tarjeta de crédito. Cancela cuando quieras.
            </p>
            <Button size="lg" onClick={() => navigate('/demo')} className="group">
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      <PromoFooter />
    </div>
  );
};

export default BenefitsPage;
