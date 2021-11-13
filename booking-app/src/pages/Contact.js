import React from "react"; //od wersji 17 Reacta już tego nie trzeba
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>How to contact us</p>
            <ContactForm />
        </div>
    );
}

export default Contact;