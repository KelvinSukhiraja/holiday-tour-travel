import { Route, Routes } from "react-router-dom";
import { BlogList } from "./components/BlogList";
import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/About-Us";
import Inspiration from "./pages/Inspiration";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
    </>
  );
};

export default App;
