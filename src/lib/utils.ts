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

import asiaImg from "@/assets/INSPIRATION/ASIA.jpg";
import americaImg from "@/assets/INSPIRATION/AMERICA.jpg";
import antarticaImg from "@/assets/INSPIRATION/ANTARTICA.jpg";
import australiaImg from "@/assets/INSPIRATION/AUSTRALIA.jpg";
import europeImg from "@/assets/INSPIRATION/EUROPE.jpg";
import africaImg from "@/assets/INSPIRATION/AFRICA.jpg";

export const sections = [
  {
    id: "asia",
    name: "Asia",
    title: "Explore Asia",
    description:
      "Explore the rich cultures, diverse landscapes, and unforgettable experiences that Asia has to offer, from bustling cities to serene natural wonders.",
    image: asiaImg,
  },
  {
    id: "america",
    name: "America",
    title: "Explore America",
    description:
      "Explore the vast landscapes, diverse cultures, and incredible adventures that await across the Americas.",
    image: americaImg,
  },
  {
    id: "antarctica",
    name: "Antarctica",
    title: "Explore Antarctica",
    description:
      "Explore the icy wonders of Antarctica and witness the magical dance of the aurora lighting up the polar skies in a once-in-a-lifetime experience.",
    image: antarticaImg,
  },
  {
    id: "australia",
    name: "Australia",
    title: "Explore Australia",
    description:
      "Explore Australia's stunning coastlines, unique wildlife, and vibrant cities filled with adventure and natural beauty.",
    image: australiaImg,
  },
  {
    id: "europe",
    name: "Europe",
    title: "Explore Europe",
    description:
      "Explore the charm of Europe through its timeless cities, breathtaking landscapes, and unforgettable experiences.",
    image: europeImg,
  },
  {
    id: "africa",
    name: "Africa",
    title: "Explore Africa",
    description:
      "Explore Africa's vibrant cultures, stunning wildlife, and awe-inspiring landscapes that leave a lasting impression.",
    image: africaImg,
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

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const socials = [
  {
    label: "INSTAGRAM",
    link: "/",
  },
  {
    label: "FACEBOOK",
    link: "/",
  },
  {
    label: "LINKEDIN",
    link: "/",
  },
  {
    label: "YOUTUBE",
    link: "/",
  },
  {
    label: "TIKTOK",
    link: "/",
  },
];
