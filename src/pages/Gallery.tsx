import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=800&q=80", category: "Architecture" },
  { url: "https://images.unsplash.com/photo-1585937421612-70a008356f36?w=800&q=80", category: "Cuisine" },
  { url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80", category: "Culture" },
  { url: "https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800&q=80", category: "Weddings" },
  { url: "https://pixabay.com/get/ge38c40208f14fab2b185da045628015720bc566a673d22b25add16084102d451170c86c4ce797ec5458a9133c2165b3517d2e121ae620f746b32b53637e6389b_1280.jpg", category: "Heritage" },
  { url: "https://pixabay.com/get/g9fd317fcb634d56694d4492c375d6da772de16fbe5014de079aaae37896976923a7b4943c38333e75c4cf8bd1143717e3213a9202037a9540897c63db5b4464b_1280.jpg", category: "Village Life" },
  { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", category: "Highway" },
  { url: "https://images.unsplash.com/photo-1598124146163-36819847286d?w=800&q=80", category: "Interiors" },
  { url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80", category: "Serenity" }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <section className="bg-primary text-white py-32 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-6xl mb-4">Visual Legacy</h1>
          <p className="text-white/70 font-serif italic text-xl">A glimpse into the soul of Punjab</p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer shadow-lg"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500 z-10" />
                <img 
                  src={image.url} 
                  alt={image.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-3 py-1 bg-accent text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
