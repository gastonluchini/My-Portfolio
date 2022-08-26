
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gas from '../Assets/Img/gas.png';
import pdf from '../Assets/Font/CV ultimo.pdf';

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ['Web Developer', 'Frontend'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        } 

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }

        else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Bienvenidos a mi Portfolio</span>
                        <h1>{'Hola, soy Gastón '}<span className='wrap'>{text}</span></h1>
                        <p>Me apasiona la lectura y el desarrollo personal. Trabajé más de 10 años en el área de Recursos Humanos, liderando equipos de más de 100 personas. Con la creación de un proyecto de recursos humanos, descubrí el apasionante mundo de la programación. Realicé un bootcamp en Henry de Full Stack Developer y fui seleccionado como Teaching Assistant para acompañar a los estudiantes en su proceso de aprendizaje. Me especializo en Frontend y React.</p>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={gas} alt="headder" />
                    </Col>
                </Row>

                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <button className='gasuno'>
                            <a className='gas' href={pdf} target="_blank" rel="noopener noreferrer" download="CV Gaston Luchini.pdf"> 
                                CV 
                            </a>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
