import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "@/lib/utils";
import MobileMenu from "./ui/mobile-menu";

export function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full flex justify-between items-center py-6 px-8 md:px-32 z-40 backdrop-blur-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link to="/" className="">
        <img src={"/LOGO.png"} className="w-36" loading="lazy" />
      </Link>

      <nav className="hidden md:flex items-center justify-around gap-20">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="fourth-text font-medium text-A"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <MobileMenu />
    </header>
  );
}
