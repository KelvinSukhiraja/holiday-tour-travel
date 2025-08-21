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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn, months, sections, travels_type } from "@/lib/utils";
import countries from "world-countries";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  travelPreference: z.string().min(1, "Please select a travel preference"),
  travelType: z.string().min(1, "Please select a travel type"),
  budget: z.string().min(1, "Please select a budget"),
  startMonth: z.string().min(1, "Please select a start month"),
  endMonth: z.string().min(1, "Please select an end month"),
});

type FormValues = z.infer<typeof formSchema>;

export default function TravelForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      travelPreference: "",
      travelType: "",
      budget: "",
      startMonth: "",
      endMonth: "",
    },
  });

  function onSubmit(values: FormValues) {
    // Here you would typically send the data to your API
    console.log(values);
    alert("Form submitted! Check the console for the data.");
  }

  const countryList = countries
    .map((c) => ({
      label: c.name.common,
      value: c.name.common,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        {/* Full Name */}
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
                  className="bg-gray-a px-4 py-2 h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
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
                  className="bg-gray-a px-4 py-2 h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="+62 Enter your phone number"
                  className="bg-gray-a px-4 py-2 h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country Combobox */}
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

        {/* Travel Preferences ToggleGroup */}
        <FormField
          control={form.control}
          name="travelPreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Travel Preferences</FormLabel>
              <FormControl>
                <ToggleGroup
                  type="single"
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-wrap gap-3"
                >
                  {sections.map((item) => (
                    <ToggleGroupItem
                      key={item.id}
                      value={item.id}
                      aria-label={item.id}
                      className="data-[state=on]:bg-A data-[state=on]:text-white bg-gray-a px-5 py-5 transition-colors duration-300 grow"
                    >
                      {item.name}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Type of Travel ToggleGroup */}
        <FormField
          control={form.control}
          name="travelType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Travel You’re Interested In</FormLabel>
              <FormControl>
                <ToggleGroup
                  type="single"
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-wrap gap-3"
                >
                  {travels_type.map((travel) => (
                    <ToggleGroupItem
                      key={travel.value}
                      value={travel.value}
                      aria-label={travel.value}
                      className="data-[state=on]:bg-A data-[state=on]:text-white bg-gray-a px-5 py-5 transition-colors duration-300 grow"
                    >
                      {travel.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Budget Select */}
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget per Person</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-gray-a p-5 w-full">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Budget Range</SelectLabel>
                    <SelectItem value="<5M">Below IDR 5,000,000</SelectItem>
                    <SelectItem value="5-10M">
                      IDR 5,000,000 - IDR 10,000,000
                    </SelectItem>
                    <SelectItem value="5-10M">
                      IDR 10,000,000 - IDR 15,000,000
                    </SelectItem>
                    <SelectItem value="10-20M">
                      IDR 10,000,000 - IDR 20,000,000
                    </SelectItem>
                    <SelectItem value=">20M">Above IDR 20,000,000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Preferred Travel Month Range */}
        <div className="flex flex-col gap-y-6 md:flex-row md:space-x-4">
          <FormField
            control={form.control}
            name="startMonth"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Preferred Travel Month</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-a p-5 w-full">
                      <SelectValue placeholder="Select start month" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endMonth"
            render={({ field }) => (
              <FormItem className="flex-1 mt-6 md:mt-0">
                <FormLabel className="md:invisible">End Month</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-a p-5 w-full">
                      <SelectValue placeholder="Select end month" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit */}
        <div className="w-full flex justify-end pt-4">
          <Button
            type="submit"
            size="lg"
            variant={"ghost"}
            className="hover:bg-A hover:text-white ease-in-out duration-300"
          >
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
