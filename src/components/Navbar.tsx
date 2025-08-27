import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "@/lib/utils";
import MobileMenu from "./ui/mobile-menu";

export function Navbar({ theme }: { theme: "light" | "dark" }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const themeText = theme === "light" ? "text-white-a" : "text-A";
  const themeBg = theme === "light" ? "bg-A" : "bg-white-a";
  const themeLogo = theme === "light" ? "/LOGO-WHITE.png" : "/LOGO.png";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // 100% viewport height

      if (currentScrollY < heroHeight) {
        // Inside hero → always visible, transparent
        setShow(true);
        setScrolled(false);
      } else {
        // After hero → enable scroll-based behavior
        if (currentScrollY > lastScrollY) {
          setShow(false); // scrolling down → hide
        } else {
          setShow(true); // scrolling up → show
        }
        setScrolled(true); // background after hero
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`absolute w-full flex justify-between items-center py-6 px-8 md:px-32 z-40 transition-all duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? themeBg : "bg-transparent"}
      `}
    >
      <Link to="/" className="">
        <img src={themeLogo} className="w-36" loading="lazy" />
      </Link>

      <nav className="hidden md:flex items-center justify-around gap-20">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`fourth-text font-medium ${themeText}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <MobileMenu theme={theme} />
    </header>
  );
}
