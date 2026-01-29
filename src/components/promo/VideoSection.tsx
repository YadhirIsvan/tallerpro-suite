import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary mb-2 block">VE CÓMO FUNCIONA</span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Conoce autotronia.com en <span className="text-gradient">2 minutos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Descubre cómo nuestra plataforma puede transformar la operación de tu taller mecánico
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
            {!isPlaying ? (
              <>
                {/* Thumbnail/Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 flex items-center justify-center">
                  {/* Simulated Video Preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-sidebar-background p-8 flex gap-4">
                      {/* Sidebar mockup */}
                      <div className="hidden md:block w-48 bg-sidebar-background border-r border-sidebar-border p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="h-8 w-8 rounded-lg bg-primary" />
                          <span className="text-sm font-medium text-sidebar-foreground">autotronia</span>
                        </div>
                        <div className="space-y-2">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-sidebar-accent' : 'bg-muted/30'}`} />
                          ))}
                        </div>
                      </div>
                      {/* Main content mockup */}
                      <div className="flex-1 space-y-4">
                        <div className="h-6 w-48 rounded bg-muted/50" />
                        <div className="grid grid-cols-4 gap-3">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="h-20 rounded-lg border border-border bg-card/50" />
                          ))}
                        </div>
                        <div className="h-40 rounded-lg border border-border bg-card/50" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                
                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="relative">
                    {/* Pulse animation */}
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                    <div className="relative h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </button>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  2:30
                </div>
              </>
            ) : (
              <>
                {/* Video placeholder - Replace with actual video embed */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-lg mb-4">🎬 Video explicativo aquí</p>
                    <p className="text-sm text-gray-400 mb-6">
                      Aquí irá tu video de YouTube, Vimeo o archivo MP4
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsPlaying(false)}
                      className="gap-2"
                    >
                      <X className="h-4 w-4" />
                      Cerrar video
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute -z-10 -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
