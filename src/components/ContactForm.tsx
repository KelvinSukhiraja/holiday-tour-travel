import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
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

  function onSubmit(values: FormValues) {
    // Here you would typically send the data to your API
    console.log(values);
    alert("Form submitted! Check the console for the data.");
  }

  // Map countries, extract common name and construct the full IDD code
  const countryList = countries
    .map((c) => {
      const iddCode = c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : "");
      return {
        label: c.name.common,
        value: c.name.common,
        idd: iddCode,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  // Watch the selected country to dynamically update the phone field's placeholder
  const selectedCountry = form.watch("country");
  const countryPhoneCode =
    countryList.find((c) => c.value === selectedCountry)?.idd || "";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 w-full">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-A">Full Name</FormLabel>
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
                  className="bg-gray-a px-4 py-2"
                  {...field}
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
                              // Automatically set the phone field with the new country's IDD code
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
                  pattern="[0-9]*"
                  placeholder={`${countryPhoneCode} Enter your phone number`}
                  className="bg-gray-a px-4 py-2"
                  {...field}
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
                  className="bg-gray-a px-4 py-2 h-24 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Button type="submit" variant={"ghost"}>
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
