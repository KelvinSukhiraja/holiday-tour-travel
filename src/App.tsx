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
import { useAssetLoader } from "./hooks/useAssetLoader";
import { useState } from "react";
import { Loader } from "./components/Loader";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const location = useLocation();

  // 1. List all the critical assets you want to preload
  const criticalAssets = [
    // HOME
    "/assets/HOME/background.mp4",

    // INSPIRATION/BLOG
    "/assets/INSPIRATION/BLOG/AFRICA.jpg",
    "/assets/INSPIRATION/BLOG/AMERICA.jpg",
    "/assets/INSPIRATION/BLOG/ANTARTICA.jpg",
    "/assets/INSPIRATION/BLOG/ASIA.jpg",
    "/assets/INSPIRATION/BLOG/AUSTRALIA.jpg",
    "/assets/INSPIRATION/BLOG/EUROPE.jpg",

    // ABOUT-US
    "/assets/ABOUT-US/CLIENTS/1.jpg",
    "/assets/ABOUT-US/CLIENTS/2.jpg",

    // CONTACT-US
    "/assets/CONTACT-US/1.jpg",
    "/assets/CONTACT-US/2.jpg",

    // MENU
    "/assets/MENU/1.jpg",

    // TRAVEL-FAIR
    "/assets/TRAVEL-FAIR/1.jpg",
    "/assets/TRAVEL-FAIR/2.jpg",
  ];

  const { isLoaded } = useAssetLoader(criticalAssets);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  if (isLoaded && !isLoaderVisible) {
    return (
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout theme="dark" />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/blogs/:region/:id" element={<BlogDetail />} />
        </Route>

        <Route element={<Layout theme="light" />}>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/travel-fair" element={<TravelFair />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs/:region" element={<Blog />} />
        </Route>
      </Routes>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Loader onComplete={() => setIsLoaderVisible(false)} />
    </>
  );
};

export default App;
