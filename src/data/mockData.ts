import { 
  Customer, 
  Vehicle, 
  WorkOrder, 
  Service, 
  InventoryItem, 
  Employee, 
  Appointment,
  DashboardMetrics,
  LandingContent
} from '@/types';

// Mock Customers
export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Angel Yamir Pallares Santiago',
    email: 'innovogen375@gmail.com',
    phone: '2712838201',
    type: 'particular',
    vehicles: [],
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Yadhir Isvan Pallares Santiago',
    email: 'yadhirisvan11@gmail.com',
    phone: '2711133514',
    type: 'particular',
    vehicles: [],
    createdAt: new Date('2024-02-20'),
  },
];

// Mock Vehicles
export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    customerId: '1',
    brand: 'Nissan',
    model: 'Corolla',
    year: 2020,
    plate: 'YDK374G',
    color: 'Blanco',
  },
  {
    id: '2',
    customerId: '2',
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    plate: 'ABC123D',
    color: 'Negro',
  },
];

// Mock Employees
export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Norma Leticia',
    email: 'normaleticia72@hotmail.com',
    phone: '2711965333',
    role: 'mechanic',
    code: 'MEC-467',
    status: 'available',
  },
  {
    id: '2',
    name: 'Angel Yamir',
    email: 'angelyamir@gmail.com',
    phone: '2712838201',
    role: 'advisor',
    code: 'ADV-859',
    status: 'available',
  },
];

// Mock Work Orders
export const mockWorkOrders: WorkOrder[] = [
  {
    id: '1',
    code: 'WO-2026-0001',
    vehicleId: '1',
    vehicle: mockVehicles[0],
    customerId: '1',
    customer: mockCustomers[0],
    status: 'diagnosis_pending',
    services: [],
    parts: [],
    advisorId: '2',
    estimatedCost: 0,
    notes: 'Sin cliente',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Mock Services
export const mockServices: Service[] = [
  {
    id: '1',
    code: 'SRV-001',
    name: 'Afinación Mayor',
    category: 'Mantenimiento',
    estimatedHours: 3,
    price: 1500,
    description: 'Mantenimiento completo para máximo rendimiento',
  },
  {
    id: '2',
    code: 'SRV-002',
    name: 'Diagnóstico Computarizado',
    category: 'Diagnóstico',
    estimatedHours: 1,
    price: 500,
    description: 'Tecnología de última generación',
  },
  {
    id: '3',
    code: 'SRV-003',
    name: 'Cambio de Frenos',
    category: 'Frenos',
    estimatedHours: 2,
    price: 2000,
    description: 'Seguridad garantizada para tu vehículo',
  },
  {
    id: '4',
    code: 'SRV-004',
    name: 'Suspensión',
    category: 'Suspensión',
    estimatedHours: 4,
    price: 3500,
    description: 'Confort y estabilidad',
  },
  {
    id: '5',
    code: 'SRV-005',
    name: 'Cambio de Aceite',
    category: 'Mantenimiento',
    estimatedHours: 0.5,
    price: 800,
    description: 'Aceite sintético premium',
  },
  {
    id: '6',
    code: 'SRV-006',
    name: 'Servicio Premium',
    category: 'Premium',
    estimatedHours: 5,
    price: 5000,
    description: 'Paquete completo de mantenimiento',
  },
];

// Mock Inventory
export const mockInventory: InventoryItem[] = [
  {
    id: '1',
    sku: 'ACE-001',
    name: 'Aceite Sintético 5W-30',
    unit: 'Litro',
    stock: 50,
    minStock: 10,
    cost: 150,
    salePrice: 250,
    status: 'available',
  },
  {
    id: '2',
    sku: 'FIL-001',
    name: 'Filtro de Aceite Universal',
    unit: 'Pieza',
    stock: 5,
    minStock: 10,
    cost: 80,
    salePrice: 150,
    status: 'low_stock',
  },
  {
    id: '3',
    sku: 'BUJ-001',
    name: 'Bujía NGK',
    unit: 'Pieza',
    stock: 0,
    minStock: 20,
    cost: 45,
    salePrice: 90,
    status: 'out_of_stock',
  },
];

// Mock Appointments
export const mockAppointments: Appointment[] = [
  {
    id: '1',
    customerId: '1',
    customer: mockCustomers[0],
    vehicleId: '1',
    vehicle: mockVehicles[0],
    date: new Date('2026-01-30'),
    time: '10:00',
    serviceType: 'Afinación Mayor',
    status: 'confirmed',
    isOnline: true,
  },
  {
    id: '2',
    customerId: '2',
    customer: mockCustomers[1],
    vehicleId: '2',
    vehicle: mockVehicles[1],
    date: new Date('2026-01-30'),
    time: '14:00',
    serviceType: 'Diagnóstico',
    status: 'scheduled',
    isOnline: false,
  },
];

// Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  totalSalesToday: 0,
  activeOrders: 1,
  completedToday: 0,
  pendingOrders: 1,
  productivity: 0,
  lowStockAlerts: 2,
};

// Landing Page Content
export const mockLandingContent: LandingContent = {
  hero: {
    title: 'La solución definitiva para administrar tu taller',
    subtitle: 'Gestiona órdenes de trabajo, inventario, citas y clientes desde una sola plataforma. Aumenta tu productividad y ofrece un servicio excepcional.',
    ctaText: 'Comenzar Gratis',
  },
  services: [
    {
      id: '1',
      icon: 'Wrench',
      title: 'Afinación Mayor',
      description: 'Mantenimiento completo para máximo rendimiento',
    },
    {
      id: '2',
      icon: 'RefreshCw',
      title: 'Diagnóstico',
      description: 'Tecnología de última generación',
    },
    {
      id: '3',
      icon: 'Car',
      title: 'Frenos',
      description: 'Seguridad garantizada para tu vehículo',
    },
    {
      id: '4',
      icon: 'Shield',
      title: 'Suspensión',
      description: 'Confort y estabilidad',
    },
    {
      id: '5',
      icon: 'Clock',
      title: 'Cambio de Aceite',
      description: 'Aceite sintético premium',
    },
    {
      id: '6',
      icon: 'Star',
      title: 'Servicio Premium',
      description: 'Paquete completo de mantenimiento',
    },
  ],
  howItWorks: [
    {
      id: '1',
      icon: 'Calendar',
      title: 'Crea tu cuenta',
      description: 'Regístrate en segundos con tu email',
      step: 1,
    },
    {
      id: '2',
      icon: 'Car',
      title: 'Registra tu vehículo',
      description: 'Agrega los datos de tu auto',
      step: 2,
    },
    {
      id: '3',
      icon: 'Clock',
      title: 'Agenda tu cita',
      description: 'Elige el servicio, fecha y hora',
      step: 3,
    },
    {
      id: '4',
      icon: 'CheckCircle',
      title: '¡Listo!',
      description: 'Recibe confirmación y recordatorios',
      step: 4,
    },
  ],
  cta: {
    title: '¿Listo para darle el mejor cuidado a tu auto?',
    subtitle: 'Regístrate hoy y recibe un diagnóstico gratuito con cualquier servicio. Sin compromisos.',
    buttonText: 'Crear Cuenta Gratis',
  },
};
