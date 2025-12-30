import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "jalandhar",
    name: "Haveli Jalandhar",
    desc: "The flagship heritage destination on the historic GT Road.",
    img: "https://pixabay.com/get/ge38c40208f14fab2b185da045628015720bc566a673d22b25add16084102d451170c86c4ce797ec5458a9133c2165b3517d2e121ae620f746b32b53637e6389b_1280.jpg",
  },
  {
    id: "murthal",
    name: "Haveli Murthal",
    desc: "A royal sanctuary for travelers on the NH-44 highway.",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  },
  {
    id: "amritsar",
    name: "Haveli Amritsar",
    desc: "Experience spiritual serenity in the heart of the Golden City.",
    img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80",
  },
  {
    id: "rangla-punjab",
    name: "Rangla Punjab",
    desc: "A living museum of vibrant 18th-century Punjabi village life.",
    img: "https://pixabay.com/get/g9fd317fcb634d56694d4492c375d6da772de16fbe5014de079aaae37896976923a7b4943c38333e75c4cf8bd1143717e3213a9202037a9540897c63db5b4464b_1280.jpg",
  },
  {
    id: "heritage-empress",
    name: "Heritage Empress",
    desc: "The ultimate royal wedding and grand celebration destination.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },
  {
    id: "curo",
    name: "Curo Highstreet",
    desc: "Sophisticated fusion of modern lifestyle and heritage hospitality.",
    img: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=800&q=80",
  }
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="bg-primary text-white py-32 px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl mb-4">Our Locations</h1>
        <p className="text-white/70 font-serif italic text-xl">Landmarks of Hospitality</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {locations.map((loc) => (
            <Link key={loc.id} href={`/locations/${loc.id}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 aspect-[4/3]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10" />
                  <img 
                    src={loc.img} 
                    alt={loc.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <MapPin size={12} /> View Details
                  </div>
                </div>
                <h3 className="font-display text-2xl text-primary mb-2 group-hover:text-accent transition-colors">{loc.name}</h3>
                <p className="text-muted-foreground font-light">{loc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
