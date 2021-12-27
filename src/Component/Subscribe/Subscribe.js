import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='sub-container'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="sub-content">
                            <h2>Subscibe !</h2>
                            <p>Join our newsletter to never miss any latest news.</p>
                        </div>

                    </Col>
                    <Col xs={12} md={6}>
                        <div className="sub-button">
                           <form action="">
                           <input type="text" placeholder="Enter your e-mail address here"></input>
                           <span>join us</span>
                           </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Subscribe;