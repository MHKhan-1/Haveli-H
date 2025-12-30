import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "Signature Starters",
    items: [
      { name: "Paneer Tikka", desc: "Cottage cheese marinated in spiced yogurt and grilled in tandoor.", price: "₹395" },
      { name: "Makki Di Roti & Sarson Da Saag", desc: "The quintessential Punjabi winter delicacy.", price: "₹450" },
      { name: "Dahi Bhalla", desc: "Lentil dumplings soaked in yogurt, topped with chutneys.", price: "₹225" },
    ]
  },
  {
    title: "Main Course",
    items: [
      { name: "Dal Makhani", desc: "Black lentils simmered overnight with butter and cream.", price: "₹425" },
      { name: "Shahi Paneer", desc: "Cottage cheese in a rich cashew and tomato gravy.", price: "₹445" },
      { name: "Amritsari Kulcha", desc: "Stuffed bread baked in clay oven, served with chole.", price: "₹250" },
    ]
  },
  {
    title: "Royal Thalis",
    items: [
      { name: "Maharaja Thali", desc: "A grand feast with 3 sabzis, dal, rice, breads, raita & dessert.", price: "₹650" },
      { name: "Punjabi Thali", desc: "Wholesome meal featuring seasonal vegetables and dal.", price: "₹550" },
    ]
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-background pattern-overlay">
      <Navigation />
      
      <div className="bg-secondary text-secondary-foreground py-32 px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl mb-4">Our Menu</h1>
        <p className="text-white/70 font-serif italic text-xl">A Culinary Voyage</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-16"
            >
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl text-primary inline-block border-b-2 border-accent pb-2">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col md:flex-row justify-between items-baseline border-b border-dashed border-border pb-4 hover:bg-muted/30 p-4 transition-colors rounded-sm">
                    <div className="mb-2 md:mb-0">
                      <h3 className="font-serif text-xl font-medium text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground text-sm font-light italic">{item.desc}</p>
                    </div>
                    <div className="font-display text-lg text-primary font-bold">{item.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
          <div className="text-center mt-12 p-8 bg-muted rounded-lg border border-accent/20">
            <p className="font-serif text-primary italic">
              "Good food is the foundation of genuine happiness."
            </p>
            <p className="text-sm mt-2 text-muted-foreground font-sans">
              * Taxes as applicable. Please inform us of any allergies.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
