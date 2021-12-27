import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import banner from '../image/banner.png'


const Banner = () => {
    return (
        <div>
            <Container>
            <Row className="banner">
                <Col xs={12} md={6}>
                    <div className="banner-items">
                      <div className="header-font">
                         <h1>Save your data storage here.</h1>
                      </div>
                      <div className="banner-summary">
                      <p>Insignia is a data storage area that has been
                         tested for security, so you can store your data here
                         safely but not be afraid of being stolen by others.</p>
                      </div>
                      <div className="btn-style">
                          <span>Learn more</span>
                      </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                    <img  className="banner-img" src={banner} alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;