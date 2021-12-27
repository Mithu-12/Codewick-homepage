import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css'
import clip1 from '../image/clip1.png'
import clip2 from '../image/clip2.png'
import clip3 from '../image/clip3.png'

const Features = () => {
    return (
        <div className="features-container">
                <div className='features-details'>
                    <div className="box">
                       <div className="box-shadow">
                                <img src={clip1} alt="" />
                        </div>
                        <div className="box-details">
                            <h2>Search Data</h2>
                            <p>Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        </div>
                        <div className="box-button">
                            <span>Learn more <i class="fas fa-arrow-right"></i></span>
                        </div>

                        </div>
                    
                        <div className="box">
                       <div className="box-shadow">
                                <img src={clip2} alt="" />
                        </div>
                        <div className="box-details">
                            <h2>Search Data</h2>
                            <p>Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        </div>
                        <div className="box-button">
                            <span>Learn more <i class="fas fa-arrow-right"></i></span>
                        </div>

                        </div>
                        <div className="box">
                       <div className="box-shadow">
                                <img src={clip3} alt="" />
                        </div>
                        <div className="box-details">
                            <h2>Search Data</h2>
                            <p>Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        </div>
                        <div className="box-button">
                            <span>Learn more <i class="fas fa-arrow-right"></i></span>
                        </div>

                        </div> 
                    </div>
                </div>
    );
};

export default Features;