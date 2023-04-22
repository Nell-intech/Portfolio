import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";


export default function Home() {
    return (
        <div className="home container">
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
}