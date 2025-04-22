import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import About from "./Components/About";
import Mywork from "./Components/Mywork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Preloader from './Components/Preloader'; 
import './Preloader.css'; 

const App = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    return (
        <div style={{ position: 'relative', zIndex: 0 }}>
            <AnimatePresence>
                {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}
            </AnimatePresence>

            {!showPreloader && (
                <>
                    <Navbar />
                    <Hero1 />
                    <About />
                    <Mywork />
                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
