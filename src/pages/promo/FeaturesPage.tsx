import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, Calendar, Car, Users, Package, BarChart3, 
  ClipboardList, Settings, Bell, MessageSquare, FileText,
  Clock, CheckCircle, Eye, Wrench, Shield, Zap, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';
import { useState } from 'react';

// Color themes for each role
const roleThemes = {
  administrador: {
    cardBg: 'bg-card',
    cardBorder: 'border-primary/20',
    cardHoverBorder: 'hover:border-primary/50',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    iconHoverBg: 'group-hover:bg-primary',
    accentGradient: 'from-primary/5 to-transparent',
  },
  asesor: {
    cardBg: 'bg-card',
    cardBorder: 'border-blue-500/20',
    cardHoverBorder: 'hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    iconHoverBg: 'group-hover:bg-blue-500',
    accentGradient: 'from-blue-500/5 to-transparent',
  },
  mecanico: {
    cardBg: 'bg-card',
    cardBorder: 'border-amber-500/20',
    cardHoverBorder: 'hover:border-amber-500/50',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
    iconHoverBg: 'group-hover:bg-amber-500',
    accentGradient: 'from-amber-500/5 to-transparent',
  },
  cliente: {
    cardBg: 'bg-card',
    cardBorder: 'border-emerald-500/20',
    cardHoverBorder: 'hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    iconHoverBg: 'group-hover:bg-emerald-500',
    accentGradient: 'from-emerald-500/5 to-transparent',
  },
};

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const FeaturesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<keyof typeof roleThemes>('administrador');

  const currentTheme = roleThemes[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <PromoNavbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.8, 0.5, 0.8]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span 
              className="text-sm font-medium text-primary mb-2 block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              CARACTERÍSTICAS
            </motion.span>
            <motion.h1 
              className="text-4xl font-bold text-foreground sm:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Todo lo que necesitas, <span className="text-gradient">en un solo lugar</span>
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Descubre las herramientas diseñadas para cada rol en tu taller. 
              Desde el dueño hasta el cliente, todos tienen su espacio.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Role-based Features */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as keyof typeof roleThemes)} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 p-1 bg-muted/50 backdrop-blur">
                <TabsTrigger 
                  value="administrador" 
                  className="text-xs sm:text-sm data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-md transition-all duration-300"
                >
                  🏢 Administrador
                </TabsTrigger>
                <TabsTrigger 
                  value="asesor" 
                  className="text-xs sm:text-sm data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all duration-300"
                >
                  💼 Asesor
                </TabsTrigger>
                <TabsTrigger 
                  value="mecanico" 
                  className="text-xs sm:text-sm data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 data-[state=active]:shadow-md transition-all duration-300"
                >
                  🔧 Mecánico
                </TabsTrigger>
                <TabsTrigger 
                  value="cliente" 
                  className="text-xs sm:text-sm data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-600 data-[state=active]:shadow-md transition-all duration-300"
                >
                  👤 Cliente
                </TabsTrigger>
              </TabsList>
            </motion.div>
            
            <AnimatePresence mode="wait">
              {Object.entries(roleFeatures).map(([key, role]) => {
                const theme = roleThemes[key as keyof typeof roleThemes];
                return (
                  <TabsContent key={key} value={key}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Role Header */}
                      <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h2 className="text-2xl font-bold text-foreground mb-2">{role.title}</h2>
                        <p className={`font-medium mb-3 ${theme.iconColor}`}>{role.subtitle}</p>
                        <p className="max-w-2xl mx-auto text-muted-foreground">{role.description}</p>
                      </motion.div>
                      
                      {/* Features Grid */}
                      <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {role.features.map((feature) => (
                          <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className={`group rounded-xl border ${theme.cardBorder} ${theme.cardHoverBorder} ${theme.cardBg} p-6 transition-all duration-300 hover:shadow-xl cursor-pointer bg-gradient-to-br ${theme.accentGradient}`}
                          >
                            <motion.div 
                              className={`h-12 w-12 rounded-xl ${theme.iconBg} ${theme.iconColor} flex items-center justify-center mb-4 transition-all duration-300 ${theme.iconHoverBg} group-hover:text-white`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <feature.icon className="h-6 w-6" />
                            </motion.div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>
      
      {/* Key Modules Section - Only for Admin */}
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
                  ].map((item, index) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                className="rounded-xl border border-border bg-card p-4 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Kanban Mockup */}
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { name: 'Diagnóstico', color: 'bg-yellow-500', count: 2 },
                    { name: 'Aprobación', color: 'bg-blue-500', count: 1 },
                    { name: 'En Progreso', color: 'bg-green-500', count: 3 },
                    { name: 'Calidad', color: 'bg-primary', count: 1 },
                    { name: 'Listo', color: 'bg-emerald-500', count: 2 },
                  ].map((col, colIndex) => (
                    <motion.div 
                      key={col.name} 
                      className="rounded-lg bg-muted/50 p-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: colIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`h-2 w-2 rounded-full ${col.color}`} />
                        <span className="text-[10px] text-muted-foreground">{col.count}</span>
                      </div>
                      <p className="text-[10px] font-medium mb-2 truncate">{col.name}</p>
                      {Array.from({ length: col.count }).map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="rounded bg-card border border-border p-2 mb-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="h-2 w-12 rounded bg-muted mb-1" />
                          <div className="h-2 w-8 rounded bg-muted/50" />
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Calendar Preview - Admin Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div 
                className="order-2 lg:order-1 rounded-xl border border-border bg-card shadow-xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Calendar Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Calendario de Citas</h4>
                    <p className="text-xs text-muted-foreground">Gestiona las citas del taller</p>
                  </div>
                  <Button size="sm" className="h-8">
                    + Nueva Cita
                  </Button>
                </div>
                
                {/* Calendar Navigation */}
                <div className="flex items-center justify-between px-4 py-3 bg-muted/30">
                  <motion.button 
                    className="h-8 w-8 rounded-lg border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </motion.button>
                  <span className="font-semibold text-foreground">Enero 2026</span>
                  <motion.button 
                    className="h-8 w-8 rounded-lg border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
                
                {/* Calendar Grid */}
                <div className="p-2">
                  {/* Day Headers */}
                  <div className="grid grid-cols-7 mb-1">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((d) => (
                      <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2 border-b border-border">
                        {d}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Days Grid - January 2026 starts on Thursday */}
                  <div className="grid grid-cols-7">
                    {/* Previous month empty slots (Thu = 4 empty slots before) */}
                    {[null, null, null, null].map((_, i) => (
                      <div key={`empty-${i}`} className="min-h-[60px] border border-border/50 p-1 bg-muted/20" />
                    ))}
                    
                    {/* Current month days - 31 days */}
                    {Array.from({ length: 31 }).map((_, i) => {
                      const day = i + 1;
                      // Day 29 has appointments based on the reference image
                      const hasAppointments = day === 29;
                      const isWeekend = (i + 4) % 7 === 0 || (i + 4) % 7 === 6;
                      
                      return (
                        <motion.div 
                          key={`day-${day}`} 
                          className={`min-h-[60px] border border-border p-1 cursor-pointer transition-colors ${
                            hasAppointments ? 'bg-primary/5 border-primary/30' : 
                            isWeekend ? 'bg-muted/30' : 'bg-card hover:bg-muted/20'
                          }`}
                          whileHover={{ backgroundColor: 'hsl(175 45% 42% / 0.05)' }}
                        >
                          <div className="flex items-start justify-between">
                            <span className={`text-xs font-medium ${hasAppointments ? 'text-primary' : 'text-foreground'}`}>
                              {day}
                            </span>
                            {isWeekend && (
                              <span className="text-[8px] text-destructive/70">N/D</span>
                            )}
                          </div>
                          
                          {/* Appointments on day 29 */}
                          {hasAppointments && (
                            <div className="mt-1 space-y-0.5">
                              <div className="bg-status-approval text-white rounded px-1 py-0.5 text-[7px]">
                                <div className="flex items-center gap-0.5">
                                  <Clock className="h-2 w-2" />
                                  <span>14:00</span>
                                </div>
                                <p className="truncate">YADHIR ISVAN P.</p>
                              </div>
                              <div className="bg-primary/80 text-white rounded px-1 py-0.5 text-[7px]">
                                <div className="flex items-center gap-0.5">
                                  <Clock className="h-2 w-2" />
                                  <span>16:00</span>
                                </div>
                                <p className="truncate">angel yamir p.</p>
                              </div>
                              <div className="bg-green-500/80 text-white rounded px-1 py-0.5 text-[7px]">
                                <div className="flex items-center gap-0.5">
                                  <Clock className="h-2 w-2" />
                                  <span>17:00</span>
                                </div>
                                <p className="truncate">angel yamir p.</p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
              
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Calendario de Citas Inteligente
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Gestiona las citas de tu taller con un calendario visual profesional. 
                    Tus clientes pueden agendar online y tú apruebas con un clic.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Vista mensual con citas detalladas',
                      'Filtros por estado de la cita',
                      'Flujo de avance con un clic',
                      'Días no disponibles marcados',
                      'Recordatorios automáticos por SMS/WhatsApp',
                      'Sincronización con citas online',
                    ].map((item, index) => (
                      <motion.li 
                        key={item} 
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Zap className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
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
              Prueba autotronia.com gratis por 14 días y descubre cómo puede transformar tu taller.
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
