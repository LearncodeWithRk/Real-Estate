
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { properties } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  propertyId: z.string().optional(),
  date: z.date({ required_error: "A date is required." }),
  time: z.string().min(1, "A time is required."),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      propertyId: "",
      time: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    const selectedProperty = properties.find(p => p.id === data.propertyId);
    const propertyInfo = selectedProperty ? ` for the property "${selectedProperty.title}"` : "";
    
    const message = `Hi! I'd like to book a viewing${propertyInfo}.
Preferred date: ${format(data.date, "PPP")}
Preferred time: ${data.time}
My name is: ${data.name}`;

    setPrefilledMessage(message);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Your Tour</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              name="propertyId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a property" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {properties.map((prop) => (
                        <SelectItem key={prop.id} value={prop.id}>
                          {prop.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {prefilledMessage ? (
                <WhatsAppButton
                    message="Confirm on WhatsApp"
                    prefilledMessage={prefilledMessage}
                    className="w-full"
                />
            ) : (
                <Button type="submit" className="w-full" size="lg">Generate WhatsApp Message</Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
