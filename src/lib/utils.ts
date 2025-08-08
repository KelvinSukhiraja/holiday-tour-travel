import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Travel Fair", href: "/travel-fair" },
  { label: "Contact Us", href: "/contact-us" },
];

export const sections = [
  {
    id: "asia",
    text: "Explore Asia",
    description:
      "Explore the rich cultures, diverse landscapes, and unforgettable experiences that Asia has to offer, from bustling cities to serene natural wonders.",
    image: "/src/assets/INSPIRATION/ASIA.jpg",
  },
  {
    id: "america",
    text: "Explore America",
    description:
      "Discover the vast landscapes, diverse cultures, and incredible adventures that await across the Americas.",
    image: "/src/assets/INSPIRATION/AMERICA.jpg",
  },
  {
    id: "antartica",
    text: "Explore Antartica",
    description:
      "Witness the magical dance of the aurora lighting up the polar skies in a once-in-a-lifetime experience.",
    image: "/src/assets/INSPIRATION/ANTARTICA.jpg",
  },
  {
    id: "australia",
    text: "Explore Australia",
    description:
      "Australia's stunning coastlines, unique wildlife, and vibrant cities filled with adventure and natural beauty.",
    image: "/src/assets/INSPIRATION/AUSTRALIA.jpg",
  },
  {
    id: "europe",
    text: "Explore Europe",
    description:
      "Discover the charm of Europe through its timeless cities, breathtaking landscapes, and unforgettable experiences.",
    image: "/src/assets/INSPIRATION/EUROPE.jpg",
  },
  {
    id: "africa",
    text: "Explore Africa",
    description:
      "Explore Africa's vibrant cultures, stunning wildlife, and awe-inspiring landscapes that leave a lasting impression.",
    image: "/src/assets/INSPIRATION/AFRICA.jpg",
  },
];
