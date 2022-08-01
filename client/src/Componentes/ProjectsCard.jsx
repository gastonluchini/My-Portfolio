
import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ProjectsCard = ({ title, description, imgUrl, link }) => {

    return (
        <Col sm={6} md={4} className='center'>
            <div className='card'>
                <span>
                    <img src={imgUrl} alt="img"/>
                </span>

                <span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </span>

                <Button href={link} target="_blank">Web</Button>
            </div>
        </Col>
    );
}

export default ProjectsCard;
