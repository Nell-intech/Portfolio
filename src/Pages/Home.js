import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";


export default function Home() {
    return (
        <div>
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
}