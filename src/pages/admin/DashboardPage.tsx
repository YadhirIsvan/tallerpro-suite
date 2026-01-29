import { 
  DollarSign, 
  Car, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  RefreshCw,
  Wrench,
  Calendar,
  Users,
  Package,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MetricCard } from '@/components/admin/MetricCard';
import { QuickActionCard } from '@/components/admin/QuickActionCard';
import { mockDashboardMetrics, mockWorkOrders, mockAppointments } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const DashboardPage = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Resumen del día - {formattedDate}
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Actualizar
        </Button>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <MetricCard
          title="Ventas Totales (Hoy)"
          value={`$${mockDashboardMetrics.totalSalesToday}`}
          subtitle="Ingresos confirmados"
          icon={DollarSign}
          iconColor="text-metric-sales"
          iconBgColor="bg-metric-sales/10"
        />
        <MetricCard
          title="Autos en Taller"
          value={mockDashboardMetrics.activeOrders}
          subtitle="Órdenes activas"
          icon={Car}
          iconColor="text-metric-active"
          iconBgColor="bg-metric-active/10"
        />
        <MetricCard
          title="Completados Hoy"
          value={mockDashboardMetrics.completedToday}
          subtitle="Listos para entrega"
          icon={CheckCircle}
          iconColor="text-metric-completed"
          iconBgColor="bg-metric-completed/10"
        />
        <MetricCard
          title="Pendientes"
          value={mockDashboardMetrics.pendingOrders}
          subtitle="Por diagnosticar/aprobar"
          icon={Clock}
          iconColor="text-metric-pending"
          iconBgColor="bg-metric-pending/10"
        />
        <MetricCard
          title="Productividad"
          value={`${mockDashboardMetrics.productivity}%`}
          subtitle="Tareas completadas"
          icon={TrendingUp}
          iconColor="text-metric-productivity"
          iconBgColor="bg-metric-productivity/10"
        />
        <MetricCard
          title="Alertas Inventario"
          value={mockDashboardMetrics.lowStockAlerts}
          subtitle="Stock bajo"
          icon={AlertTriangle}
          iconColor="text-metric-alert"
          iconBgColor="bg-metric-alert/10"
        />
      </div>
      
      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Órdenes Recientes</h2>
            </div>
            <Link to="/admin/workshop" className="flex items-center gap-1 text-sm text-primary hover:underline">
              Ver todas
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="space-y-3">
            {mockWorkOrders.length > 0 ? (
              mockWorkOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Car className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{order.code}</p>
                      <p className="text-sm text-muted-foreground">• {order.notes || 'Sin notas'}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-status-diagnosis-bg text-status-diagnosis">
                    Diagnóstico
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-8">No hay órdenes recientes</p>
            )}
          </div>
        </div>
        
        {/* Today's Appointments */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Citas de Hoy</h2>
            </div>
            <Link to="/admin/citas" className="flex items-center gap-1 text-sm text-primary hover:underline">
              Ver calendario
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No hay citas programadas para hoy</p>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <QuickActionCard
          icon={Wrench}
          title="Workshop"
          subtitle="Gestión de OTs"
          href="/admin/workshop"
          iconColor="text-primary"
          iconBgColor="bg-primary/10"
        />
        <QuickActionCard
          icon={Calendar}
          title="Citas"
          subtitle="Agenda del taller"
          href="/admin/citas"
          iconColor="text-metric-active"
          iconBgColor="bg-metric-active/10"
        />
        <QuickActionCard
          icon={Users}
          title="Clientes"
          subtitle="Base de datos"
          href="/admin/clientes"
          iconColor="text-metric-completed"
          iconBgColor="bg-metric-completed/10"
        />
        <QuickActionCard
          icon={Package}
          title="Inventario"
          subtitle="Stock y refacciones"
          href="/admin/inventario"
          iconColor="text-metric-pending"
          iconBgColor="bg-metric-pending/10"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
