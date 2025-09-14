import { useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // 1. Import useLocation
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface NavItemProps {
  href: string;
  label: string;
  themeText: string;
}

export function NavItem({ href, label, themeText }: NavItemProps) {
  const underlineRef = useRef<HTMLSpanElement>(null);
  const location = useLocation(); // 2. Get the current location
  const isActive = location.pathname === href; // 3. Check if this link is active

  // Set the initial state of the underline based on whether the page is active
  useGSAP(() => {
    gsap.set(underlineRef.current, { scaleX: isActive ? 1 : 0 });
  }, [isActive]);

  const handleMouseEnter = () => {
    gsap.to(underlineRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // 4. Only animate out if the link is NOT active
    if (!isActive) {
      gsap.to(underlineRef.current, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <Link
      to={href}
      className={`relative fourth-text font-medium ${themeText} navItems`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
      <span
        ref={underlineRef}
        // We remove scale-x-0 here because GSAP now sets the initial state
        className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-current origin-left"
      />
    </Link>
  );
}
