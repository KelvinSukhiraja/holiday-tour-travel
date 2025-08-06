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
