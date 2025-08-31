import { navItems, socials } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="md:h-[60vh] bg-A flex flex-col text-white md:px-32 px-8 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-3 w-full h-full">
        {/* First Section */}
        <div className="flex flex-col gap-5 md:gap-10 h-fit">
          <img src={"/ICON.png"} className="w-20" loading="lazy" />
          <div>
            <span>Contact Us</span>
            <span>
              info@holidaytour.com <br />
              +62 8999 9999 99
            </span>
          </div>
        </div>
        {/* Second Section */}
        <div className="md:col-span-2 flex flex-col justify-between">
          {/* Second Top */}
          <div className="flex justify-between py-7">
            <nav className="first-text flex flex-wrap gap-5 md:gap-10 w-2/3 ">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-white grow"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a href="#">
              <ArrowUpRight className="stroke-1 hover:-rotate-45 the-hover the-transition cursor-pointer size-8" />
            </a>
          </div>
          {/* Second Bot */}
          <div className="third-text flex flex-col gap-3 py-5 third-text justify-between">
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
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col w-full gap-5 third-text">
        <Separator className="w-full h-px bg-white" />
        <span className="self-end">
          © 2025 HOLIDAYTOUR. All Rights Reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
