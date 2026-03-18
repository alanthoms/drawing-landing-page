import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Cats from "./components/Cats";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="*" element={<h1 className="py-10">Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
