import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import UserProfile from "./components/UserProfile.jsx";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";
import CyberSecurity from "./pages/Analytics/CyberSecurity.jsx";
import Development from "./pages/Analytics/Development.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />}>
            <Route path="/analytics/development" element={<Development />} />
            <Route
              path="/analytics/cybersecurity"
              element={<CyberSecurity />}
            />
          </Route>
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
