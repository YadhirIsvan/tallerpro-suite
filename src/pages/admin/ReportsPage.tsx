import { BarChart3 } from 'lucide-react';

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Reportes</h1>
        <p className="text-muted-foreground">Análisis y estadísticas del taller</p>
      </div>
      
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <BarChart3 className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Próximamente</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Los reportes y análisis estarán disponibles en una próxima actualización.
        </p>
      </div>
    </div>
  );
};

export default ReportsPage;
