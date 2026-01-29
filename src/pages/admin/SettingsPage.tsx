import { Settings } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configuración</h1>
        <p className="text-muted-foreground">Ajustes del sistema y preferencias</p>
      </div>
      
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Settings className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Próximamente</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          La configuración del sistema estará disponible en una próxima actualización.
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;
