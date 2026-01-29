import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, BarChart3, Calendar, Users, Package, 
  ClipboardList, Settings, Clock, FileText, Wrench,
  Car, Plus, Home, User, Bell, RefreshCw, Tag, UserCircle,
  Search, MoreHorizontal, Eye, Mail, Phone, ChevronLeft, ChevronRight,
  Palette, Globe, MessageCircle, Upload, TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';

// Admin menu items (from the image reference)
const adminMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'citas', label: 'Citas', icon: Calendar },
  { id: 'workshop', label: 'Workshop', icon: Wrench },
  { id: 'catalogo', label: 'Catálogo Servicios', icon: Tag },
  { id: 'personal', label: 'Personal', icon: Users },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'customers', label: 'Customers', icon: UserCircle },
  { id: 'reports', label: 'Reports', icon: ClipboardList },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'horarios', label: 'Horarios', icon: Clock },
];

const DemoPage = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('administrador');
  const [activeAdminMenu, setActiveAdminMenu] = useState('dashboard');

  // Render Admin Panel Content
  const renderAdminContent = () => {
    switch (activeAdminMenu) {
      case 'dashboard':
        return (
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
        );

      case 'citas':
        return (
          <div className="space-y-4">
            {/* Calendar Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="h-8 w-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="font-semibold">Enero 2026</span>
                <button className="h-8 w-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-7 border-b border-border">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((d) => (
                  <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {/* First row with empty cells */}
                {[null, null, null, null, 1, 2, 3].map((day, i) => (
                  <div key={i} className={`min-h-[50px] border-r border-b border-border p-1 ${!day ? 'bg-muted/20' : ''} ${i >= 5 ? 'bg-muted/10' : ''}`}>
                    {day && <span className="text-xs">{day}</span>}
                    {i >= 5 && day && <span className="text-[8px] text-destructive ml-1">N/D</span>}
                  </div>
                ))}
                {/* Remaining days */}
                {Array.from({ length: 28 }).map((_, i) => {
                  const day = i + 4;
                  if (day > 31) return null;
                  const isWeekend = (i + 4) % 7 >= 5;
                  const hasAppointments = day === 29;
                  return (
                    <div key={day} className={`min-h-[50px] border-r border-b border-border p-1 ${isWeekend ? 'bg-muted/10' : ''} ${hasAppointments ? 'bg-primary/5' : ''}`}>
                      <span className={`text-xs ${hasAppointments ? 'text-primary font-bold' : ''}`}>{day}</span>
                      {hasAppointments && (
                        <div className="mt-0.5 space-y-0.5">
                          <div className="bg-yellow-500/80 text-white text-[6px] px-1 rounded truncate">14:00 YADHIR</div>
                          <div className="bg-primary/80 text-white text-[6px] px-1 rounded truncate">16:00 angel</div>
                          <div className="bg-green-500/80 text-white text-[6px] px-1 rounded truncate">17:00 angel</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'workshop':
        return (
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
        );

      case 'catalogo':
        return (
          <div className="space-y-4">
            {/* Search */}
            <div className="flex items-center gap-2 max-w-md">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  className="w-full h-9 pl-9 pr-4 rounded-lg border border-border bg-card text-sm" 
                  placeholder="Buscar servicio..."
                />
              </div>
            </div>
            
            {/* Table */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Código</th>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Servicio</th>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Categoría</th>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Horas</th>
                    <th className="text-right px-4 py-2 font-medium text-muted-foreground">Precio</th>
                    <th className="text-center px-4 py-2 font-medium text-muted-foreground">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-muted-foreground">SVC-7677</td>
                    <td className="px-4 py-3 font-medium">cambio de parabrisas</td>
                    <td className="px-4 py-3 text-muted-foreground">Enfriamiento y Climatización</td>
                    <td className="px-4 py-3 text-muted-foreground">⏱ 12.50h</td>
                    <td className="px-4 py-3 text-right text-primary font-medium">$12,004.00</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-muted-foreground hover:text-foreground">✏️</button>
                        <button className="text-destructive/70 hover:text-destructive">🗑️</button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-muted-foreground">SVC-7313</td>
                    <td className="px-4 py-3 font-medium">reparación de neumáticos</td>
                    <td className="px-4 py-3 text-muted-foreground">Frenos y Seguridad</td>
                    <td className="px-4 py-3 text-muted-foreground">⏱ 0.30h</td>
                    <td className="px-4 py-3 text-right text-primary font-medium">$2,456.00</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-muted-foreground hover:text-foreground">✏️</button>
                        <button className="text-destructive/70 hover:text-destructive">🗑️</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'personal':
        return (
          <div className="space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: Wrench, label: 'Mecánicos', value: '2' },
                { icon: Users, label: 'Asesores', value: '1' },
                { icon: UserCircle, label: 'Admins', value: '0' },
                { icon: Users, label: 'Total', value: '3' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-card p-4 flex items-center gap-3">
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tabs */}
            <div className="flex items-center gap-4 border-b border-border pb-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg text-sm font-medium">
                <Users className="h-4 w-4" /> Personal
              </button>
              <button className="text-sm text-muted-foreground">📅 Cronograma</button>
              <button className="text-sm text-muted-foreground">👔 Asesores</button>
            </div>
            
            {/* Status indicators */}
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-500" /> 3 Disponibles</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-destructive" /> 0 En Tarea</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500" /> 0 Vacaciones</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-yellow-500" /> 0 Ausentes</span>
            </div>
            
            {/* Employee Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Norma Leticia', role: 'Mecánico', code: 'MEC-467', email: 'norma@email.com', phone: '2711965333' },
                { name: 'angel yamir', role: 'Asesor', code: 'ADV-859', email: 'angel@email.com', phone: '2712838201' },
                { name: 'yadhiruv pallares', role: 'Mecánico', code: 'MEC-395', email: 'yadhir@email.com', phone: '2711133514' },
              ].map((emp) => (
                <div key={emp.name} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <Wrench className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{emp.name}</p>
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                      </div>
                      <p className="text-xs text-muted-foreground">General</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${emp.role === 'Mecánico' ? 'bg-blue-500/20 text-blue-600' : 'bg-green-500/20 text-green-600'}`}>
                          {emp.role}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-600">Activo</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">{emp.code}</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                    <p className="flex items-center gap-1"><Mail className="h-3 w-3" /> {emp.email}</p>
                    <p className="flex items-center gap-1"><Phone className="h-3 w-3" /> {emp.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'inventory':
        return (
          <div className="space-y-4">
            {/* Search */}
            <div className="flex items-center gap-2 max-w-md">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  className="w-full h-9 pl-9 pr-4 rounded-lg border border-border bg-card text-sm" 
                  placeholder="Buscar por nombre, SKU..."
                />
              </div>
            </div>
            
            {/* Table */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">SKU</th>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Producto</th>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Stock</th>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Unidad</th>
                    <th className="text-right px-4 py-2 font-medium text-muted-foreground">Costo</th>
                    <th className="text-right px-4 py-2 font-medium text-muted-foreground">Precio Venta</th>
                    <th className="text-center px-4 py-2 font-medium text-muted-foreground">Estado</th>
                    <th className="text-center px-4 py-2 font-medium text-muted-foreground">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-muted-foreground">sdf-23dr</td>
                    <td className="px-4 py-3">
                      <p className="font-medium">aceite</p>
                      <p className="text-xs text-muted-foreground">aceita para camioneta</p>
                    </td>
                    <td className="px-4 py-3"><span className="font-bold">50</span> <span className="text-muted-foreground">/ min 10</span></td>
                    <td className="px-4 py-3 text-muted-foreground">Litro</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">$200.00</td>
                    <td className="px-4 py-3 text-right font-medium">$230.00</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 font-medium">OK</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="h-4 w-4" /></button>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-muted-foreground">susuki</td>
                    <td className="px-4 py-3">
                      <p className="font-medium">llantas</p>
                      <p className="text-xs text-muted-foreground">llanatas de motocicleta</p>
                    </td>
                    <td className="px-4 py-3"><span className="font-bold">300</span> <span className="text-muted-foreground">/ min 4</span></td>
                    <td className="px-4 py-3 text-muted-foreground">Pieza</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">$20,300.00</td>
                    <td className="px-4 py-3 text-right font-medium">$1,234.00</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 font-medium">OK</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="h-4 w-4" /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'customers':
        return (
          <div className="space-y-4">
            {/* Search */}
            <div className="flex items-center gap-2 max-w-md">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  className="w-full h-9 pl-9 pr-4 rounded-lg border border-border bg-card text-sm" 
                  placeholder="Buscar por nombre, email o teléfono..."
                />
              </div>
            </div>
            
            {/* Table */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Cliente</th>
                    <th className="text-left px-4 py-2 font-medium text-muted-foreground">Contacto</th>
                    <th className="text-center px-4 py-2 font-medium text-muted-foreground">Vehículos</th>
                    <th className="text-center px-4 py-2 font-medium text-muted-foreground">OTs Activas</th>
                    <th className="text-center px-4 py-2 font-medium text-muted-foreground">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">AN</div>
                        <div>
                          <p className="font-medium">angel yamir pallares santiago</p>
                          <p className="text-xs text-muted-foreground">Particular</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="flex items-center gap-1 text-muted-foreground"><Mail className="h-3 w-3" /> innovogen375@gmail.com</p>
                      <p className="flex items-center gap-1 text-muted-foreground"><Phone className="h-3 w-3" /> 2712838201</p>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="px-2 py-0.5 rounded bg-muted text-xs font-medium">1 Autos</span>
                    </td>
                    <td className="px-4 py-3 text-center text-muted-foreground">-</td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-muted-foreground hover:text-foreground"><Eye className="h-4 w-4" /></button>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10" />
                        </div>
                        <div>
                          <p className="font-medium">YADHIR ISVAN PALLARES SANTIAGO</p>
                          <p className="text-xs text-muted-foreground">Particular</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="flex items-center gap-1 text-muted-foreground"><Mail className="h-3 w-3" /> yadhirisvan11@gmail.com</p>
                      <p className="flex items-center gap-1 text-muted-foreground"><Phone className="h-3 w-3" /> 2711133514</p>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="px-2 py-0.5 rounded bg-muted text-xs font-medium">1 Autos</span>
                    </td>
                    <td className="px-4 py-3 text-center text-muted-foreground">-</td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-muted-foreground hover:text-foreground"><Eye className="h-4 w-4" /></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-4">
            {/* Financial Cards */}
            <div className="grid grid-cols-5 gap-3">
              {[
                { label: 'Ingresos Totales', value: '$0', sublabel: 'Incluye 16% IVA', color: 'bg-primary/10', icon: '📋' },
                { label: 'Ingresos Brutos', value: '$0', sublabel: '+0.0% vs año ant.', color: 'bg-blue-500/10', icon: '💵' },
                { label: 'Ganancia Refacciones', value: '$0', sublabel: 'Clic para desglose', color: 'bg-green-500/10', icon: '💎' },
                { label: 'Mano de Obra', value: '$0', sublabel: '100% margen (servicios)', color: 'bg-yellow-500/10', icon: '🔧' },
                { label: 'Utilidad Neta', value: '$0', sublabel: 'MO + Ganancia Refac.', color: 'bg-primary/10', icon: '📈' },
              ].map((card) => (
                <div key={card.label} className={`rounded-lg border border-border ${card.color} p-3`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">{card.label}</p>
                      <p className="text-xl font-bold text-primary">{card.value}</p>
                      <p className="text-[10px] text-muted-foreground">{card.sublabel}</p>
                    </div>
                    <span className="text-xl">{card.icon}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chart Area */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">Ingresos Mensuales 2026</span>
                    <span className="text-[10px] text-muted-foreground">Clic en barra para detalle</span>
                  </div>
                  <label className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">Sin IVA</span>
                    <div className="h-4 w-8 bg-muted rounded-full" />
                  </label>
                </div>
                <div className="h-32 flex items-end justify-between gap-2">
                  {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((m) => (
                    <div key={m} className="flex-1 flex flex-col items-center">
                      <div className="w-full h-2 bg-muted rounded" />
                      <span className="text-[8px] text-muted-foreground mt-1">{m}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-foreground" /> Mano de Obra</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-muted-foreground" /> Refacciones</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-sm">Top Servicios</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center py-4">Sin datos</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-sm">Top Mecánicos</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center py-4">Sin datos</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-4">
            {/* Plan Info */}
            <div className="rounded-lg border border-border bg-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👑</span>
                <div>
                  <p className="font-medium">Plan Pro</p>
                  <p className="text-xs text-muted-foreground">Periodo de prueba hasta 28/2/2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>👥 6 / 100 usuarios</span>
                <span>📦 2 / 200 productos</span>
                <span>📋 100 órdenes/mes</span>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex items-center gap-4 border-b border-border">
              {[
                { icon: FileText, label: 'Información' },
                { icon: Palette, label: 'Apariencia', active: true },
                { icon: Globe, label: 'Landing' },
                { icon: MessageCircle, label: 'WhatsApp' },
                { icon: User, label: 'Propietario' },
              ].map((tab) => (
                <button 
                  key={tab.label}
                  className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 ${tab.active ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'}`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Appearance Content */}
            <div className="rounded-lg border border-border bg-card p-4 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🖼️</span>
                  <div>
                    <p className="font-medium">Logo del Taller</p>
                    <p className="text-xs text-muted-foreground">El logo se mostrará en la landing page y en el sistema</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg border border-border bg-muted flex items-center justify-center">
                    <span className="text-xs text-primary font-bold">LOGO</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm">
                    <Upload className="h-4 w-4" /> Subir Logo
                  </button>
                  <span className="text-xs text-muted-foreground">PNG, JPG o SVG. Máximo 2MB.</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎨</span>
                  <div>
                    <p className="font-medium">Colores de la Marca</p>
                    <p className="text-xs text-muted-foreground">Define los colores que representan tu taller</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Color Primario</p>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded bg-primary" />
                      <div className="flex-1 h-3 bg-primary/30 rounded-full" />
                      <span className="text-xs font-mono">#4E87A5</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Color Secundario</p>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded bg-yellow-500" />
                      <div className="flex-1 h-3 bg-yellow-500/30 rounded-full" />
                      <span className="text-xs font-mono">#EA9628</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'horarios':
        return (
          <div className="rounded-lg border border-border bg-card p-8 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="font-semibold text-foreground mb-2">Próximamente</p>
              <p className="text-sm text-muted-foreground">La gestión de horarios estará disponible pronto</p>
            </div>
          </div>
        );

      default:
        return null;
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
                        app.autotronia.com/admin/{activeAdminMenu}
                      </div>
                    </div>
                  </div>
                  
                  {/* Admin Interface */}
                  <div className="flex min-h-[500px]">
                    {/* Sidebar - Dark theme like reference */}
                    <div className="w-48 bg-sidebar p-3 flex-shrink-0 border-r border-sidebar-border">
                      {/* Logo */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                          <Wrench className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-bold text-sidebar-foreground text-sm">
                          autotronia<span className="text-primary">.com</span>
                        </span>
                      </div>
                      
                      {/* Menu Items */}
                      <nav className="space-y-0.5">
                        {adminMenuItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveAdminMenu(item.id)}
                            className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-xs transition-colors ${
                              activeAdminMenu === item.id
                                ? 'bg-primary/10 text-primary'
                                : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent'
                            }`}
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                            {activeAdminMenu === item.id && (
                              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                            )}
                          </button>
                        ))}
                      </nav>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 bg-background p-4 overflow-auto">
                      <div className="mb-4">
                        <h2 className="text-lg font-bold text-foreground capitalize">
                          {adminMenuItems.find(m => m.id === activeAdminMenu)?.label || 'Dashboard'}
                        </h2>
                        <p className="text-xs text-muted-foreground">
                          Panel de administración
                        </p>
                      </div>
                      
                      {renderAdminContent()}
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
