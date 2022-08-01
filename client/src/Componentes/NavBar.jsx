
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img3 from '../Assets/Img/in1.png';
import img4 from '../Assets/Img/git5.png';
import img5 from '../Assets/Img/tw.png';

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Competencias</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Proyectos</Nav.Link> 
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')} >Contacto</Nav.Link> 
                    </Nav>

                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/gast%C3%B3n-luchini/" target="_blank"><img src={img3} alt="1" /></a>
                            <a href="https://github.com/gastonluchini" target="_blank"><img src={img4} alt="2" /></a>
                            <a href="https://twitter.com/home?lang=es" target="_blank"><img src={img5} alt="3" /></a>
                        </div>

                        {/* <div to="mywork" smooth={true} className='gasuno'>
                            <button className='gasuno'>
                                <a className='gas' href={pdf} target="_blank" rel="noopener noreferrer" download="CV Gaston Luchini.pdf"> 
                                    CV 
                                </a>
                            </button>
                        </div> */}
                        
                        {/* <button className='vvd'><span>CV</span></button> */}
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;