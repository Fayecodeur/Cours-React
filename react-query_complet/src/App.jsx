import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Authors from "./pages/Authors.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
