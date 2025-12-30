import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeader } from "@/components/SectionHeader";

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://pixabay.com/get/g9fd317fcb634d56694d4492c375d6da772de16fbe5014de079aaae37896976923a7b4943c38333e75c4cf8bd1143717e3213a9202037a9540897c63db5b4464b_1280.jpg')" }} // Wedding event
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-7xl mb-4">Celebrate With Us</h1>
          <p className="font-serif italic text-xl">Weddings • Corporate • Gatherings</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Grand Celebrations" subtitle="Events at Haveli" centered={false} />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether it is a royal wedding, a corporate gala, or an intimate family gathering, 
              Haveli provides the perfect backdrop. With our heritage venues, exquisite catering, 
              and impeccable service, we turn your special moments into timeless memories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted/30 p-6 rounded-sm border border-border">
                <h4 className="font-display text-xl text-primary mb-2">Weddings</h4>
                <p className="text-sm text-muted-foreground">Fairytale settings for your big day at Heritage Empress.</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-sm border border-border">
                <h4 className="font-display text-xl text-primary mb-2">Corporate</h4>
                <p className="text-sm text-muted-foreground">Professional settings with a touch of luxury.</p>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" 
              alt="Event Setup" 
              className="rounded-lg shadow-xl"
            />
          </div>

          <div id="booking-form">
             <BookingForm defaultType="event" className="sticky top-24" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
