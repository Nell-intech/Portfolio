// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import homeCafe from "../assests/homeCafe.png"



export default function CurrentProject() {
    return(
        <div>



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
        </div>
    );
}