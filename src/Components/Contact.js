import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


export default function ContactForm() {
    return(
        <div>
           <Container>

           <h1 className="top">I would love to hear from you.</h1>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message Here..</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <button type="submit "className="left-margin main-button">Let's Connect</button>
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>

           </Container>
        </div>
    );
}