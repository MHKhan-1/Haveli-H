import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background pattern-overlay">
      <Navigation />
      
      {/* Page Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=80')" }} // Indian architecture/arch
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display text-white mb-4">Our Heritage</h1>
          <p className="text-xl text-white/80 font-serif italic">A Journey Through Time</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-2xl font-display text-primary leading-relaxed">
            Haveli is a tribute to the golden era of Punjab. It is an attempt to preserve the rustic charm, 
            the earthy flavors, and the royal hospitality that the land is known for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80" // Indian art/pattern
              alt="Art" 
              className="rounded-lg shadow-xl" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader title="Our Origin" subtitle="The Beginning" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Started as a humble roadside stop to serve travelers authentic Punjabi food, Haveli has now grown into a 
              globally recognized hospitality brand. But our soul remains the same.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every brick in our walls, every painting in our corridors, and every dish on our menu is curated to transport 
              you to the Pind (village) life of Punjab.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white shadow-lg border-t-4 border-accent rounded-sm">
            <h3 className="font-display text-2xl mb-4 text-primary">Tradition</h3>
            <p className="text-muted-foreground font-light">Preserving age-old recipes and cooking techniques.</p>
          </div>
          <div className="p-8 bg-white shadow-lg border-t-4 border-accent rounded-sm">
            <h3 className="font-display text-2xl mb-4 text-primary">Culture</h3>
            <p className="text-muted-foreground font-light">Showcasing the vibrant art, music, and dance of Punjab.</p>
          </div>
          <div className="p-8 bg-white shadow-lg border-t-4 border-accent rounded-sm">
            <h3 className="font-display text-2xl mb-4 text-primary">Hospitality</h3>
            <p className="text-muted-foreground font-light">Serving every guest with warmth and royal courtesy.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
