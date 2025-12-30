import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { BookingForm } from "@/components/BookingForm";
import NotFound from "./not-found";

const locationData: Record<string, { name: string; img: string; subtitle: string; desc: string; story: string; highlights: string[] }> = {
  jalandhar: {
    name: "Haveli Jalandhar",
    subtitle: "The Original Highway Landmark",
    desc: "The masterpiece that started a cultural revolution. A grand estate where every brick tells a story of royal Punjabi grandeur.",
    story: "Established in 2002, Haveli Jalandhar stands as a beacon of Punjabi heritage on the historic GT Road. Built using authentic Nanakshahi bricks and centuries-old woodcarving techniques, it is a living tribute to the golden age of our land. From the massive hand-carved gates to the intricate frescoes, every detail is meticulously curated to transport you back to an era of royal luxury.",
    img: "https://pixabay.com/get/ge38c40208f14fab2b185da045628015720bc566a673d22b25add16084102d451170c86c4ce797ec5458a9133c2165b3517d2e121ae620f746b32b53637e6389b_1280.jpg",
    highlights: ["24-Hour Authentic Dal Makhani", "Heritage Artifacts Museum", "Live Folk Music Evenings", "Traditional Brass Service"]
  },
  murthal: {
    name: "Haveli Murthal",
    subtitle: "The Highway Oasis",
    desc: "A royal sanctuary for travelers on the NH-44, bringing the soul of Punjab to the doorstep of the capital.",
    story: "Haveli Murthal is a legend among travelers. Strategically located as the gateway between Delhi and the heartland of Punjab, it offers a grand transition from urban pace to rustic warmth. The architecture is a marvel of massive domes and intricate brickwork, designed to accommodate thousands while maintaining a sense of intimate royal hospitality.",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=80",
    highlights: ["Famous Tandoori Parathas", "Kullad Lassi Bar", "Charpai Courtyard Seating", "Traditional Pottery Workshops"]
  },
  amritsar: {
    name: "Haveli Amritsar",
    subtitle: "In the Holy City",
    desc: "Experience the profound serenity and rich flavors of the spiritual capital of Punjab in our royal heritage setting.",
    story: "Located in the heart of the Golden City, Haveli Amritsar resonates with the divine energy of its surroundings. The architecture reflects the serene majesty of ancient shrines, featuring quiet courtyards and vaulted dining halls. Our recipes here are spiritual, prepared with devotion and refined over centuries in the holy kitchens of the city.",
    img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1600&q=80",
    highlights: ["Signature Amritsari Kulcha", "Hand-Churned Chati Lassi", "Peaceful Heritage Ambience", "Local Artisan Showcase"]
  },
  "rangla-punjab": {
    name: "Rangla Punjab",
    subtitle: "A Living Village Odyssey",
    desc: "Step back into the golden era of rural Punjab. A breathing village museum where history is a daily celebration.",
    story: "Rangla Punjab is a meticulously recreated 18th-century Punjabi village. We have brought the vibrant soul of our rural ancestors back to life. From traditional huts and wells to the hustle of the folk market, every moment is an invitation to rediscover your roots. As the sun sets, witness live Bhangra and Gidda under the starlit sky.",
    img: "https://pixabay.com/get/g9fd317fcb634d56694d4492c375d6da772de16fbe5014de079aaae37896976923a7b4943c38333e75c4cf8bd1143717e3213a9202037a9540897c63db5b4464b_1280.jpg",
    highlights: ["Live Folk Dance & Music", "Artisan Workshops (Pottery/Weaving)", "Authentic Rural Cuisine", "Camel & Horse Rides"]
  },
  "heritage-empress": {
    name: "Heritage Empress",
    subtitle: "Royal Celebrations",
    desc: "The ultimate destination for weddings that look like they belong in a royal fairytale.",
    story: "Heritage Empress is the crown jewel of event venues. Designed for grand celebrations, it combines palatial scale with intimate heritage details. Featuring massive pillar-less ballrooms, lush manicured gardens, and dedicated royal suites, we transform your special moments into pieces of history.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80",
    highlights: ["Grand Palatial Ballrooms", "Royal Bridal Suites", "Bespoke Heritage Catering", "Majestic Outdoor Lawns"]
  },
  curo: {
    name: "Curo Highstreet",
    subtitle: "Urban Heritage Fusion",
    desc: "A seamless blend of modern retail lifestyle and our timeless Punjabi heritage hospitality.",
    story: "Located in Jalandhar's premier lifestyle hub, Curo Haveli is designed for the modern urbanite. It offers a vibrant way to experience our legendary flavors without leaving the city's modern center. The architecture is a sophisticated fusion of contemporary lines and classic heritage motifs, perfect for social and corporate gatherings.",
    img: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=1600&q=80",
    highlights: ["Heritage Fusion Interior", "Gourmet Punjabi Cuisine", "Upscale Urban Ambience", "Premium Corporate Spaces"]
  }
};

export default function LocationDetail() {
  const [match, params] = useRoute("/locations/:id");
  
  if (!match) return <NotFound />;
  
  const id = params?.id;
  const data = id ? locationData[id] : null;

  if (!data) return <NotFound />;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero */}
      <div className="relative h-[80vh] flex items-center">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.img}')` }}
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase mb-4 block">{data.subtitle}</span>
            <h1 className="text-5xl md:text-8xl font-display text-white mb-6 leading-tight">{data.name}</h1>
            <p className="text-xl text-white/80 font-light max-w-2xl leading-relaxed">{data.desc}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-accent font-bold uppercase tracking-widest mb-2">The Legacy</h2>
              <h3 className="text-4xl font-display text-primary mb-8">A Story of Grandeur</h3>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>{data.story}</p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <div className="w-2 h-2 bg-accent rotate-45" />
                    </div>
                    <span className="text-primary font-medium text-lg leading-tight mt-2">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <BookingForm 
                defaultLocation={data.name} 
                className="shadow-2xl border-t-4 border-accent"
              />
              
              <div className="mt-10 p-8 bg-primary text-white rounded-lg">
                <h4 className="font-display text-2xl mb-4">Hours of Operation</h4>
                <div className="space-y-3 text-sm font-light opacity-90">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Monday - Sunday</span>
                    <span>9:00 AM - 11:30 PM</span>
                  </div>
                  <p className="pt-2 italic">*Special timings for folk shows and cultural events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
