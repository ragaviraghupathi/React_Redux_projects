import React from 'react';
import { Row, Col } from 'react-bootstrap';

class SubTotal extends React.Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={6}>Subtotal</Col>
                <Col md={6}>{`$${this.props.price}`}</Col>
            </Row>
        );
    }

}
export default SubTotal;