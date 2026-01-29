import { useState } from 'react';
import { 
  Search, 
  Plus, 
  Wrench, 
  Briefcase, 
  Shield,
  Users,
  Calendar,
  Filter,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockEmployees } from '@/data/mockData';
import { cn } from '@/lib/utils';

const roleIcons = {
  mechanic: Wrench,
  advisor: Briefcase,
  admin: Shield,
};

const roleLabels = {
  mechanic: 'Mecánico',
  advisor: 'Asesor',
  admin: 'Administrador',
};

const roleColors = {
  mechanic: 'bg-primary/10 text-primary',
  advisor: 'bg-metric-active/10 text-metric-active',
  admin: 'bg-metric-completed/10 text-metric-completed',
};

const statusColors = {
  available: 'bg-metric-completed text-white',
  busy: 'bg-metric-alert text-white',
  vacation: 'bg-metric-active text-white',
  absent: 'bg-metric-pending text-white',
};

const statusLabels = {
  available: 'Activo',
  busy: 'Ocupado',
  vacation: 'Vacaciones',
  absent: 'Ausente',
};

const PersonnelPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('personal');
  
  const mechanics = mockEmployees.filter((e) => e.role === 'mechanic');
  const advisors = mockEmployees.filter((e) => e.role === 'advisor');
  const admins = mockEmployees.filter((e) => e.role === 'admin');
  
  const availableCount = mockEmployees.filter((e) => e.status === 'available').length;
  const busyCount = mockEmployees.filter((e) => e.status === 'busy').length;
  const vacationCount = mockEmployees.filter((e) => e.status === 'vacation').length;
  const absentCount = mockEmployees.filter((e) => e.status === 'absent').length;
  
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Personal</h1>
          <p className="text-muted-foreground">Gestiona tu equipo de trabajo</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nuevo Empleado
        </Button>
      </div>
      
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Wrench className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mechanics.length}</p>
              <p className="text-sm text-muted-foreground">Mecánicos</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-metric-active/10">
              <Briefcase className="h-5 w-5 text-metric-active" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{advisors.length}</p>
              <p className="text-sm text-muted-foreground">Asesores</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-metric-completed/10">
              <Shield className="h-5 w-5 text-metric-completed" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{admins.length}</p>
              <p className="text-sm text-muted-foreground">Admins</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <Users className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockEmployees.length}</p>
              <p className="text-sm text-muted-foreground">Total</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs and Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="personal" className="gap-2">
              <Users className="h-4 w-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="cronograma" className="gap-2">
              <Calendar className="h-4 w-4" />
              Cronograma
            </TabsTrigger>
            <TabsTrigger value="asesores" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Asesores
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar empleado..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Todos los...
          </Button>
        </div>
      </div>
      
      {/* Status Legend */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-metric-completed" />
          <span className="text-muted-foreground">{availableCount} Disponibles</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-metric-alert" />
          <span className="text-muted-foreground">{busyCount} En Tarea</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-metric-active" />
          <span className="text-muted-foreground">{vacationCount} Vacaciones</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-metric-pending" />
          <span className="text-muted-foreground">{absentCount} Ausentes</span>
        </div>
      </div>
      
      {/* Employee Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockEmployees.map((employee) => {
          const RoleIcon = roleIcons[employee.role];
          
          return (
            <div key={employee.id} className="employee-card">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <RoleIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{employee.name}</h3>
                    <span className="h-2 w-2 rounded-full bg-metric-completed" />
                  </div>
                  <p className="text-sm text-muted-foreground">General</p>
                </div>
              </div>
              
              <div className="mb-4 flex items-center gap-2">
                <Badge className={cn("text-xs", roleColors[employee.role])}>
                  {roleLabels[employee.role]}
                </Badge>
                <Badge className={cn("text-xs", statusColors[employee.status])}>
                  {statusLabels[employee.status]}
                </Badge>
              </div>
              
              <p className="mb-3 font-mono text-xs text-muted-foreground">{employee.code}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{employee.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{employee.phone}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonnelPage;
