import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

export default class Item extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="this.props.strDrinkThumb" alt={this.props.strDrink} />
                    <Card.Body>
                        <Card.Title>{this.props.strDrink}</Card.Title>
                        <Button variant="primary" onClick={()=>this.props.addFav(this.props.idx)}>Add to favorite list</Button>
                    </Card.Body>

                </Card>
            </>
        )
    }
}
