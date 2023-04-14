import ContactForm from "../Components/Contact";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "../Components/Footer";

export default function Contact() {
    return(
        <div className="container">
            <ContactForm/>
            <Footer />
        </div>
        
    );
}