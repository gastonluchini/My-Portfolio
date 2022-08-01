
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {

    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <p>By Gastón Luchini. Web Developer</p>
                    </Col>

                    <Col sm={6} className='text-center text-sm-end'>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
