import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout({ theme }: { theme: "light" | "dark" }) {
  return (
    <>
      <Navbar theme={theme} />
      <Outlet />
    </>
  );
}
