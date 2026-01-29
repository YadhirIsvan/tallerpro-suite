import { useState } from 'react';
import { 
  Search, 
  Plus, 
  RefreshCw,
  Settings,
  Clock,
  FileCheck,
  Wrench as WrenchIcon,
  CheckCircle2,
  Truck,
  GripVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockWorkOrders, mockVehicles, mockCustomers } from '@/data/mockData';
import { WorkOrder, WorkOrderStatus } from '@/types';
import { cn } from '@/lib/utils';

interface KanbanColumn {
  id: WorkOrderStatus;
  title: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  countBgColor: string;
}

const columns: KanbanColumn[] = [
  {
    id: 'diagnosis_pending',
    title: 'Diagnóstico Pendiente',
    icon: Settings,
    color: 'text-status-diagnosis',
    bgColor: 'bg-status-diagnosis-bg',
    countBgColor: 'bg-status-diagnosis text-white',
  },
  {
    id: 'approval_pending',
    title: 'Aprobación Pendiente',
    icon: FileCheck,
    color: 'text-status-approval',
    bgColor: 'bg-status-approval-bg',
    countBgColor: 'bg-status-approval text-white',
  },
  {
    id: 'in_progress',
    title: 'En Progreso',
    icon: WrenchIcon,
    color: 'text-status-progress',
    bgColor: 'bg-status-progress-bg',
    countBgColor: 'bg-status-progress text-white',
  },
  {
    id: 'quality_control',
    title: 'Control de Calidad',
    icon: CheckCircle2,
    color: 'text-status-quality',
    bgColor: 'bg-status-quality-bg',
    countBgColor: 'bg-status-quality text-white',
  },
  {
    id: 'ready_for_delivery',
    title: 'Listo para Entrega',
    icon: Truck,
    color: 'text-status-ready',
    bgColor: 'bg-status-ready-bg',
    countBgColor: 'bg-status-ready text-white',
  },
];

interface KanbanCardProps {
  order: WorkOrder;
  column: KanbanColumn;
}

function KanbanCard({ order, column }: KanbanCardProps) {
  return (
    <div className="kanban-card group">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-foreground">
            {order.vehicle?.brand} {order.vehicle?.model}
          </h4>
          <Badge variant="secondary" className="mt-1 font-mono text-xs">
            {order.vehicle?.plate}
          </Badge>
        </div>
        <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      
      <div className="space-y-2 text-sm">
        <p className="text-muted-foreground">
          {order.customer?.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {order.code}
        </p>
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <Badge 
          variant="secondary" 
          className={cn("text-xs", column.bgColor, column.color)}
        >
          Diagnóstico Pendiente
        </Badge>
        {order.status === 'diagnosis_pending' && (
          <Button size="sm" variant="outline" className="h-7 gap-1 text-xs">
            <CheckCircle2 className="h-3 w-3" />
            Completar Dx
          </Button>
        )}
      </div>
    </div>
  );
}

const WorkshopPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [orders, setOrders] = useState(mockWorkOrders);
  
  const getOrdersByStatus = (status: WorkOrderStatus) => {
    return orders.filter((order) => order.status === status);
  };
  
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Taller</h1>
          <p className="text-muted-foreground">Tablero de trabajo en tiempo real.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nueva Orden
          </Button>
        </div>
      </div>
      
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar orden, placa o cliente..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => {
          const columnOrders = getOrdersByStatus(column.id);
          
          return (
            <div key={column.id} className="kanban-column min-w-[280px] flex-1">
              {/* Column Header */}
              <div className="kanban-column-header">
                <column.icon className={cn("h-5 w-5", column.color)} />
                <span className="font-medium text-foreground">{column.title}</span>
                <span className={cn("kanban-column-count", column.countBgColor)}>
                  {columnOrders.length}
                </span>
              </div>
              
              {/* Column Content */}
              <div className="flex-1 space-y-3 p-3">
                {columnOrders.length > 0 ? (
                  columnOrders.map((order) => (
                    <KanbanCard key={order.id} order={order} column={column} />
                  ))
                ) : (
                  <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-border">
                    <p className="text-sm text-muted-foreground">Sin órdenes</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkshopPage;
