import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, BarChart3, Calendar, Users, Package, 
  ClipboardList, Settings, Clock, FileText, Wrench,
  Car, Plus, Home, User, Bell, RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';

// Admin menu items (from the image reference)
const adminMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'citas', label: 'Citas', icon: Calendar },
  { id: 'workshop', label: 'Workshop', icon: Wrench },
  { id: 'catalogo', label: 'Catálogo Servicios', icon: FileText },
  { id: 'personal', label: 'Personal', icon: Users },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'reports', label: 'Reports', icon: ClipboardList },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'horarios', label: 'Horarios', icon: Clock },
];

const DemoPage = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('administrador');
  const [activeAdminMenu, setActiveAdminMenu] = useState('dashboard');

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
              Explora autotronia.com en <span className="text-gradient">acción</span>
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
              onValueChange={(v) => { setActiveRole(v); }}
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
            <AnimatePresence mode="wait">
              {activeRole === 'administrador' && (
                <motion.div
                  key="admin"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl"
                >
                  {/* Browser Chrome */}
                  <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-destructive/60" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                      <div className="h-3 w-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-background rounded-lg px-4 py-1.5 text-sm text-muted-foreground max-w-md mx-auto">
                        app.autotronia.com/admin
                      </div>
                    </div>
                  </div>
                  
                  {/* Admin Interface */}
                  <div className="flex min-h-[500px]">
                    {/* Sidebar - Dark theme like reference */}
                    <div className="w-56 bg-[#1a1f2e] p-4 flex-shrink-0">
                      {/* Logo */}
                      <div className="flex items-center gap-3 mb-8">
                        <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                          <Wrench className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="font-bold text-white">
                          autotronia<span className="text-primary">.com</span>
                        </span>
                      </div>
                      
                      {/* Menu Items */}
                      <nav className="space-y-1">
                        {adminMenuItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveAdminMenu(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                              activeAdminMenu === item.id
                                ? 'bg-primary/10 text-primary'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                            {activeAdminMenu === item.id && (
                              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                            )}
                          </button>
                        ))}
                      </nav>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 bg-background p-6">
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-foreground capitalize">
                          {adminMenuItems.find(m => m.id === activeAdminMenu)?.label || 'Dashboard'}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Panel de administración - Vista de {activeAdminMenu}
                        </p>
                      </div>
                      
                      {activeAdminMenu === 'dashboard' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-4 gap-4">
                            {[
                              { label: 'Ventas Hoy', value: '$12,450', color: 'text-green-500' },
                              { label: 'Órdenes Activas', value: '8', color: 'text-blue-500' },
                              { label: 'Completados', value: '15', color: 'text-primary' },
                              { label: 'Inventario Bajo', value: '3', color: 'text-destructive' },
                            ].map((metric) => (
                              <div key={metric.label} className="rounded-lg border border-border bg-card p-4">
                                <p className="text-xs text-muted-foreground">{metric.label}</p>
                                <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-lg border border-border bg-card p-4 h-48 flex items-center justify-center">
                            <span className="text-muted-foreground">📊 Gráfica de rendimiento</span>
                          </div>
                        </div>
                      )}
                      
                      {activeAdminMenu === 'workshop' && (
                        <div className="grid grid-cols-5 gap-3 h-64">
                          {[
                            { name: 'Diagnóstico', color: 'bg-yellow-500', items: ['Nissan Sentra', 'Toyota Corolla'] },
                            { name: 'Aprobación', color: 'bg-blue-500', items: ['Honda Civic'] },
                            { name: 'En Progreso', color: 'bg-green-500', items: ['VW Jetta', 'Ford Focus'] },
                            { name: 'Calidad', color: 'bg-primary', items: ['Chevrolet Cruze'] },
                            { name: 'Listo', color: 'bg-emerald-500', items: ['Hyundai Elantra'] },
                          ].map((col) => (
                            <div key={col.name} className="rounded-lg bg-muted/50 p-3">
                              <div className="flex items-center gap-2 mb-3">
                                <div className={`h-2 w-2 rounded-full ${col.color}`} />
                                <span className="text-xs font-medium">{col.name}</span>
                              </div>
                              <div className="space-y-2">
                                {col.items.map((item) => (
                                  <div key={item} className="rounded-lg bg-card border border-border p-2 text-xs">
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {activeAdminMenu !== 'dashboard' && activeAdminMenu !== 'workshop' && (
                        <div className="rounded-lg border border-border bg-card p-8 h-64 flex items-center justify-center">
                          <div className="text-center text-muted-foreground">
                            <p className="text-lg mb-2">Vista de {activeAdminMenu}</p>
                            <p className="text-sm">Haz clic en otras opciones del menú para explorar</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* ASESOR - Mobile View (Mis Citas) */}
              {activeRole === 'asesor' && (
                <motion.div
                  key="asesor"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-center"
                >
                  <div className="w-80 rounded-[2.5rem] border-[8px] border-gray-800 bg-white overflow-hidden shadow-2xl">
                    {/* Phone Notch */}
                    <div className="bg-gray-800 h-6 flex items-center justify-center">
                      <div className="w-20 h-4 bg-black rounded-b-xl" />
                    </div>
                    
                    {/* App Header - Green theme like reference */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-xs font-bold text-white">
                          AT
                        </div>
                        <span className="font-semibold text-gray-900">autotronia</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white">
                        AY
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-gray-50 p-4 min-h-[450px]">
                      {/* Title Section */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-900 text-lg">Mis Citas</h2>
                          <p className="text-sm text-gray-500">0 citas pendientes</p>
                        </div>
                        <button className="ml-auto text-gray-400">
                          <RefreshCw className="h-5 w-5" />
                        </button>
                      </div>
                      
                      {/* Filter Tabs */}
                      <div className="flex gap-2 mb-6 overflow-x-auto">
                        {['Program.', 'Confirm.', 'Llegó', 'Taller'].map((tab, i) => (
                          <button
                            key={tab}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap flex items-center gap-1 ${
                              i === 0
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {i === 0 && <Calendar className="h-3 w-3" />}
                            {tab}
                          </button>
                        ))}
                      </div>
                      
                      {/* Empty State */}
                      <div className="flex flex-col items-center justify-center py-16">
                        <div className="h-20 w-20 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                          <Calendar className="h-10 w-10 text-gray-300" />
                        </div>
                        <p className="font-semibold text-gray-900 mb-1">No hay citas programadas</p>
                        <p className="text-sm text-gray-500">Las citas aparecerán aquí</p>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="bg-white border-t px-6 py-3 flex items-center justify-around">
                      <button className="flex flex-col items-center text-green-500">
                        <Calendar className="h-6 w-6" />
                        <span className="text-[10px] font-medium mt-1">Mis Citas</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <Plus className="h-6 w-6" />
                        <span className="text-[10px] mt-1">Nueva Cita</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <User className="h-6 w-6" />
                        <span className="text-[10px] mt-1">Perfil</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* MECANICO - Mobile View (Mis Tareas) */}
              {activeRole === 'mecanico' && (
                <motion.div
                  key="mecanico"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-center"
                >
                  <div className="w-80 rounded-[2.5rem] border-[8px] border-gray-800 bg-white overflow-hidden shadow-2xl">
                    {/* Phone Notch */}
                    <div className="bg-gray-800 h-6 flex items-center justify-center">
                      <div className="w-20 h-4 bg-black rounded-b-xl" />
                    </div>
                    
                    {/* App Header - Blue theme */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                          AT
                        </div>
                        <span className="font-semibold text-gray-900">autotronia</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                        YP
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-gray-50 p-4 min-h-[450px]">
                      {/* Title Section */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center">
                          <ClipboardList className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-900 text-lg">Mis Tareas</h2>
                          <p className="text-sm text-gray-500">0 tareas pendientes</p>
                        </div>
                      </div>
                      
                      {/* Empty State Card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-8">
                        <div className="flex flex-col items-center justify-center">
                          <div className="h-20 w-20 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                            <ClipboardList className="h-10 w-10 text-gray-300" />
                          </div>
                          <p className="font-semibold text-gray-900 mb-1">No tienes tareas asignadas</p>
                          <p className="text-sm text-gray-500 text-center">Las órdenes de trabajo asignadas a ti aparecerán aquí</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="bg-white border-t px-8 py-3 flex items-center justify-around">
                      <button className="flex flex-col items-center text-blue-500">
                        <ClipboardList className="h-6 w-6" />
                        <span className="text-[10px] font-medium mt-1">Tareas</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <User className="h-6 w-6" />
                        <span className="text-[10px] mt-1">Perfil</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* CLIENTE - Mobile View (Mi Garage) */}
              {activeRole === 'cliente' && (
                <motion.div
                  key="cliente"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-center"
                >
                  <div className="w-80 rounded-[2.5rem] border-[8px] border-gray-800 bg-white overflow-hidden shadow-2xl">
                    {/* Phone Notch */}
                    <div className="bg-gray-800 h-6 flex items-center justify-center">
                      <div className="w-20 h-4 bg-black rounded-b-xl" />
                    </div>
                    
                    {/* App Header - Cyan theme */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                          <Car className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">Mi Garage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                          YI
                        </div>
                        <button className="text-gray-400">
                          <Bell className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-gray-50 p-4 min-h-[450px]">
                      {/* Title Section */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Car className="h-6 w-6 text-cyan-600" />
                          <div>
                            <h2 className="font-bold text-gray-900 text-lg">Mi Garage</h2>
                            <p className="text-sm text-gray-500">1 vehículos registrados</p>
                          </div>
                        </div>
                        <button className="bg-cyan-500 text-white text-xs px-3 py-2 rounded-lg flex items-center gap-1 font-medium">
                          <Plus className="h-4 w-4" />
                          Agregar Auto
                        </button>
                      </div>
                      
                      {/* Vehicle Card */}
                      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
                        <div className="relative h-40 bg-gradient-to-br from-red-600 to-red-700">
                          {/* Simulated car image placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Car className="h-16 w-16 mx-auto mb-2 opacity-50" />
                              <span className="text-xs opacity-70">Foto del vehículo</span>
                            </div>
                          </div>
                          <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900">Otro Ferrari</h3>
                          <p className="text-sm text-gray-500">2020 • Azul</p>
                          <p className="text-xs text-cyan-600 font-medium mt-1">YGC516A</p>
                        </div>
                      </div>
                      
                      {/* Add Vehicle Card */}
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                          <Plus className="h-6 w-6 text-gray-400" />
                        </div>
                        <p className="font-medium text-gray-900 text-sm">Agregar Vehículo</p>
                        <p className="text-xs text-gray-500">Registra un nuevo auto</p>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="bg-white border-t px-4 py-3 flex items-center justify-around">
                      <button className="flex flex-col items-center text-cyan-500">
                        <Car className="h-6 w-6" />
                        <span className="text-[10px] font-medium mt-1">Mi Vehículo</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <Clock className="h-6 w-6" />
                        <span className="text-[10px] mt-1">Historial</span>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <User className="h-6 w-6" />
                        <span className="text-[10px] mt-1">Perfil</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Role Description */}
            <motion.div
              key={activeRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8"
            >
              {activeRole === 'administrador' && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  <strong className="text-foreground">Panel de Administrador:</strong> Vista completa del negocio con acceso a todas las funciones del sistema. Gestiona personal, inventario, citas, reportes y configuración desde un solo lugar.
                </p>
              )}
              {activeRole === 'asesor' && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  <strong className="text-foreground">App del Asesor:</strong> Aplicación móvil para gestionar citas de clientes. Visualiza, confirma y da seguimiento a las citas desde cualquier lugar del taller.
                </p>
              )}
              {activeRole === 'mecanico' && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  <strong className="text-foreground">App del Mecánico:</strong> Aplicación móvil para ver las tareas asignadas. Recibe órdenes de trabajo, actualiza el progreso y notifica cuando terminas.
                </p>
              )}
              {activeRole === 'cliente' && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  <strong className="text-foreground">App del Cliente:</strong> Portal móvil donde los clientes registran sus vehículos, ven el historial de servicios y dan seguimiento en tiempo real a sus autos en el taller.
                </p>
              )}
            </motion.div>
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 space-y-6"
          >
            <h2 className="text-2xl font-bold text-foreground">
              ¿Listo para digitalizar tu taller?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/contacto')}>
                Solicitar Demo Personalizada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/beneficios')}>
                Ver Beneficios
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
