import { Link } from "react-router-dom";
import { navItems } from "@/lib/utils";
import MobileMenu from "./ui/mobile-menu";

export function Navbar() {
  return (
    <header className="fixed w-full flex justify-between items-center py-6 px-8 md:px-32 z-40">
      <Link to="/" className="">
        <img src={"/LOGO.png"} className="w-36" loading="lazy" />
      </Link>
      <nav className="hidden md:flex items-center justify-around gap-20">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="third-text font-medium text-A "
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <MobileMenu />
    </header>
  );
}
