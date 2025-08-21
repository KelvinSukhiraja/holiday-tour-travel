import { navItems, socials } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="h-[80vh] bg-A flex flex-col text-white p-10">
      {/* Top Section */}
      <div className="flex justify-between bg-yellow-300 w-full">
        {/* First Section */}
        <div className="flex flex-col gap-2 bg-red-300">
          <img src={"/ICON.png"} className="w-24" loading="lazy" />
          <span>Contact Us</span>
          <span>
            info@holidaytour.com <br />
            +62 8999 9999 99
          </span>
        </div>
        {/* Second Section */}
        <div className="w-2/3 bg-green-200">
          <nav className="first-text w-full flex flex-wrap gap-8">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="w-fit text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="third-text flex flex-col gap-3 py-5">
            <span>Stay Connected</span>
            <ul className="flex flex-wrap space-x-8 space-y-3">
              {socials.map((social) => (
                <Link to={social.link} className="the-hover the-transition">
                  {social.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* Third Section */}
        <div className="bg-purple-300">
          <ArrowUpRight className="stroke-1 hover:-rotate-45 the-transition" />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col w-full gap-10">
        <Separator className="bg-white stroke-2 w-full h-[0.5px]" />
        <span>© 2025 HOLIDAYTOUR. All Rights Reserved</span>
      </div>
    </section>
  );
};

export default Footer;
