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

export function getNavItems(settings: { showTravelFair: boolean }) {
  return [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Inspiration", href: "/inspiration" },
    ...(settings.showTravelFair
      ? [{ label: "Travel Fair", href: "/travel-fair" }]
      : []),
    { label: "Contact Us", href: "/contact-us" },
  ];
}

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
    link: "https://www.instagram.com/holidaytour.id/",
  },
  {
    label: "WHATSAPP",
    link: "https://wa.me/6281882823299",
  },
];

import METRODATA from "@/assets/ABOUT-US/CLIENTS/METRODATA.png";
import DAMNINC from "@/assets/ABOUT-US/CLIENTS/DAMNINC.png";
import CITYNEON from "@/assets/ABOUT-US/CLIENTS/CITYNEON.png";
import MII from "@/assets/ABOUT-US/CLIENTS/MII.png";
import ICT from "@/assets/ABOUT-US/CLIENTS/ICT.png";
// import CITYNEON from "@/assets/CLIENT/CITYNEON.png";

export const clients = [
  {
    label: "PT Metrodata Electronics",
    image: METRODATA,
    summary:
      "PT. Metrodata Electronics Tbk, known as Metrodata Group, is the leading information communication technology (ICT) companies in Indonesia. ",
  },
  {
    label: "Damn Inc Indonesia",
    image: DAMNINC,
    summary:
      "DAMN! Inc's Vision is to build an Indonesian entertainment company that spans the Globe. ",
  },
  {
    label: "PT City Neon",
    image: CITYNEON,
    summary:
      "Founded in 1983, we area guided by the principles of excellence coupled with an unwavering commitment to deliver on our promises.",
  },
  {
    label: "MII",
    image: MII,
    summary:
      "PT. Mitra Integrasi Informatika (MII) didirikan pada tanggal 1 Maret 1996 sebagai anak perusahaan dari PT Metrodata Electronics, Tbk yang terdaftar secara publik. ",
  },
  {
    label: "X - Fusion",
    image: "",
    summary: "",
  },
  {
    label: "SMI",
    image: "",
    summary: "",
  },
  {
    label: "ICT",
    image: ICT,
    summary:
      " PT InfraCom Technology (ICT) was founded in 2006 with a very clear vision to be one of the best IT solution provider in Indonesia by ensuring our customers with the highest level of satisfaction.",
  },
  {
    label: "Panca In House",
    image: "",
    summary: "",
  },
];
