import { motion } from 'framer-motion';
import { Wrench, RefreshCw, Car, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Afinación Mayor',
    description: 'Mantenimiento completo para máximo rendimiento',
  },
  {
    icon: RefreshCw,
    title: 'Diagnóstico',
    description: 'Tecnología de última generación',
  },
  {
    icon: Car,
    title: 'Frenos',
    description: 'Seguridad garantizada para tu vehículo',
  },
  {
    icon: Shield,
    title: 'Suspensión',
    description: 'Confort y estabilidad',
  },
  {
    icon: Clock,
    title: 'Cambio de Aceite',
    description: 'Aceite sintético premium',
  },
  {
    icon: Star,
    title: 'Servicio Premium',
    description: 'Paquete completo de mantenimiento',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ofrecemos una gama completa de servicios automotrices con la más alta calidad y garantía
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="service-card"
            >
              <div className="icon-container mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="group">
            Ver Todos los Servicios
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
