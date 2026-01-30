import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, Phone, Send, MessageSquare, 
  Clock, CheckCircle, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PromoNavbar } from '@/components/promo/PromoNavbar';
import { PromoFooter } from '@/components/promo/PromoFooter';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshopName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Petición a Formspree usando el endpoint de tu imagen
      const response = await fetch("https://formspree.io/f/xykjddvb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Hemos recibido tu información correctamente. Te contactaremos pronto.",
        });
        // Limpiar el formulario tras éxito
        setFormData({ name: '', email: '', phone: '', workshopName: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Error al enviar");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <PromoNavbar />
      
      {/* Hero Section - Se mantiene igual */}
      <section className="pt-24 pb-16 lg:pt-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-primary mb-2 block">CONTACTO</span>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">
              ¿Listo para <span className="text-gradient">transformar tu taller</span>?
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Estamos aquí para ayudarte. Contáctanos para una demo personalizada 
              o resuelve tus dudas con nuestro equipo.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info de contacto - Se mantiene igual */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Hablemos de tu taller</h2>
              <p className="text-muted-foreground mb-8">
                Ya sea que tengas preguntas sobre nuestros planes o quieras hablar sobre cómo autotronia.com puede ayudar a tu negocio.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">autotronia.ventas@gmail.com</p>
                  </div>
                </div>
                {/* ... otros métodos de contacto ... */}
              </div>
            </motion.div>
            
            {/* Formulario con Formspree */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <h2 className="text-xl font-bold text-foreground mb-6">Envíanos un mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input id="name" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input id="phone" name="phone" placeholder="55 1234 5678" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workshopName">Nombre del taller</Label>
                      <Input id="workshopName" name="workshopName" placeholder="Taller Mecánico XYZ" value={formData.workshopName} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea id="message" name="message" placeholder="Cuéntanos sobre tu taller..." rows={5} value={formData.message} onChange={handleChange} required />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <PromoFooter />
    </div>
  );
};

export default ContactPage;