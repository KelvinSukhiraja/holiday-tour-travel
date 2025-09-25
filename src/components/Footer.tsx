import { navItems, socials } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for all footer animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", // Start animation when the footer is 85% from the top of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
        defaults: {
          ease: "power2.out",
          opacity: 0,
        },
      });

      // Animate the logo and contact info
      tl.from("#footer-logo", { y: 20, duration: 0.6 });
      tl.from(
        "#contact-info span",
        { y: 10, stagger: 0.1, duration: 0.5 },
        "<0.2"
      );

      // Animate the navigation links with a stagger
      tl.from("#nav-links a", { y: 20, stagger: 0.1, duration: 0.6 }, "<0.3");

      // Animate the 'Stay Connected' text
      tl.from("#stay-connected-text", { y: 10, duration: 0.5 }, "<0.2");

      // Animate the socials links with a stagger
      tl.from("#socials-list", { y: 10, stagger: 0.1, duration: 0.5 }, "<0.1");

      // Animate the separator and copyright text
      tl.from(
        "#footer-separator",
        { scaleX: 0, transformOrigin: "left", duration: 0.8 },
        "<0.5"
      );
      tl.from("#copyright", { y: 10, duration: 0.6 }, "<0.2");
    },
    { scope: footerRef }
  );

  return (
    <section
      ref={footerRef}
      className="h-screen bg-A flex flex-col text-white md:px-32 px-8 md:py-16 py-8"
    >
      {/* Top Section */}
      <div className="grid md:grid-cols-3 w-full h-full md:pt-10">
        {/* First Section */}
        <div id="first-section" className="flex flex-col gap-5 md:gap-10 h-fit">
          <img
            id="footer-logo"
            src={"/ICON.png"}
            className="w-20"
            loading="lazy"
          />
          <div id="contact-info" className="fourth-text flex flex-col gap-3">
            <p className="block">Contact Us</p>
            <p className="block">
              info@holidaytour.com <br />
              +62 8999 9999 99
            </p>
          </div>
        </div>
        {/* Second Section */}
        <div id="second-section" className="md:col-span-2 flex flex-col">
          {/* Second Top */}
          <div className="flex justify-between ">
            <nav
              id="nav-links"
              className="first-text flex flex-wrap gap-5 md:gap-14 w-2/3"
            >
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
          <div className="third-text flex flex-col gap-5 md:py-5 third-text justify-end h-full">
            <span id="stay-connected-text">Stay Connected</span>
            <ul
              id="socials-list"
              className="flex flex-wrap space-x-8 space-y-3"
            >
              {socials.map((social) => (
                <Link
                  key={social.label}
                  to={social.link}
                  target="_blank"
                  className="the-transition"
                >
                  {social.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col w-full gap-5 fourth-text">
        <Separator id="footer-separator" className="w-full h-px bg-white" />
        <span id="copyright" className="self-end">
          © 2025 HOLIDAYTOUR. All Rights Reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
