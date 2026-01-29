import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, Calendar, Car, Users, Package, BarChart3, 
  ClipboardList, Settings, Bell, MessageSquare, FileText,
  Clock, CheckCircle, Eye, Wrench, Shield, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';

const roleFeatures = {
  administrador: {
    title: 'Administrador',
    subtitle: 'Control total de tu negocio',
    description: 'Como dueño o gerente del taller, tendrás acceso a todas las herramientas para gestionar y hacer crecer tu negocio.',
    features: [
      {
        icon: BarChart3,
        title: 'Dashboard Ejecutivo',
        description: 'Visualiza métricas clave: ventas diarias, órdenes completadas, inventario bajo y productividad del equipo.',
      },
      {
        icon: Users,
        title: 'Gestión de Personal',
        description: 'Administra tu equipo, asigna roles, monitorea rendimiento y controla horarios de trabajo.',
      },
      {
        icon: Package,
        title: 'Control de Inventario',
        description: 'Seguimiento automático de refacciones, alertas de stock bajo y gestión de proveedores.',
      },
      {
        icon: FileText,
        title: 'Reportes Detallados',
        description: 'Genera reportes de ventas, servicios más solicitados, clientes frecuentes y más.',
      },
      {
        icon: Settings,
        title: 'Configuración Completa',
        description: 'Personaliza precios, servicios, horarios de operación y notificaciones del sistema.',
      },
      {
        icon: Shield,
        title: 'Permisos y Seguridad',
        description: 'Define qué puede ver y hacer cada rol en tu equipo. Protege información sensible.',
      },
    ],
  },
  asesor: {
    title: 'Asesor de Servicio',
    subtitle: 'Atención al cliente eficiente',
    description: 'Los asesores son el puente entre el cliente y el taller. Herramientas diseñadas para brindar un servicio excepcional.',
    features: [
      {
        icon: Calendar,
        title: 'Agenda de Citas',
        description: 'Gestiona citas presenciales y online con un calendario visual e intuitivo.',
      },
      {
        icon: ClipboardList,
        title: 'Creación de Órdenes',
        description: 'Crea órdenes de trabajo en segundos con toda la información del vehículo y servicio.',
      },
      {
        icon: MessageSquare,
        title: 'Comunicación con Cliente',
        description: 'Envía actualizaciones por WhatsApp o SMS sobre el estado de su vehículo.',
      },
      {
        icon: Car,
        title: 'Historial de Vehículos',
        description: 'Accede al historial completo de servicios de cada vehículo para mejor diagnóstico.',
      },
      {
        icon: FileText,
        title: 'Cotizaciones',
        description: 'Genera cotizaciones profesionales y envíalas directamente al cliente.',
      },
      {
        icon: Bell,
        title: 'Notificaciones',
        description: 'Recibe alertas cuando hay nuevas citas, órdenes listas o clientes esperando.',
      },
    ],
  },
  mecanico: {
    title: 'Mecánico',
    subtitle: 'Enfócate en lo que haces mejor',
    description: 'Interfaz simplificada para que los mecánicos se concentren en el trabajo técnico sin complicaciones.',
    features: [
      {
        icon: ClipboardList,
        title: 'Tablero de Trabajo',
        description: 'Ve las órdenes asignadas en un tablero Kanban visual. Arrastra para cambiar el estado.',
      },
      {
        icon: Wrench,
        title: 'Detalles del Servicio',
        description: 'Accede a la información del vehículo, historial y notas del asesor.',
      },
      {
        icon: Clock,
        title: 'Registro de Tiempo',
        description: 'Registra el tiempo trabajado en cada orden para análisis de productividad.',
      },
      {
        icon: Package,
        title: 'Solicitud de Refacciones',
        description: 'Solicita las piezas que necesitas directamente desde la orden de trabajo.',
      },
      {
        icon: MessageSquare,
        title: 'Notas y Observaciones',
        description: 'Agrega notas técnicas, fotos del diagnóstico y recomendaciones.',
      },
      {
        icon: CheckCircle,
        title: 'Marcar Completado',
        description: 'Indica cuando el trabajo está listo para el control de calidad.',
      },
    ],
  },
  cliente: {
    title: 'Cliente',
    subtitle: 'Experiencia moderna y transparente',
    description: 'Tus clientes tendrán acceso a un portal exclusivo donde pueden gestionar sus vehículos y citas.',
    features: [
      {
        icon: Car,
        title: 'Mis Vehículos',
        description: 'Registro de todos sus vehículos con historial completo de servicios realizados.',
      },
      {
        icon: Calendar,
        title: 'Agendar Citas Online',
        description: 'Seleccionan fecha, hora y servicio sin necesidad de llamar al taller.',
      },
      {
        icon: Eye,
        title: 'Seguimiento en Vivo',
        description: 'Ven en tiempo real en qué etapa se encuentra su vehículo (diagnóstico, reparación, listo).',
      },
      {
        icon: Bell,
        title: 'Notificaciones',
        description: 'Reciben alertas cuando su auto está listo o requiere atención adicional.',
      },
      {
        icon: FileText,
        title: 'Historial y Facturas',
        description: 'Acceden a comprobantes de servicio y historial de pagos.',
      },
      {
        icon: MessageSquare,
        title: 'Chat con el Taller',
        description: 'Comunicación directa para dudas o autorizaciones de servicio adicional.',
      },
    ],
  },
};

const FeaturesPage = () => {
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
            <span className="text-sm font-medium text-primary mb-2 block">CARACTERÍSTICAS</span>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
              Todo lo que necesitas, <span className="text-gradient">en un solo lugar</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Descubre las herramientas diseñadas para cada rol en tu taller. 
              Desde el dueño hasta el cliente, todos tienen su espacio.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Role-based Features */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="administrador" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="administrador" className="text-xs sm:text-sm">
                🏢 Administrador
              </TabsTrigger>
              <TabsTrigger value="asesor" className="text-xs sm:text-sm">
                💼 Asesor
              </TabsTrigger>
              <TabsTrigger value="mecanico" className="text-xs sm:text-sm">
                🔧 Mecánico
              </TabsTrigger>
              <TabsTrigger value="cliente" className="text-xs sm:text-sm">
                👤 Cliente
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(roleFeatures).map(([key, role]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Role Header */}
                  <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{role.title}</h2>
                    <p className="text-primary font-medium mb-3">{role.subtitle}</p>
                    <p className="max-w-2xl mx-auto text-muted-foreground">{role.description}</p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {role.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                      >
                        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Key Modules Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary mb-2 block">MÓDULOS PRINCIPALES</span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Las herramientas que hacen la diferencia
            </h2>
          </motion.div>
          
          {/* Kanban Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Tablero Kanban en Tiempo Real
                </h3>
                <p className="text-muted-foreground mb-6">
                  Visualiza el flujo de trabajo de tu taller con columnas personalizables. 
                  Arrastra y suelta las órdenes entre etapas: Diagnóstico, Aprobación, 
                  En Progreso, Control de Calidad y Listo para Entrega.
                </p>
                <ul className="space-y-3">
                  {[
                    'Vista en tiempo real para todo el equipo',
                    'Colores por estado para identificación rápida',
                    'Detalles del vehículo en cada tarjeta',
                    'Historial de cambios de estado',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 shadow-lg">
                {/* Kanban Mockup */}
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { name: 'Diagnóstico', color: 'bg-yellow-500', count: 2 },
                    { name: 'Aprobación', color: 'bg-blue-500', count: 1 },
                    { name: 'En Progreso', color: 'bg-green-500', count: 3 },
                    { name: 'Calidad', color: 'bg-primary', count: 1 },
                    { name: 'Listo', color: 'bg-emerald-500', count: 2 },
                  ].map((col) => (
                    <div key={col.name} className="rounded-lg bg-muted/50 p-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`h-2 w-2 rounded-full ${col.color}`} />
                        <span className="text-[10px] text-muted-foreground">{col.count}</span>
                      </div>
                      <p className="text-[10px] font-medium mb-2 truncate">{col.name}</p>
                      {Array.from({ length: col.count }).map((_, i) => (
                        <div key={i} className="rounded bg-card border border-border p-2 mb-1">
                          <div className="h-2 w-12 rounded bg-muted mb-1" />
                          <div className="h-2 w-8 rounded bg-muted/50" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Calendar Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 rounded-xl border border-border bg-card p-4 shadow-lg">
                {/* Calendar Mockup */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Enero 2025</span>
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded bg-muted" />
                    <div className="h-6 w-6 rounded bg-muted" />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-2">
                  {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-10 rounded text-xs flex flex-col items-center justify-center ${
                        i === 15 ? 'bg-primary text-primary-foreground' : 
                        [5, 12, 19, 23].includes(i) ? 'bg-primary/10' : 'hover:bg-muted/50'
                      }`}
                    >
                      <span>{i < 3 ? '' : i - 2}</span>
                      {[5, 12, 19, 23].includes(i) && (
                        <div className="h-1 w-1 rounded-full bg-primary mt-0.5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Calendario de Citas Inteligente
                </h3>
                <p className="text-muted-foreground mb-6">
                  Gestiona las citas de tu taller con un calendario visual. 
                  Tus clientes pueden agendar online y tú apruebas con un clic.
                </p>
                <ul className="space-y-3">
                  {[
                    'Sincronización con citas online',
                    'Vista diaria, semanal y mensual',
                    'Recordatorios automáticos por SMS/WhatsApp',
                    'Bloqueo de horarios no disponibles',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
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
              ¿Te convencimos?
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
              Prueba TallerPro gratis por 14 días y descubre cómo puede transformar tu taller.
            </p>
            <Button size="lg" onClick={() => navigate('/demo')} className="group">
              Ver Demo Interactiva
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      <PromoFooter />
    </div>
  );
};

export default FeaturesPage;
