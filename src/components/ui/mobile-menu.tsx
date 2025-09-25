import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { navItems, socials } from "@/lib/utils";
import { Link } from "react-router-dom";

const MobileMenu = ({ theme }: { theme: "light" | "dark" }) => {
  const [open, setOpen] = useState(false);
  const themeIcon = theme === "light" ? "stroke-white" : "stroke-A";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu
          className={`w-5 h-5 ${themeIcon} cursor-pointer the-hover the-transition `}
        />
      </SheetTrigger>
      <SheetContent side="full">
        <div
          className="grid md:grid-cols-2 bg-A max-h-screen"
          onClick={() => setOpen(false)}
        >
          <img
            src={new URL("/src/assets/MENU/1.jpg", import.meta.url).href}
            className="hidden md:flex max-h-screen w-full object-cover object-center"
            loading="lazy"
          />
          <div className="text-white flex flex-col justify-around md:justify-between p-20 h-screen">
            <nav className="first-text w-full flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="w-fit the-hover the-transition"
                  onClick={() => setOpen(false)} // 👈 close after click
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="third-text flex flex-col gap-3 py-5">
              <span>Stay Connected</span>
              <ul className="flex flex-wrap space-x-8 space-y-3">
                {socials.map((social) => (
                  <Link
                    key={social.link}
                    to={social.link}
                    target="_blank"
                    className="the-hover the-transition"
                    onClick={() => setOpen(false)} // 👈 close after click
                  >
                    {social.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
