// import Hero from "../Components/Hero";
// import Cards from "../Components/Cards";
// import Footer from "../Components/Footer";

// export default function Home() {
//     return (
//         <div className="home container">
//             <Hero />
//             {/* <div className="spacer"><h1>Featured Projects</h1></div> */}
//             <Cards />
//             <Footer />
//         </div>
//     );
// }

import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import CurrentProject from "../Components/CurrentProject";
import ContactForm from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div className="home container">
            <Hero />
            <div className="spacer"><h1>spacer</h1></div>
            <Cards />
             <div className="spacer"><h1>spacer</h1></div>
            <CurrentProject/>
             <div className="spacer"><h1>spacer</h1></div>
            <ContactForm/>
            <Footer />
        </div>
    );
}