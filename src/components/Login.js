import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function Login() {

    const idRef = useRef()

    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <Container className="align-items-center d-flex" style={{height: "100vh"}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button variant="secondary">Create A New Id</Button>
            </Form>
        </Container>
    )
}
