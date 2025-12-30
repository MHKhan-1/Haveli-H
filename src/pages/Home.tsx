import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans pattern-overlay">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Heritage Interior BG */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 animate-[pulse_20s_infinite_ease-in-out]"
          style={{ 
            backgroundImage: `url('https://pixabay.com/get/g3730b7744156ce271e4fa124826acd87728b2491884cfccc0fa56cf35b0113fb0704d8f9d4743e0bba33f689497b818c6b7aeaad64c5fb53bb7c7a2541f42bf2_1280.jpg')`,
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent text-sm md:text-lg uppercase tracking-[0.3em] font-bold mb-4">
              Welcome to Haveli
            </h2>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display text-white mb-6 leading-tight">
              Experience the <br/>
              <span className="text-gold italic font-serif">Royal Spirit</span> of Punjab
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light mb-10 leading-relaxed">
              Where tradition, culture, and hospitality come together to create 
              unforgettable memories rooted in our glorious heritage.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/locations">
                <button className="px-8 py-4 bg-accent text-primary font-bold text-sm tracking-widest uppercase hover:bg-white transition-all transform hover:-translate-y-1 rounded-sm shadow-lg shadow-accent/20">
                  Explore Locations
                </button>
              </Link>
              <Link href="/experiences">
                <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1 rounded-sm backdrop-blur-sm">
                  Discover Experiences
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto" />
          <span className="text-[10px] uppercase tracking-widest mt-2 block">Scroll</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader 
                title="A Legacy Carved in Time" 
                subtitle="About Haveli"
                centered={false} 
              />
              <p className="text-muted-foreground text-lg mb-6 font-light leading-relaxed">
                Haveli is more than just a destination; it is a journey back to the roots of Punjab. 
                Founded with a vision to preserve and showcase the rich cultural heritage of the land of five rivers, 
                Haveli stands as a testament to timeless traditions.
              </p>
              <p className="text-muted-foreground text-lg mb-8 font-light leading-relaxed">
                From the architecture inspired by ancient palaces to the authentic flavors cooked with love, 
                every corner of Haveli tells a story of royalty, warmth, and unmatched hospitality.
              </p>
              <Link href="/about">
                <span className="inline-flex items-center text-primary font-semibold border-b-2 border-accent pb-1 cursor-pointer hover:text-accent transition-colors">
                  Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-lg z-0"></div>
              {/* Punjabi Village Culture Scene */}
              <img 
                src="https://pixabay.com/get/g49426a901ab5135e4d046214542af84f7c075ad1d29e8ede47f2166e3bff2229e1f5ecfe352c51cdfe30bd67fa82383394f73e78179baa67f2a778e122ea07e7_1280.jpg" 
                alt="Punjabi Culture" 
                className="rounded-lg shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Curated Experiences" 
            subtitle="What We Offer" 
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Authentic Dining", 
                desc: "Savor the rich flavors of Punjab cooked in clay ovens.", 
                img: "https://images.unsplash.com/photo-1585937421612-70a008356f36?w=800&q=80" // Indian food thali
              },
              { 
                title: "Cultural Shows", 
                desc: "Live Bhangra and Giddha performances daily.", 
                img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80" // Party/Dance vibes (abstract)
              },
              { 
                title: "Royal Weddings", 
                desc: "Grand celebrations at Heritage Empress.", 
                img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800&q=80" // Wedding detail
              },
              { 
                title: "Highway Hospitality", 
                desc: "The legendary stop on your journey.", 
                img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80" // Scenic road/journey
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <h3 className="text-xl font-display text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Destinations" subtitle="Visit Us" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/locations/jalandhar">
              <div className="bg-background rounded-lg shadow-lg overflow-hidden border border-border/50 hover:shadow-xl hover:border-accent transition-all cursor-pointer group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://pixabay.com/get/ge38c40208f14fab2b185da045628015720bc566a673d22b25add16084102d451170c86c4ce797ec5458a9133c2165b3517d2e121ae620f746b32b53637e6389b_1280.jpg" // Fort/Palace architecture
                    alt="Haveli Jalandhar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-2xl mb-2 text-primary">Haveli Jalandhar</h3>
                  <p className="text-muted-foreground text-sm mb-4">The Original Highway Landmark</p>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-accent transition-all">
                    Explore Location
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/locations/rangla-punjab">
              <div className="bg-background rounded-lg shadow-lg overflow-hidden border border-border/50 hover:shadow-xl hover:border-accent transition-all cursor-pointer group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://pixabay.com/get/g9fd317fcb634d56694d4492c375d6da772de16fbe5014de079aaae37896976923a7b4943c38333e75c4cf8bd1143717e3213a9202037a9540897c63db5b4464b_1280.jpg" // Village vibes
                    alt="Rangla Punjab" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-2xl mb-2 text-primary">Rangla Punjab</h3>
                  <p className="text-muted-foreground text-sm mb-4">A Traditional Village Experience</p>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-accent transition-all">
                    View Details
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/locations/amritsar">
              <div className="bg-background rounded-lg shadow-lg overflow-hidden border border-border/50 hover:shadow-xl hover:border-accent transition-all cursor-pointer group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://pixabay.com/get/g9fd317fcb634d56694d4492c375d6da772de16fbe5014de079aaae37896976923a7b4943c38333e75c4cf8bd1143717e3213a9202037a9540897c63db5b4464b_1280.jpg" // Golden temple vibes
                    alt="Haveli Amritsar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-2xl mb-2 text-primary">Haveli Amritsar</h3>
                  <p className="text-muted-foreground text-sm mb-4">In the Holy City</p>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-accent transition-all">
                    Explore Location
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/locations">
              <button className="px-8 py-3 border-2 border-primary text-primary font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all rounded-sm">
                View All Locations
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials/Story */}
      <section className="py-24 bg-background text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="container mx-auto px-4 max-w-4xl">
          <Star className="w-8 h-8 text-accent mx-auto mb-6" fill="currentColor" />
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-8 leading-snug">
            "We have not just built a restaurant; <br/>we have preserved a culture."
          </h2>
          <p className="text-muted-foreground font-serif italic text-lg">
            - The Haveli Philosophy
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
