import { Route, Routes } from "react-router-dom";
import { BlogList } from "./components/BlogList";
import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/About-Us";
import Inspiration from "./pages/Inspiration";
import TravelFair from "./pages/Travel-Fair";
import ContactUs from "./pages/Contact-Us";
import Blog from "./pages/Inspiration/Blog";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/travel-fair" element={<TravelFair />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
