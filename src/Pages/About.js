import {Container, Row, Col,Image,Button,Card } from 'react-bootstrap';
import flights from "../assests/flights.png"
import backgroundimg from "../assests/backgroundimg.jpeg"

function About() {
    return (
        <div>

            
                <Row >
                    <Col xs={12} md={8}>
                        <Image src={backgroundimg} fluid rounded/>
                    </Col>
                    <Col xs={6} md={4}>
                        <h1 className="font-weight-light">Tagline</h1>
                        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, repellat. 
                            Praesentium nemo expedita tenetur doloremque eius vitae nihil quae, iure ad dolore quod. 
                            Expedita voluptatem illum reprehenderit minus tempore quisquam?
                        </p>
                        {/* <Button variant="outline-primary">Call to action</Button> */}
                        <button className="main-button">Call to action</button>
                        <button>two</button>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Card>
                    <Card.Body>
                    Text for card body
                    </Card.Body>
                    </Card>
                </Row> 

                <Row className="text-center">
                    <Card>
                    <Card.Body>
                    Text for card body
                    </Card.Body>
                    </Card>
                </Row> 

            
        </div>

    );
}


export default About;