import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import image from '../image/security.png';

const About = () => {
    return (
        <div>
            <div className="about">
                <Container className="">
                <Row className='about-container'>
                    <Col xs={12} md={6}>
                    <div >
                        <img className="about-img" src={image} alt="" />
                    </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="about-items">
                            <div className="about-heading">
                             <h1>We are a high-level data storage bank</h1>
                            </div>
                            <div className="about-detail">
                                <p>The place to store various data that you can access at any time through the internet  and where you can carry it.<br/> 
                                This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;