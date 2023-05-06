import ContactForm from "../Components/Contact";
import { Container, Row, Col, Image} from 'react-bootstrap';
import backgroundimg from "../assests/backgroundimg3.jpeg"

import Footer from '../Components/Footer';
function About() {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                    <div className="spacer"></div>
                    <Image src={backgroundimg} />
                </Col>
                <Col>
                    <div className="spacer"></div>
                    <h1 className="text-center font-weight-light">Contact Me</h1>
                    <div className="spacer"></div>
                    <ContactForm/>
                </Col>
            </Row>
            </Container>
            <Footer />
        </div>

    );
}


export default About;
