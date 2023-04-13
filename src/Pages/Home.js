import Hero from "../Components/Hero";
import Button from 'react-bootstrap/Button';

export default function Home() {
    return(
        <div className="home">
            <Hero />
            <h1>This is the HOME PAGE BODY</h1>
            <Button aria-controls="example-collapse-text">click</Button>
        </div>
    );
}