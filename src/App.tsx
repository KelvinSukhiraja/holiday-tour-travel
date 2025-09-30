import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/About-Us";
import Inspiration from "./pages/Inspiration";
import TravelFair from "./pages/Travel-Fair";
import ContactUs from "./pages/Contact-Us";
import { BlogDetail } from "./pages/Inspiration/Blog/Detail";
import Blog from "./pages/Inspiration/Blog";
import { Layout } from "./pages/Layout";
import ScrollToTop from "./components/ScrollToTop";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useEffect, useState } from "react";
import { getSiteSettings } from "./lib/sanityClient";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const location = useLocation();

  const [settings, setSettings] = useState<{ showEventPage: boolean } | null>(
    null
  );

  console.log("settings", settings);

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  return (
    <>
      <ScrollToTop />
      {/* <AnimatePresence mode="wait"> */}
      <Routes location={location} key={location.pathname}>
        <Route
          element={<Layout theme="dark" settings={settings?.showEventPage} />}
        >
          <Route path="/" element={<Homepage />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/blogs/:region/:id" element={<BlogDetail />} />
        </Route>

        <Route
          element={<Layout theme="light" settings={settings?.showEventPage} />}
        >
          <Route path="/about-us" element={<AboutUs />} />
          {settings?.showEventPage && (
            <Route path="/travel-fair" element={<TravelFair />} />
          )}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs/:region" element={<Blog />} />
        </Route>
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
};

export default App;
