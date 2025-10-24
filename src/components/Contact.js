import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // New import
import { FaCheck, FaExclamationTriangle } from "react-icons/fa"; // Optional: For success/error icons (install react-icons if needed: npm i react-icons)

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For success/error messages
  const [loading, setLoading] = useState(false);

  // Environment variables for security
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your full name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <div className="success-msg">
            <FaCheck /> Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="error-msg">
            <FaExclamationTriangle /> Oops! Something went wrong. Try again or email me directly.
          </div>
        )}

        <p>Or Email me @ <a href="mailto:joshuaquintanar17@gmail.com">joshuaquintanar17@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Contact;