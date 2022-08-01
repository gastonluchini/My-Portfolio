
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectsCard from './ProjectsCard';
import projImg1 from '../Assets/Img/pika1.webp';
import projImg2 from '../Assets/Img/monje1.jpg';
import "react-multi-carousel/lib/styles.css";

const Projects = () => {

    const projects = [
        {
            title: 'Pokemons App',
            description: 'Proyecto Individual Henry Bootcamps',
            imgUrl: projImg1,
            link: 'https://pi-pokemon-orpin.vercel.app' 
        },
        {
            title: 'Grow-Up Ecommerce de Libros',
            description: 'Proyecto Grupal Henry Bootcamps',
            imgUrl: projImg2, 
            link: 'https://e-commerce-books.vercel.app/home/' 
        },
    ];

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <Row>
                            {
                                projects?.map((project, index) => {
                                    return (
                                        
                                            <ProjectsCard
                                                key={index}
                                                {...project}
                                            />
                                                   
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
