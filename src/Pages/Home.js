import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div className="home container">
            <Hero />
            {/* <div className="spacer"><h1>Featured Projects</h1></div> */}
            <Cards />
            <Footer />
        </div>
    );
}