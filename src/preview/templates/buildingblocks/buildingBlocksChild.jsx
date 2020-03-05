import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
class BlocksChild extends Component {
    state = {  }
    render() { 
        // const { data } = this.props;
        // console.log(data)
        return ( 
            <React.Fragment>
                {this.props.imgvalue.map(item =>
                    <Col xs={12} md={6} lg={3}    className="p-0" key={item.id}>
                        <div className="grid-container d-flex  p-3">
                            <h6 className="position-absolute">{item.title}</h6>
                            <img src={item.imageUrl}/>
                        </div>
                    </Col>
                )}
            </React.Fragment>
         );
    }
}
 
export default BlocksChild;