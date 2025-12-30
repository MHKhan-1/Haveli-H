import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Utensils, Music, Users, Camera } from "lucide-react";

const experiences = [
  {
    title: "Heritage Dining",
    subtitle: "A Feast for the Soul",
    desc: "Experience the authentic flavors of Punjab, prepared in traditional clay ovens (tandoors) and served with the legendary warmth of our hospitality. Our recipes have been passed down through generations, ensuring every bite is a tribute to our rich culinary heritage.",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356f36?w=800&q=80",
    icon: Utensils
  },
  {
    title: "Cultural Folk Performances",
    subtitle: "Rhythms of the Land",
    desc: "As the evening descends, our Havelis come alive with the rhythmic beats of the dhol. Witness the vibrant energy of Bhangra and the graceful elegance of Gidda, performed by local artists who carry the torch of our folk traditions.",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
    icon: Music
  },
  {
    title: "Village Life at Rangla Punjab",
    subtitle: "A Journey Back in Time",
    desc: "Step into a meticulously recreated Punjabi village. From traditional huts and wells to artisan workshops, Rangla Punjab offers an immersive journey into the rustic charm and simple joys of 18th-century rural life.",
    img: "https://pixabay.com/get/g9fd317fcb634d56694d4492c375d6da772de16fbe5014de079aaae37896976923a7b4943c38333e75c4cf8bd1143717e3213a9202037a9540897c63db5b4464b_1280.jpg",
    icon: Users
  },
  {
    title: "Royal Celebrations",
    subtitle: "Weddings & Grand Events",
    desc: "Make your special moments truly historic. Our palatial venues, like the Heritage Empress, provide a backdrop of royal grandeur for weddings, corporate galas, and social celebrations that deserve a touch of majesty.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800&q=80",
    icon: Camera
  }
];

export default function Experiences() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=1600&q=80')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center container px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-white mb-6"
          >
            The Haveli Experience
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            More than a destination, it's an immersion into the vibrant heart of Punjabi culture.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          {experiences.map((exp, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    <exp.icon size={24} />
                  </div>
                  <span className="text-accent font-bold tracking-widest uppercase text-sm">{exp.subtitle}</span>
                </div>
                <h2 className="text-4xl font-display text-primary mb-6">{exp.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                  {exp.desc}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="absolute -inset-4 border border-accent/20 rounded-lg -z-10" />
                <img 
                  src={exp.img} 
                  alt={exp.title} 
                  className="rounded-lg shadow-2xl w-full h-[450px] object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
