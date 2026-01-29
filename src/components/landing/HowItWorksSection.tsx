import { motion } from 'framer-motion';
import { Calendar, Car, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Crea tu cuenta',
    description: 'Regístrate en segundos con tu email',
    step: 1,
  },
  {
    icon: Car,
    title: 'Registra tu vehículo',
    description: 'Agrega los datos de tu auto',
    step: 2,
  },
  {
    icon: Clock,
    title: 'Agenda tu cita',
    description: 'Elige el servicio, fecha y hora',
    step: 3,
  },
  {
    icon: CheckCircle,
    title: '¡Listo!',
    description: 'Recibe confirmación y recordatorios',
    step: 4,
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-muted/30 py-24">
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
            ¿Cómo Funciona?
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Agendar tu cita es muy fácil, solo sigue estos pasos
          </p>
        </motion.div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-border lg:block" style={{ left: '12.5%', right: '12.5%' }} />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="step-card"
              >
                <div className="relative mb-6">
                  <div className="step-icon">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="step-number">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
