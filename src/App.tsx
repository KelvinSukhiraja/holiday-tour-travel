import { Route, Routes } from "react-router-dom";
import { BlogList } from "./components/BlogList";
import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
    </>
  );
};

export default App;
