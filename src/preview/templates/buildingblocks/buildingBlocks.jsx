import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import BlocksChild from './buildingBlocksChild'
import './css/block.scss'
class BuildingBlock extends Component {
    state = { 
        listimg:[
            { 
                id: 1, 
                imageUrl: require("./images/accordion.png"),
                title: 'Accordion' 
            },
            { 
                id: 2, 
                imageUrl: require("./images/bradcrumbs.png"),
                title: 'Breadcrumbs' 
            },
            { 
                id: 3, 
                imageUrl: require("./images/button.png"),
                title: 'Button' 
            },
            { 
                id: 4, 
                imageUrl: require("./images/checkbox.png"),
                title: 'Checkbox' 
            },
            { 
                id: 5, 
                imageUrl: require("./images/codesnipet.png"),
                title: 'Code Snippet' 
            },
            { 
                id: 6, 
                imageUrl: require("./images/contentswitch.png"),
                title: 'Content Switcher' 
            },
            { 
                id: 7, 
                imageUrl: require("./images/datatable.png"),
                title: 'Data table' 
            },
            { 
                id: 8, 
                imageUrl: require("./images/datepicker.png"),
                title: 'Date picker' 
            },
            { 
                id: 9, 
                imageUrl: require("./images/dropdown.png"),
                title: 'Dropdown' 
            },
            { 
                id: 10, 
                imageUrl: require("./images/uploader.png"),
                title: 'File Uploader' 
            },
            { 
                id: 11, 
                imageUrl: require("./images/form.png"),
                title: 'Form' 
            },
            { 
                id: 12, 
                imageUrl: require("./images/loading.png"),
                title: 'Inline Loading' 
            },
        ]
     }
    render() { 
        return ( 
            <React.Fragment>
                <section>
                    <Col lg={12}>
                        <Row>
                            <Col lg={8}>
                                <h3 className="mb-3">Building blocks</h3>
                                <p className="mb-3">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                                    the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </Col>
                        </Row>
                        <Col lg={12} className="grid-block-main">
                            <Row>
                                <BlocksChild imgvalue = {this.state.listimg}/>
                            </Row>
                        </Col>
                    </Col>
                </section>
            </React.Fragment>
         );
    }
}
 
export default BuildingBlock;