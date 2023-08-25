import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurCurces from "./components/Navigation/OurCurces";
import Club from "./components/Navigation/Club";
import Contact from "./components/Navigation/Contact";
import Blog from "./components/Navigation/Blog";
import DetailFront from "./components/Navigation/Blog/Front/DetailFront";
import AboutUs from "./components/Navigation/AboutUs";
import CursDetail from "./Page/CursDetail";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<OurCurces />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/club" element={<Club />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail/:id" element={<DetailFront />} />
          <Route path="/curse/:id" element={<CursDetail />} />
        </Routes>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
