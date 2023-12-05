"use client";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Notas() {
  return (
    <Container className="mt-5">
      <Row>
        <h1>Informe seus dados e suas notas avaliativas </h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Informe seu nome" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>RGM</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nota 1</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nota 2</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="button" className="mt-2">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
