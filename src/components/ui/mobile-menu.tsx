import { Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { navItems } from "@/lib/utils";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-5 h-5 stroke-A" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="mt-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-4 w-full">Contact</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
