import ContactForm from "../Components/Contact";
import Footer from "../Components/Footer";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
    return (
        <div className="contains">
            <Row>
                <Col xs={6}>xs=6</Col>
                <Col xs={6}> <ContactForm /> </Col>
            </Row>
            <Footer />
        </div>

    );
}

