import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { BlogList } from "./components/BlogList";
import { Navbar } from "./components/Navbar";

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
