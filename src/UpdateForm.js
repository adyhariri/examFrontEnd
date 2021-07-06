import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Modal } from 'bootstrap';

export default class UpdateForm extends Component {
    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.hClose}
            <Modal.Header closeButton>
                <Modal.Title>update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' defaultValue={this.props.strDrink}/>
                    <Form.Label>url</Form.Label>
                    <Form.Control type="text" name='url' defaultValue={this.props.strDrinkThumb}/>
                </Form.Group>
                <Button type='submit' variant="primary">save</Button>
                </Form>
                </Modal.Body>
                </Modal>
            </>
        )
    }
}
