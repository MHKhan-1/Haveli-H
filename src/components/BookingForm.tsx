import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@shared/schema";
import { useCreateBooking } from "@/hooks/use-bookings";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Loader2 } from "lucide-react";

// Extend schema for form-specific coercions if needed, although simple strings work fine here.
const formSchema = insertBookingSchema.extend({
  guests: z.coerce.number().min(1, "At least 1 guest required"),
});

type BookingFormValues = z.infer<typeof formSchema>;

export function BookingForm({ 
  defaultType = "table", 
  defaultLocation = "Haveli Jalandhar",
  className = "" 
}: { 
  defaultType?: string; 
  defaultLocation?: string;
  className?: string;
}) {
  const mutation = useCreateBooking();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: defaultType,
      location: defaultLocation,
      date: "",
      name: "",
      email: "",
      phone: "",
      guests: 2,
    },
  });

  function onSubmit(data: BookingFormValues) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className={`bg-card p-8 rounded-lg shadow-xl border border-border/50 ${className}`}>
      <h3 className="font-display text-2xl text-primary mb-6">Reservation Request</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Guests</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Location</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Haveli Jalandhar">Haveli Jalandhar</SelectItem>
                    <SelectItem value="Haveli Murthal">Haveli Murthal</SelectItem>
                    <SelectItem value="Haveli Amritsar">Haveli Amritsar</SelectItem>
                    <SelectItem value="Rangla Punjab">Rangla Punjab</SelectItem>
                    <SelectItem value="Heritage Empress">Heritage Empress</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-primary hover:bg-primary/90 text-white font-serif tracking-wide text-lg py-6 mt-4"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Request...
              </>
            ) : (
              "Confirm Booking"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
