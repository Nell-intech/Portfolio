import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import recipeSite from "../assests/recipesite.png"
import studentList from "../assests/studentList.png"
import flights from "../assests/flights.png"

export default function Cards() {
  return (
    <>
    <CardGroup className="yellow">
      <Card>
        <Card.Img variant="top" src={recipeSite} />
        <Card.Body>
          <Card.Title>Recipe Site</Card.Title>
          <Card.Text>
            A Front-End recipe website for baker in mind!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={studentList} />
        <Card.Body>
          <Card.Title>Student List</Card.Title>
          <Card.Text>
            A Front-end react app that displays the list of students as well as their scores.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={flights} />
        <Card.Body>
          <Card.Title>Ausustus Airlines</Card.Title>
          <Card.Text>
            A Backend mongoose API that contains airline details.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
</>
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

