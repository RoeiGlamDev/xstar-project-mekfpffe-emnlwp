import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'; // Importing necessary components from react-bootstrap

const ContactPage: React.FC = () => {
    return (
        <Container className="mt-5" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 className="text-center" style={{ color: '#ff69b4' }}>Contact Us</h1> {/* Pink color for the title */}
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>

                <Button variant="pink" type="submit" style={{ backgroundColor: '#ff69b4', border: 'none' }}>
                    Send Message
                </Button>
            </Form>
        </Container>
    );
};

export default ContactPage;