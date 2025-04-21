import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import About from "./Components/About";
import Mywork from "./Components/Mywork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackgroundParticles from "./Components/BackgroundParticles";
// import CustomCursor from "./Components/CustomCursor";

const App = () => {
  return (

    <div style={{ position: 'relative', zIndex: 0 }}>
      <BackgroundParticles />
        {/* <CustomCursor /> */}
      <Navbar />
      <Hero1 />
      <About />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
