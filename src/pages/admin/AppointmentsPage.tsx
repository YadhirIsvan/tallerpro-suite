import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Calendar as CalendarIcon,
  CheckCircle,
  Clock,
  Car,
  XCircle,
  AlertCircle,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AppointmentStatus } from '@/types';

const appointmentStatuses: { id: AppointmentStatus; label: string; icon: React.ElementType; color: string }[] = [
  { id: 'scheduled', label: 'Programadas', icon: CalendarIcon, color: 'text-muted-foreground' },
  { id: 'confirmed', label: 'Confirmadas', icon: CheckCircle, color: 'text-metric-completed' },
  { id: 'arrived', label: 'Cliente Llegó', icon: User, color: 'text-metric-active' },
  { id: 'in_workshop', label: 'En Taller (OT)', icon: Car, color: 'text-primary' },
  { id: 'completed', label: 'Completadas', icon: CheckCircle, color: 'text-status-ready' },
  { id: 'cancelled', label: 'Canceladas', icon: XCircle, color: 'text-destructive' },
  { id: 'no_show', label: 'No Show', icon: AlertCircle, color: 'text-metric-pending' },
];

const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  appointments: number;
}

function generateCalendarDays(year: number, month: number): CalendarDay[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const today = new Date();
  const days: CalendarDay[] = [];
  
  // Previous month days
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDay - i),
      isCurrentMonth: false,
      isToday: false,
      appointments: 0,
    });
  }
  
  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: 
        date.getDate() === today.getDate() && 
        date.getMonth() === today.getMonth() && 
        date.getFullYear() === today.getFullYear(),
      appointments: 0,
    });
  }
  
  // Next month days
  const remainingDays = 42 - days.length; // 6 rows * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    days.push({
      date: new Date(year, month + 1, day),
      isCurrentMonth: false,
      isToday: false,
      appointments: 0,
    });
  }
  
  return days;
}

const AppointmentsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 28)); // January 28, 2026
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = generateCalendarDays(year, month);
  
  const monthName = currentDate.toLocaleDateString('es-MX', { month: 'long', year: 'numeric' });
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(new Date(year, month + (direction === 'next' ? 1 : -1), 1));
  };
  
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Calendario de Citas</h1>
          <p className="text-muted-foreground">Gestiona las citas del taller</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nueva Cita
        </Button>
      </div>
      
      {/* Calendar */}
      <div className="rounded-xl border border-border bg-card p-6">
        {/* Calendar Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" size="icon" onClick={() => navigateMonth('prev')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold capitalize text-foreground">{monthName}</h2>
          <Button variant="outline" size="icon" onClick={() => navigateMonth('next')}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Days of Week */}
        <div className="mb-2 grid grid-cols-7 gap-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(day.date)}
              className={cn(
                "calendar-day h-24 text-left",
                !day.isCurrentMonth && "opacity-40",
                day.isToday && "bg-primary/10 border-primary",
                selectedDate?.getTime() === day.date.getTime() && "ring-2 ring-primary"
              )}
            >
              <span className={cn(
                "text-sm font-medium",
                day.isToday && "text-primary"
              )}>
                {day.date.getDate()}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Status Summary */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-foreground">Citas por Estado</h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          {appointmentStatuses.map((status) => (
            <div key={status.id} className="flex items-center gap-2">
              <status.icon className={cn("h-4 w-4", status.color)} />
              <span className="text-sm text-muted-foreground">{status.label}</span>
              <Badge variant="secondary" className="font-mono">0</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
