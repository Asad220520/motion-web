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
import KursFront from "./Page/FrontDetal";
import DetailFront from "./components/Navigation/Blog/Front/DetailFront";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/aboutUs" element={<HomePage />} />
          <Route path="/mn" element={<AboutUs />} />
          <Route path="/" element={<OurCurces />} />
          <Route path="/club" element={<Club />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detailsIscl/:id" element={<DetailFront />} />
          <Route path="/front/:id" element={<KursFront />} />
        </Routes>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
