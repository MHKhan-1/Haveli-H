import { Link } from "wouter";
import logo from "@assets/logo.png";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src={logo} alt="Haveli Logo" className="h-16 w-auto brightness-0 invert opacity-90" />
            <p className="text-primary-foreground/80 leading-relaxed font-sans font-light">
              Preserving the grandeur of Punjab's rich heritage through authentic flavors, 
              timeless architecture, and warm hospitality.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-accent">Explore</h4>
            <ul className="space-y-3 font-sans font-light">
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Legacy</Link></li>
              <li><Link href="/menu" className="hover:text-accent transition-colors">Culinary Journey</Link></li>
              <li><Link href="/locations" className="hover:text-accent transition-colors">Our Locations</Link></li>
              <li><Link href="/rangla-punjab" className="hover:text-accent transition-colors">Rangla Punjab</Link></li>
              <li><Link href="/events" className="hover:text-accent transition-colors">Plan an Event</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-accent">Contact</h4>
            <ul className="space-y-4 font-sans font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span>Haveli, Jalandhar - Phagwara Highway,<br/>Jalandhar, Punjab</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+91 98140 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@haveli.co</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-accent">Newsletter</h4>
            <p className="text-sm mb-4 font-light opacity-80">Subscribe to receive updates on events and seasonal menus.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm px-4 py-2 w-full text-sm focus:outline-none focus:border-accent text-white placeholder:text-white/50"
              />
              <button className="bg-accent text-primary px-4 py-2 rounded-sm font-semibold hover:bg-white transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="p-2 bg-primary-foreground/5 rounded-full hover:bg-accent hover:text-primary transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-primary-foreground/5 rounded-full hover:bg-accent hover:text-primary transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-primary-foreground/5 rounded-full hover:bg-accent hover:text-primary transition-all"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm font-light text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Haveli Heritage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
