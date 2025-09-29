import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import countries from "world-countries";
import { Textarea } from "./ui/textarea";

// Schema and Type Definitions
const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  message: z.string().optional(),
});
type FormValues = z.infer<typeof formSchema>;

// --- 1. Get your EmailJS keys from environment variables ---
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  // --- 2. Add state for submission status ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "Indonesia",
      message: "",
    },
  });

  // --- 3. The onSubmit function with EmailJS logic ---
  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    emailjs
      .send(serviceId, templateId, values, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatusMessage("✅ Message sent successfully!");
        form.reset(); // Reset form fields after success
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatusMessage(`❌ Failed to send message.`);
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatusMessage(""), 5000); // Clear message after 5 seconds
      });
  }

  // Your country list logic...
  const countryList = countries
    .map((c) => {
      const iddCode = c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : "");
      return { label: c.name.common, value: c.name.common, idd: iddCode };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
  const selectedCountry = form.watch("country");
  const countryPhoneCode =
    countryList.find((c) => c.value === selectedCountry)?.idd || "";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 w-full">
        {/* All your FormField components remain exactly the same */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="bg-gray-a px-4 py-2"
                />
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
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...field}
                  className="bg-gray-a px-4 py-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Country</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between rounded-none bg-gray-a h-12",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? countryList.find((c) => c.value === field.value)
                            ?.label
                        : "Select a country"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countryList.map((country) => (
                          <CommandItem
                            key={country.value}
                            value={country.value}
                            onSelect={() => {
                              form.setValue("country", country.value);
                              form.setValue("phone", country.idd);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value === country.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {country.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
                <Input
                  type="tel"
                  placeholder={`${countryPhoneCode} Enter your phone number`}
                  {...field}
                  className="bg-gray-a px-4 py-2"
                />
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
                <Textarea
                  placeholder="Tell us what you need"
                  {...field}
                  className="bg-gray-a px-4 py-2 h-24 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- 4. UI for submission status and button --- */}
        <div className="w-full flex justify-end items-center gap-4 pt-2">
          {statusMessage && <p className="text-sm">{statusMessage}</p>}
          <Button type="submit" variant={"ghost"} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
