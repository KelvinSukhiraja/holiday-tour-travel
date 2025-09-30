import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout({
  theme,
  settings,
}: {
  theme: "light" | "dark";
  settings: boolean | undefined;
}) {
  return (
    <>
      <Navbar theme={theme} settings={settings} />
      <Outlet />
      <Footer settings={settings} />
    </>
  );
}
