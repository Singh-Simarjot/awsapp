import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/gloassary.scss'
class Gloassary extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <section className="position-relative">
                <div className="slide-right-nav">
                    <ul>
                        <li className="active">
                            <Link>A</Link>
                        </li>
                        <li>
                            <Link>B</Link>
                        </li>
                        <li>
                            <Link>C</Link>
                        </li>
                    </ul>
                </div>
                <Col lg={12}>
                    <Row>
                        <Col lg={9}>
                            <p className="mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className="block-text">
                                <h2>Lorem Ipsum</h2>
                                <h6>add</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                                    leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <h6>add</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                                    leap into electronic typesetting, remaining essentially <Link>unchanged</Link>.
                                </p>
                            </div>
                            <div className="block-text">
                                <h2>CC</h2>
                                <h6>add</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                                    leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <h6>add</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has <Link>survived</Link> not only five centuries, but also the 
                                    leap into electronic typesetting, remaining essentially <Link>unchanged</Link>.
                                </p>
                            </div>
                            <div className="block-text">
                                <h2>DD</h2>
                                <h6>adn</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                                    leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <h6>add</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has <Link>survived</Link> not only five centuries, but also the 
                                    leap into electronic typesetting, remaining essentially <Link>unchanged</Link>.
                                </p>
                                <h6>add</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has <Link>survived</Link> not only five centuries, but also the 
                                    leap into electronic typesetting, remaining essentially <Link>unchanged</Link>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </section>
        </React.Fragment> );
    }
}
 
export default Gloassary;
