import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurCurces from "./components/Navigation/OurCurces";
import Club from "./components/Navigation/Club";
import Contact from "./components/Navigation/Contact";
import Blog from "./components/Navigation/Blog";
import KursFront from "./Page/FrontDetal";
import DetailFront from "./components/Navigation/Blog/Front/DetailFront";
import { useSelector } from "react-redux";
import DisainDetal from "./Page/DisainDetal"
import BekenDetal from "./Page/BekenDetal"
import AboutUs from "./components/Navigation/AboutUs";
function App() {
  const { ten } = useSelector((s) => s);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div
          style={{
            position: "absolute",
            top: "0",
            zIndex: "3",
            width: "100%",
            height: "713vh",
            display: ten ? "block" : "none",
            background: "rgba(0,0 , 0, 0.80)",
            backdropFilter: "blur(3px)",
          }}
        >
          {" "}
        </div>
        <Routes>
          <Route path="/" element={<OurCurces />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/club" element={<Club />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detailsIscl/:id" element={<DetailFront />} />
          <Route path="/front/:id" element={<KursFront />} />
          <Route path="/disain" element={<KursFront />} />
          <Route path="/bekend" element={<BekenDetal />} />
          <Route path="/frontt" element={<DisainDetal />} />
          
        </Routes>
      </div>
      <Contact />
      <Footer />
    </div>  
  );
}

export default App;
