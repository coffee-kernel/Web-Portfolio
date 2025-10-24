import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import './App.css';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Coffee-Kernel</title>
            </Helmet>

            {/* Top navbars */}
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;