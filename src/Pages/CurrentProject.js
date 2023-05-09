import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import CurrentProject from "../Components/CurrentProject";
import homeCafe from "../assests/homeCafe.png"
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <div>
            <Container>
                <div className="">
                    <div className="spacer"></div>
                    {/* <span>Current</span> */}
                    <h1>Home Cafe'</h1>
                </div>
                <Card border="dark" className="yellow card text-center">
                    <Card.Body>
                        <Card.Title>Trelo Board</Card.Title>
                        <Card.Text>
                            <Link rel="stylesheet" href="https://trello.com/invite/b/tP5Va2g1/ATTIfee2fc0e61caef0854ede8de548ad13bD3776D37/fullstack-cafe-app" > My Trello Board </Link>
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Img variant="top" src={homeCafe} /> */}
                    {/* <Card.Footer>
                        <small className="text-muted">GitHub Link</small>
                    </Card.Footer> */}
                </Card>

                <Card border="dark" className="yellow card text-center">
                    <Card.Body>
                        <Card.Title>Wireframe</Card.Title>
                        <Card.Text>
                            <Link rel="stylesheet" href="https://trello.com/invite/b/tP5Va2g1/ATTIfee2fc0e61caef0854ede8de548ad13bD3776D37/fullstack-cafe-app" > My Figma Wireframe </Link>
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Img variant="top" src={homeCafe} /> */}
                    {/* <Card.Footer>
                        <small className="text-muted">GitHub Link</small>
                    </Card.Footer> */}
                </Card>

                <Card border="dark" className="yellow card text-center">
                    <Card.Body>
                        <Card.Title>Home Cafe site</Card.Title>
                        <Card.Text>
                            I am currently working on a site called Home Cafe. This is a full-stack app that encourages lux cafe drinks in the comfort of your own home.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={homeCafe} />
                    <Card.Footer>
                        <small className="text-muted">GitHub Link</small>
                    </Card.Footer>
                </Card>

            </Container>
            <Footer />
        </div>
    );
}