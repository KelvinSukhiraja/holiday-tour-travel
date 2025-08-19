import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Travel Fair", href: "/travel-fair" },
  { label: "Contact Us", href: "/contact-us" },
];

export const sections = [
  {
    id: "asia",
    name: "Asia",
    title: "Explore Asia",
    description:
      "Explore the rich cultures, diverse landscapes, and unforgettable experiences that Asia has to offer, from bustling cities to serene natural wonders.",
    image: "/src/assets/INSPIRATION/ASIA.jpg",
  },
  {
    id: "america",
    name: "America",
    title: "Explore America",
    description:
      "Discover the vast landscapes, diverse cultures, and incredible adventures that await across the Americas.",
    image: "/src/assets/INSPIRATION/AMERICA.jpg",
  },
  {
    id: "antartica",
    name: "Antartica",
    title: "Explore Antartica",
    description:
      "Witness the magical dance of the aurora lighting up the polar skies in a once-in-a-lifetime experience.",
    image: "/src/assets/INSPIRATION/ANTARTICA.jpg",
  },
  {
    id: "australia",
    name: "Australia",
    title: "Explore Australia",
    description:
      "Australia's stunning coastlines, unique wildlife, and vibrant cities filled with adventure and natural beauty.",
    image: "/src/assets/INSPIRATION/AUSTRALIA.jpg",
  },
  {
    id: "europe",
    name: "Europe",
    title: "Explore Europe",
    description:
      "Discover the charm of Europe through its timeless cities, breathtaking landscapes, and unforgettable experiences.",
    image: "/src/assets/INSPIRATION/EUROPE.jpg",
  },
  {
    id: "africa",
    name: "Africa",
    title: "Explore Africa",
    description:
      "Explore Africa's vibrant cultures, stunning wildlife, and awe-inspiring landscapes that leave a lasting impression.",
    image: "/src/assets/INSPIRATION/AFRICA.jpg",
  },
];

export const travels_type = [
  {
    label: "Leisure",
    value: "Leisure",
  },
  {
    label: "Honeymoon",
    value: "Honeymoon",
  },
  {
    label: "Family Vacation",
    value: "Family",
  },
  {
    label: "Cultural",
    value: "Cultural",
  },
  {
    label: "Solo Travel",
    value: "Solo",
  },
  {
    label: "Adventure",
    value: "Adventure",
  },
  {
    label: "Business / MICE",
    value: "Business",
  },
  {
    label: "Cruise",
    value: "Cruise",
  },
  {
    label: "Religious / Pilgrimage",
    value: "Religious",
  },
];
