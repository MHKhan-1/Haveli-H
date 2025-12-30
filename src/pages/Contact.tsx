import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useCreateInquiry } from "@/hooks/use-bookings";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { z } from "zod";

export default function Contact() {
  const mutation = useCreateInquiry();
  const form = useForm<z.infer<typeof insertInquirySchema>>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof insertInquirySchema>) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-12 bg-primary text-white text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Contact Us</h1>
        <p className="font-serif italic text-lg opacity-80">We'd love to hear from you</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <SectionHeader title="Get in Touch" subtitle="Connect" centered={false} />
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Have a question about our menu, events, or locations? Reach out to us.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 text-accent flex items-center justify-center rounded-full shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary mb-1">Head Office</h4>
                  <p className="text-muted-foreground">Haveli, Jalandhar - Phagwara Highway,<br/>Jalandhar, Punjab, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 text-accent flex items-center justify-center rounded-full shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 98140 12345</p>
                  <p className="text-muted-foreground text-sm">Mon - Sun, 9am - 9pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 text-accent flex items-center justify-center rounded-full shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary mb-1">Email</h4>
                  <p className="text-muted-foreground">info@haveli.co</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 shadow-xl rounded-lg border border-border">
            <h3 className="font-display text-2xl text-primary mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase py-6"
                >
                  {mutation.isPending ? <Loader2 className="animate-spin mr-2" /> : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
