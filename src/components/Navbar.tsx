// Navbar.tsx (Updated)
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "@/lib/utils";
import MobileMenu from "./ui/mobile-menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavItem } from "./NavItem";

export function Navbar({ theme }: { theme: "light" | "dark" }) {
  useGSAP(() => {
    gsap.from(".navItems", {
      opacity: 0,
      duration: 3,
      stagger: 0.2, // Optional: makes them appear one after another
    });
  });

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const themeText = theme === "light" ? "text-white-a" : "text-A";
  const themeBg = theme === "light" ? "bg-A" : "bg-white-a";
  const themeLogo = theme === "light" ? "/LOGO-WHITE.png" : "/LOGO.png";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (currentScrollY < heroHeight) {
        setShow(true);
        setScrolled(false);
      } else {
        if (currentScrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setScrolled(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full flex justify-between items-center py-6 px-8 md:px-32 z-40 transition-all duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? themeBg : "bg-transparent"}
      `}
    >
      <Link to="/" className="navItems">
        <img src={themeLogo} className="w-36" loading="lazy" />
      </Link>

      <nav className="hidden md:flex items-center justify-around gap-20">
        {/* 2. Replace the old Link with the new NavItem component */}
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            themeText={themeText}
          />
        ))}
      </nav>

      <MobileMenu theme={theme} />
    </header>
  );
}
