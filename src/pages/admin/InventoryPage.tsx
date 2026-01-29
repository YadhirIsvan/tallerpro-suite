import { useState } from 'react';
import { Search, Plus, RefreshCw, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { mockInventory } from '@/data/mockData';
import { cn } from '@/lib/utils';

const statusColors = {
  available: 'bg-metric-completed/10 text-metric-completed',
  low_stock: 'bg-metric-pending/10 text-metric-pending',
  out_of_stock: 'bg-metric-alert/10 text-metric-alert',
};

const statusLabels = {
  available: 'Disponible',
  low_stock: 'Stock Bajo',
  out_of_stock: 'Agotado',
};

const InventoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredInventory = mockInventory.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Inventario</h1>
          <p className="text-muted-foreground">
            Gestiona tus refacciones y productos ({mockInventory.length})
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Producto
          </Button>
        </div>
      </div>
      
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre, SKU..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      {/* Table */}
      <div className="data-table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SKU</TableHead>
              <TableHead>Producto</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Unidad</TableHead>
              <TableHead className="text-right">Costo</TableHead>
              <TableHead className="text-right">Precio Venta</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInventory.length > 0 ? (
              filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <span className={cn(
                      "font-medium",
                      item.stock <= item.minStock && "text-metric-alert"
                    )}>
                      {item.stock}
                    </span>
                  </TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell className="text-right">${item.cost.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-medium">
                    ${item.salePrice.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={cn("text-xs", statusColors[item.status])}>
                      {statusLabels[item.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-32 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Package className="h-12 w-12 text-muted-foreground/50" />
                    <p className="text-muted-foreground">No se encontraron productos</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InventoryPage;
