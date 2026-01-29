// TallerPro Type Definitions

// User & Auth
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'advisor' | 'mechanic' | 'customer';
  phone?: string;
  avatar?: string;
}

// Customer
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'particular' | 'business';
  vehicles: Vehicle[];
  createdAt: Date;
}

// Vehicle
export interface Vehicle {
  id: string;
  customerId: string;
  brand: string;
  model: string;
  year: number;
  plate: string;
  vin?: string;
  color?: string;
}

// Work Order Status
export type WorkOrderStatus = 
  | 'diagnosis_pending'
  | 'approval_pending'
  | 'in_progress'
  | 'quality_control'
  | 'ready_for_delivery';

// Work Order
export interface WorkOrder {
  id: string;
  code: string;
  vehicleId: string;
  vehicle?: Vehicle;
  customerId: string;
  customer?: Customer;
  status: WorkOrderStatus;
  services: WorkOrderService[];
  parts: WorkOrderPart[];
  technicianId?: string;
  technician?: Employee;
  advisorId?: string;
  advisor?: Employee;
  estimatedCost: number;
  finalCost?: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

export interface WorkOrderService {
  id: string;
  serviceId: string;
  service?: Service;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface WorkOrderPart {
  id: string;
  partId: string;
  part?: InventoryItem;
  quantity: number;
  unitPrice: number;
  total: number;
}

// Service Catalog
export interface Service {
  id: string;
  code: string;
  name: string;
  category: string;
  estimatedHours: number;
  price: number;
  description?: string;
}

// Inventory
export interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  unit: string;
  stock: number;
  minStock: number;
  cost: number;
  salePrice: number;
  status: 'available' | 'low_stock' | 'out_of_stock';
}

// Employee
export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'advisor' | 'mechanic';
  code: string;
  status: 'available' | 'busy' | 'vacation' | 'absent';
  avatar?: string;
}

// Appointment
export type AppointmentStatus = 
  | 'scheduled'
  | 'confirmed'
  | 'arrived'
  | 'in_workshop'
  | 'completed'
  | 'cancelled'
  | 'no_show';

export interface Appointment {
  id: string;
  customerId: string;
  customer?: Customer;
  vehicleId: string;
  vehicle?: Vehicle;
  date: Date;
  time: string;
  serviceType: string;
  status: AppointmentStatus;
  notes?: string;
  isOnline: boolean;
}

// Dashboard Metrics
export interface DashboardMetrics {
  totalSalesToday: number;
  activeOrders: number;
  completedToday: number;
  pendingOrders: number;
  productivity: number;
  lowStockAlerts: number;
}

// Landing Page Content (Editable)
export interface LandingContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  services: ServiceCard[];
  howItWorks: HowItWorksStep[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  id: string;
  icon: string;
  title: string;
  description: string;
  step: number;
}
