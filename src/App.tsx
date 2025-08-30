import { Route, Routes } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/About-Us";
import Inspiration from "./pages/Inspiration";
import TravelFair from "./pages/Travel-Fair";
import ContactUs from "./pages/Contact-Us";
import { BlogDetail } from "./pages/Inspiration/Blog/Detail";
import Blog from "./pages/Inspiration/Blog";
import { Layout } from "./pages/Layout";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
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
    </>
  );
};

export default App;
