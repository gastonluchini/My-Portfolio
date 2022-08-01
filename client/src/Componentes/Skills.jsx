
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLogoHtml5, IoLogoSass, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3, DiGit } from "react-icons/di";
import { SiRedux, SiPostgresql } from "react-icons/si";

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>

                            <h2>Competencias</h2>

                            {/* <Carousel responsive={responsive} infinite={true} className='skill.slider'> */}
                                <div className='guille'>
                                <div className='item'>
                                    <h3>Teach Skills</h3>
                                    <IoLogoHtml5 className='icon'/>
                                    <DiCss3 className='icon'/>
                                    <IoLogoJavascript className='icon'/>
                                    <FaReact className='icon'/>
                                    <SiRedux className='icon'/>
                                    <IoLogoNodejs className='icon'/>
                                    <SiPostgresql className='icon'/>
                                    <DiGit className='icon'/>                                     
                                    <IoLogoSass className='icon'/>
                                </div>

                                <div className='item'>
                                    <h3>Soft Skills</h3>
                                    <h5>Metodologías ágiles</h5>
                                    <h5>GitHub Flow</h5>
                                    <h5>Comunicación</h5>
                                    <h5>Liderazgo</h5>
                                    <h5>Trabajo en equipo</h5>
                                    <h5>Gestión y Actitud positiva</h5>
                                </div>
                                </div>
                            {/* </Carousel> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
