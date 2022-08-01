
import React from 'react'; 
import NavBar from './Componentes/NavBar';
import Banner from './Componentes/Banner';
import Skills from './Componentes/Skills';
import Projects from './Componentes/Projects';
import Contact from './Componentes/Contact';
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App () {

    return (
        <div className='App'>
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
