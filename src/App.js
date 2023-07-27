import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutUs from "./components/Navigation/AboutUs";
import OurCurces from "./components/Navigation/OurCurces";
import Club from "./components/Navigation/Club";
import Contact from "./components/Navigation/Contact";
import Blog from "./components/Navigation/Blog";
import DetailsIscl from "./components/Navigation/Blog/IscI/DetailsIscl";
import DetailFront from "./components/Navigation/Blog/Front/DetailFront";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourCurces" element={<OurCurces />} />
          <Route path="/club" element={<Club />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detailsIscl" element={<DetailsIscl />} />
          <Route path="/detailfront" element={<DetailFront />} />
        </Routes>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
