import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// Assests 
import recipeSite from "../assests/recipesite.png"
import studentList from "../assests/studentList.png"
import homeCafe from "../assests/homeCafe.png"
import flights from "../assests/flights.png"

export default function Projects() {
  return (
    <div>

      <div className="contains">
        <div className="spacer"></div>
        <span>Portfolio</span>
        <h1>My Portfolio projects</h1>
      </div>


      <CardGroup>
        <Card>
            <Card.Img variant="top" src={recipeSite} />
        </Card>

        <Card className="cardContainer">
          <Card.Body className="cardBody">
            <Card.Title>Front-end Recipe Site</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis fugiat natus minima dolores earum,
              dignissimos cumque eaque, nobis ipsam doloremque sit inventore praesentium ad, voluptates in pariatur mollitia nam?
            </Card.Text>
            <Card.Text>
              React Bootstrap
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">CODE  DEMO</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
            <Card.Img variant="top" src={studentList} />
        </Card>

        <Card className="cardContainer">
          <Card.Body className="cardBody">
            <Card.Title>Student List Front-end React</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis fugiat natus minima dolores earum,
              dignissimos cumque eaque, nobis ipsam doloremque sit inventore praesentium ad, voluptates in pariatur mollitia nam?
            </Card.Text>
            <Card.Text>
              React Bootstrap
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">CODE  DEMO</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
            <Card.Img variant="top" src={flights} />
        </Card>

        <Card className="cardContainer">
          <Card.Body className="cardBody">
            <Card.Title>Augustus Airlines React</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis fugiat natus minima dolores earum,
              dignissimos cumque eaque, nobis ipsam doloremque sit inventore praesentium ad, voluptates in pariatur mollitia nam?
            </Card.Text>
            <Card.Text>
              React Bootstrap
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">CODE  DEMO</small>
          </Card.Footer>
        </Card>
      </CardGroup>


      <div className="">
        <div className="spacer"></div>
        <span>Current</span>
        <h1>I am currently working on....</h1>
      </div>

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

{/* <Card>
<Card.Img variant="top" src={  } />
<Card.Body>
  <Card.Title> {   } </Card.Title>
  <Card.Text>  {   }  </Card.Text>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card> */}

