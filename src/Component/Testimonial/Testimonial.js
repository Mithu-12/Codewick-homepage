import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css'
import testi from '../image/testo.png'
import testi1 from '../image/testo1.png'

const Testimonial = () => {
    return (
        <div className="testimonial">
              <Container className="">
                <Row className='testimonial-container'>
                    <Col xs={12} md={6} >
                        <div className="testi-items">
                            <div className="testi-img">
                                <img src={testi} alt="" />
                            </div>
                            <div className="testi-details">
                                <h3>John Fang </h3>
                                <p>Suspendisse ultrices at diam lectus nullam. 
                                    Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                            </div>

                        </div>
                    </Col>
                    <Col xs={12}  md={6}>
                    <div className="testi-items">
                            <div className="testi-img">
                                <img src={testi1} alt="" />
                            </div>
                            <div className="testi-details">
                                <h3>John Fang </h3>
                                <p>Suspendisse ultrices at diam lectus nullam. 
                                    Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default Testimonial;