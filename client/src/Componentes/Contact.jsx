
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import email from '../Assets/Img/email.png';

const Contact = () => {
    
    const formInitialDetails = {
        firstName: '',
        lastName: '', 
        email: '',
        phone: '', 
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando ...');
        let response = await fetch('https://myportfoliogaston.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'content-Type': 'Application/json;charset=utf-8', 
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText('Enviar');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: false, message: 'Algo salio mal, por favor intente nuevamente' });

        } else {
            setStatus({ success: true, message: 'Mensaje enviado satisfactoriamente' });
        }
    }

    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='uno'>
                        <img src={email} alt="form" />
                    </Col>

                    <Col md={6} className='dos'>
                        
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <h2>Contacto</h2>
                                    <input className='input' type="text" value={formDetails.firstName} placeholder='Nombre' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    <input type="text" value={formDetails.lastName} placeholder='Apellido' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    <input type="email" value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    <input type="tel" value={formDetails.phone} placeholder='Tel' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    <textarea row='6' value={formDetails.message} placeholder='Mensaje' onChange={(e) => onFormUpdate('message', e.target.value)} />             
                                    <Button className='bot' variant="secondary" size="lg" type='submit'>
                                        <span>{buttonText}</span>
                                    </Button>                          
                                </Col>

                                {
                                    status.message && 
                                    <Row>
                                        <Col>
                                            <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                        </Col>    
                                    </Row>                                 
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
