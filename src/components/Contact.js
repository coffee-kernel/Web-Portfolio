import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your full name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <p>Or Email me @ joshuaquintanar17@gmail.com</p>
            </div>
        </section>
    );
};

export default Contact;