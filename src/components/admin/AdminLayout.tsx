import { Outlet, useLocation } from 'react-router-dom';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const pageTitles: Record<string, string> = {
  '/admin': 'TallerPro',
  '/admin/citas': 'TallerPro',
  '/admin/workshop': 'TallerPro',
  '/admin/servicios': 'TallerPro',
  '/admin/personal': 'TallerPro',
  '/admin/inventario': 'TallerPro',
  '/admin/clientes': 'TallerPro',
  '/admin/reportes': 'TallerPro',
  '/admin/configuracion': 'TallerPro',
  '/admin/horarios': 'TallerPro',
};

export function AdminLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const title = pageTitles[location.pathname] || 'TallerPro';
  
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      
      <main
        className={cn(
          "transition-all duration-300",
          isCollapsed ? "ml-16" : "ml-56"
        )}
      >
        <AdminHeader title={title} />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
