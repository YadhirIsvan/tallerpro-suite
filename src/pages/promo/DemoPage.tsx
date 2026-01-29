import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, ArrowLeft, Play, BarChart3, Calendar, 
  ClipboardList, Car, Users, Package, CheckCircle, Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';

// Demo screens for each role
const demoScreens = {
  administrador: [
    {
      id: 'dashboard',
      title: 'Dashboard Ejecutivo',
      description: 'Vista general de tu negocio con métricas en tiempo real. Ventas del día, órdenes activas, inventario y productividad.',
      icon: BarChart3,
    },
    {
      id: 'personal',
      title: 'Gestión de Personal',
      description: 'Administra tu equipo con tarjetas visuales. Ve quién está disponible, asigna tareas y monitorea rendimiento.',
      icon: Users,
    },
    {
      id: 'inventario',
      title: 'Control de Inventario',
      description: 'Seguimiento automático de refacciones. Alertas cuando el stock está bajo y gestión de proveedores.',
      icon: Package,
    },
  ],
  asesor: [
    {
      id: 'citas',
      title: 'Calendario de Citas',
      description: 'Gestiona todas las citas del taller. Vista mensual, semanal y diaria con código de colores por tipo de servicio.',
      icon: Calendar,
    },
    {
      id: 'ordenes',
      title: 'Crear Orden de Trabajo',
      description: 'Crea órdenes en segundos con datos del cliente, vehículo y servicios. Genera cotizaciones instantáneas.',
      icon: ClipboardList,
    },
  ],
  mecanico: [
    {
      id: 'kanban',
      title: 'Tablero de Trabajo',
      description: 'Ve tus órdenes asignadas en un tablero visual. Mueve las tarjetas entre columnas según el progreso.',
      icon: ClipboardList,
    },
  ],
  cliente: [
    {
      id: 'seguimiento',
      title: 'Seguimiento en Vivo',
      description: 'Ve en tiempo real el estado de tu vehículo. Recibe notificaciones cuando cambia de etapa.',
      icon: Eye,
    },
    {
      id: 'vehiculos',
      title: 'Mis Vehículos',
      description: 'Historial completo de servicios de cada uno de tus autos. Recordatorios de mantenimiento preventivo.',
      icon: Car,
    },
  ],
};

const DemoPage = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('administrador');
  const [activeScreen, setActiveScreen] = useState(0);

  const currentScreens = demoScreens[activeRole as keyof typeof demoScreens];
  const currentScreen = currentScreens[activeScreen];

  const nextScreen = () => {
    if (activeScreen < currentScreens.length - 1) {
      setActiveScreen(activeScreen + 1);
    }
  };

  const prevScreen = () => {
    if (activeScreen > 0) {
      setActiveScreen(activeScreen - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PromoNavbar />
      
      {/* Hero */}
      <section className="pt-24 pb-8 lg:pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-medium text-primary mb-2 block">DEMO INTERACTIVA</span>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
              Explora TallerPro en <span className="text-gradient">acción</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Selecciona un rol y navega por las pantallas principales. 
              Así es como se ve y funciona el sistema para cada tipo de usuario.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {/* Role Selector */}
          <div className="mb-8">
            <Tabs 
              value={activeRole} 
              onValueChange={(v) => { setActiveRole(v); setActiveScreen(0); }}
              className="w-full"
            >
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                <TabsTrigger value="administrador" className="text-xs sm:text-sm">
                  🏢 Admin
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
            </Tabs>
          </div>
          
          {/* Demo Viewer */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-lg px-4 py-1.5 text-sm text-muted-foreground max-w-md mx-auto">
                    app.tallerpro.com/{activeRole}
                  </div>
                </div>
              </div>
              
              {/* Screen Content */}
              <div className="aspect-video bg-sidebar-background relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeRole}-${activeScreen}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex"
                  >
                    {/* Sidebar for admin/asesor/mecanico */}
                    {activeRole !== 'cliente' && (
                      <div className="w-16 md:w-48 bg-sidebar-background border-r border-sidebar-border p-3 flex-shrink-0">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                            TP
                          </div>
                          <span className="hidden md:block text-sm font-medium text-sidebar-foreground">TallerPro</span>
                        </div>
                        <div className="space-y-1">
                          {currentScreens.map((screen, i) => (
                            <button
                              key={screen.id}
                              onClick={() => setActiveScreen(i)}
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                i === activeScreen 
                                  ? 'bg-sidebar-accent text-sidebar-primary' 
                                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                              }`}
                            >
                              <screen.icon className="h-4 w-4" />
                              <span className="hidden md:block truncate">{screen.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Main Content */}
                    <div className="flex-1 bg-background p-4 md:p-6 overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h2 className="text-lg md:text-xl font-bold text-foreground">{currentScreen.title}</h2>
                          <p className="text-sm text-muted-foreground hidden md:block">{currentScreen.description}</p>
                        </div>
                        {activeRole === 'cliente' && (
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <span>👤</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Demo Content Based on Screen */}
                      {currentScreen.id === 'dashboard' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                              { label: 'Ventas Hoy', value: '$12,450', color: 'text-green-500' },
                              { label: 'Órdenes Activas', value: '8', color: 'text-blue-500' },
                              { label: 'Completados', value: '15', color: 'text-primary' },
                              { label: 'Inventario Bajo', value: '3', color: 'text-destructive' },
                            ].map((metric) => (
                              <div key={metric.label} className="rounded-lg border border-border bg-card p-3">
                                <p className="text-xs text-muted-foreground">{metric.label}</p>
                                <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
                              </div>
                            ))}
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="rounded-lg border border-border bg-card p-4 h-32 flex items-center justify-center">
                              <span className="text-muted-foreground text-sm">📊 Gráfica de Ventas</span>
                            </div>
                            <div className="rounded-lg border border-border bg-card p-4 h-32 flex items-center justify-center">
                              <span className="text-muted-foreground text-sm">📈 Productividad del Equipo</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {currentScreen.id === 'kanban' && (
                        <div className="grid grid-cols-5 gap-2 h-48">
                          {[
                            { name: 'Diagnóstico', color: 'bg-yellow-500', items: ['Nissan Sentra', 'Toyota Corolla'] },
                            { name: 'Aprobación', color: 'bg-blue-500', items: ['Honda Civic'] },
                            { name: 'En Progreso', color: 'bg-green-500', items: ['VW Jetta', 'Ford Focus', 'Mazda 3'] },
                            { name: 'Calidad', color: 'bg-primary', items: ['Chevrolet Cruze'] },
                            { name: 'Listo', color: 'bg-emerald-500', items: ['Hyundai Elantra', 'Kia Forte'] },
                          ].map((col) => (
                            <div key={col.name} className="rounded-lg bg-muted/50 p-2 overflow-hidden">
                              <div className="flex items-center gap-1 mb-2">
                                <div className={`h-2 w-2 rounded-full ${col.color}`} />
                                <span className="text-[10px] font-medium truncate">{col.name}</span>
                              </div>
                              <div className="space-y-1">
                                {col.items.map((item) => (
                                  <div key={item} className="rounded bg-card border border-border p-1.5 text-[10px] truncate">
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {currentScreen.id === 'citas' && (
                        <div className="rounded-lg border border-border bg-card p-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-medium">Enero 2025</span>
                          </div>
                          <div className="grid grid-cols-7 gap-1 text-center text-xs">
                            {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((d) => (
                              <span key={d} className="text-muted-foreground py-1">{d}</span>
                            ))}
                            {Array.from({ length: 35 }).map((_, i) => (
                              <div 
                                key={i} 
                                className={`aspect-square rounded flex items-center justify-center text-xs ${
                                  i === 15 ? 'bg-primary text-primary-foreground' :
                                  [5, 12, 19, 23, 26].includes(i) ? 'bg-primary/10 text-primary' : ''
                                }`}
                              >
                                {i < 3 ? '' : i - 2}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {currentScreen.id === 'personal' && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            { name: 'Carlos M.', role: 'Mecánico', status: 'Ocupado' },
                            { name: 'Ana L.', role: 'Asesora', status: 'Disponible' },
                            { name: 'Roberto S.', role: 'Mecánico', status: 'Ocupado' },
                            { name: 'María G.', role: 'Administrador', status: 'Activo' },
                          ].map((person) => (
                            <div key={person.name} className="rounded-lg border border-border bg-card p-3">
                              <div className="h-8 w-8 rounded-full bg-primary/20 mb-2 flex items-center justify-center text-xs">
                                {person.name.charAt(0)}
                              </div>
                              <p className="text-sm font-medium">{person.name}</p>
                              <p className="text-xs text-muted-foreground">{person.role}</p>
                              <span className={`text-[10px] ${person.status === 'Disponible' ? 'text-green-500' : 'text-muted-foreground'}`}>
                                • {person.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {currentScreen.id === 'inventario' && (
                        <div className="rounded-lg border border-border overflow-hidden">
                          <table className="w-full text-sm">
                            <thead className="bg-muted/50">
                              <tr>
                                <th className="text-left p-2 text-xs">Producto</th>
                                <th className="text-left p-2 text-xs">Stock</th>
                                <th className="text-left p-2 text-xs">Estado</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { name: 'Aceite Sintético 5W-30', stock: 45, status: 'ok' },
                                { name: 'Filtro de Aceite Universal', stock: 12, status: 'ok' },
                                { name: 'Pastillas de Freno', stock: 3, status: 'low' },
                                { name: 'Bujías NGK', stock: 2, status: 'low' },
                              ].map((item) => (
                                <tr key={item.name} className="border-t border-border">
                                  <td className="p-2">{item.name}</td>
                                  <td className="p-2">{item.stock}</td>
                                  <td className="p-2">
                                    <span className={`text-xs ${item.status === 'low' ? 'text-destructive' : 'text-green-500'}`}>
                                      {item.status === 'low' ? '⚠️ Bajo' : '✓ OK'}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      
                      {currentScreen.id === 'ordenes' && (
                        <div className="rounded-lg border border-border bg-card p-4 max-w-md">
                          <h3 className="font-medium mb-4">Nueva Orden de Trabajo</h3>
                          <div className="space-y-3">
                            <div>
                              <label className="text-xs text-muted-foreground">Cliente</label>
                              <div className="h-9 rounded-md border border-input bg-background px-3 flex items-center text-sm">
                                Juan Pérez
                              </div>
                            </div>
                            <div>
                              <label className="text-xs text-muted-foreground">Vehículo</label>
                              <div className="h-9 rounded-md border border-input bg-background px-3 flex items-center text-sm">
                                Honda Civic 2022 - ABC-123
                              </div>
                            </div>
                            <div>
                              <label className="text-xs text-muted-foreground">Servicio</label>
                              <div className="h-9 rounded-md border border-input bg-background px-3 flex items-center text-sm">
                                Cambio de Aceite + Revisión General
                              </div>
                            </div>
                            <Button className="w-full" size="sm">
                              Crear Orden
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {currentScreen.id === 'seguimiento' && (
                        <div className="max-w-sm mx-auto">
                          <div className="text-center mb-6">
                            <div className="h-16 w-16 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center text-3xl">
                              🚗
                            </div>
                            <p className="font-medium">Honda Civic 2022</p>
                            <p className="text-sm text-muted-foreground">Placas: ABC-123</p>
                          </div>
                          <div className="space-y-3">
                            {[
                              { name: 'Recepción', done: true },
                              { name: 'Diagnóstico', done: true },
                              { name: 'Aprobación', done: true },
                              { name: 'En Reparación', done: false, current: true },
                              { name: 'Control de Calidad', done: false },
                              { name: 'Listo para Entrega', done: false },
                            ].map((step, i) => (
                              <div key={step.name} className="flex items-center gap-3">
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs ${
                                  step.done ? 'bg-green-500 text-white' : 
                                  step.current ? 'bg-primary text-white animate-pulse' : 
                                  'bg-muted text-muted-foreground'
                                }`}>
                                  {step.done ? <CheckCircle className="h-4 w-4" /> : i + 1}
                                </div>
                                <span className={`text-sm ${step.current ? 'font-medium text-primary' : ''}`}>
                                  {step.name}
                                </span>
                                {step.current && (
                                  <span className="ml-auto text-xs text-muted-foreground">Ahora</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {currentScreen.id === 'vehiculos' && (
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            { name: 'Honda Civic', year: '2022', plate: 'ABC-123', services: 5 },
                            { name: 'Toyota RAV4', year: '2020', plate: 'XYZ-789', services: 8 },
                          ].map((car) => (
                            <div key={car.plate} className="rounded-lg border border-border bg-card p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                                  🚗
                                </div>
                                <div>
                                  <p className="font-medium">{car.name} {car.year}</p>
                                  <p className="text-sm text-muted-foreground">Placas: {car.plate}</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">{car.services} servicios realizados</span>
                                <Button size="sm" variant="outline">Ver historial</Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation */}
              <div className="bg-muted/50 border-t border-border px-4 py-3 flex items-center justify-between">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={prevScreen}
                  disabled={activeScreen === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Anterior
                </Button>
                
                <div className="flex items-center gap-1">
                  {currentScreens.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScreen(i)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        i === activeScreen ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={nextScreen}
                  disabled={activeScreen === currentScreens.length - 1}
                >
                  Siguiente
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
            
            {/* Screen Description (Mobile) */}
            <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border md:hidden">
              <p className="text-sm text-muted-foreground">{currentScreen.description}</p>
            </div>
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¿Te gustó lo que viste?
            </h2>
            <p className="text-muted-foreground mb-6">
              Comienza tu prueba gratuita de 14 días y experimenta TallerPro en tu propio taller.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Iniciar Prueba Gratis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/contacto')}>
                Agendar Demo Personalizada
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <PromoFooter />
    </div>
  );
};

export default DemoPage;
