import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../image/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container className="">
                <Row className='footer-container'>
                    <Col xs={12} md={4}>
                        <div className="footer-items">
                        <div className="footer-item">
                           <img src={logo} alt="" /> 
                           <span> Insignia</span>
                           <p>Insignia Society, 234
                            Bahagia Ave Street 
                            PRBW 29281
                            </p>
                            <p>info@insignia.com
                                1-232-3434 (Main)</p>
                        </div>
                        
                        </div>
                        
                    
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="footer-items1">
                        <div className="footer-item1">
                                <p>About</p>
                                <p>Protfolio</p>
                                <p>Features</p>
                                <p>Carier</p>
                                <p>DW News</p>
                        </div>
                        <div className="footer-item1">
                                <p>Help</p>
                                <p>Support</p>
                                <p>SignUp</p>
                                <p>Guide</p>
                                <p>Reports</p>
                                <p>QBA</p>
                        </div>
                        </div>
                        </Col>
                        <Col xs={12} md={4}>
                        <div className="footer-logo">
                           <p>Social Media</p>
                           <span><i class="fab fa-facebook"></i></span>
                           <span><i class="fab fa-instagram"></i></span>
                           <span><i class="fab fa-twitter"></i></span>
                           
                           
                           
                        </div>
                        
                        
                    
                    </Col>
                </Row>
                </Container>
        </div>
    );
};

export default Footer;