import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Wrench, 
  Tag, 
  Users, 
  Package, 
  UserCircle,
  BarChart3,
  Settings,
  Clock,
  ChevronLeft,
  LogOut
} from 'lucide-react';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Calendar, label: 'Citas', href: '/admin/citas' },
  { icon: Wrench, label: 'Workshop', href: '/admin/workshop' },
  { icon: Tag, label: 'Catálogo Servicios', href: '/admin/servicios' },
  { icon: Users, label: 'Personal', href: '/admin/personal' },
  { icon: Package, label: 'Inventory', href: '/admin/inventario' },
  { icon: UserCircle, label: 'Customers', href: '/admin/clientes' },
  { icon: BarChart3, label: 'Reports', href: '/admin/reportes' },
  { icon: Settings, label: 'Settings', href: '/admin/configuracion' },
  { icon: Clock, label: 'Horarios', href: '/admin/horarios' },
];

interface AdminSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
  const location = useLocation();
  
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-56"
      )}
    >
      {/* Logo */}
      <div className={cn(
        "flex h-16 items-center border-b border-sidebar-border px-4",
        isCollapsed && "justify-center"
      )}>
        {isCollapsed ? (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
        ) : (
          <button onClick={() => {}} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Wrench className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-sidebar-accent-foreground">
              autotronia<span className="text-sidebar-primary">.com</span>
            </span>
          </button>
        )}
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href || 
            (item.href !== '/admin' && location.pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "nav-item relative",
                isActive && "active",
                isCollapsed && "justify-center px-0"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className={cn("h-5 w-5 shrink-0", isActive && "text-sidebar-primary")} />
              {!isCollapsed && <span>{item.label}</span>}
              {isActive && !isCollapsed && (
                <div className="absolute right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sidebar-primary" />
              )}
            </Link>
          );
        })}
      </nav>
      
      {/* Collapse Button */}
      <div className="border-t border-sidebar-border p-3">
        <button
          onClick={onToggle}
          className={cn(
            "nav-item w-full",
            isCollapsed && "justify-center px-0"
          )}
        >
          <ChevronLeft className={cn(
            "h-5 w-5 transition-transform",
            isCollapsed && "rotate-180"
          )} />
          {!isCollapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
