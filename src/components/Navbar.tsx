import { Link } from "react-router-dom";
import { navItems } from "@/lib/utils";
import MobileMenu from "./ui/mobile-menu";

export function Navbar() {
  return (
    <header className="absolute w-full flex justify-around items-center py-6">
      <Link to="/" className="">
        LOGO
      </Link>
      <nav className="hidden md:flex items-center justify-around gap-20">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-sm font-medium transition ease-in-out duration-700 text-A"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <MobileMenu />
    </header>
  );
}
