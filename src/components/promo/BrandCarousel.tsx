import { motion } from 'framer-motion';

const brands = [
  { name: 'React', logo: '⚛️' },
  { name: 'TypeScript', logo: '📘' },
  { name: 'Tailwind', logo: '🎨' },
  { name: 'Supabase', logo: '⚡' },
  { name: 'Stripe', logo: '💳' },
  { name: 'AWS', logo: '☁️' },
  { name: 'Google Cloud', logo: '🌐' },
  { name: 'Vercel', logo: '▲' },
  { name: 'PostgreSQL', logo: '🐘' },
  { name: 'Node.js', logo: '🟢' },
];

// Duplicate for seamless loop
const duplicatedBrands = [...brands, ...brands];

export function BrandCarousel() {
  return (
    <section className="py-16 border-y border-border bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Tecnologías y Partners que impulsan nuestra plataforma
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -50 * brands.length * 6],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors shrink-0"
            >
              <span className="text-2xl">{brand.logo}</span>
              <span className="text-foreground font-medium whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
