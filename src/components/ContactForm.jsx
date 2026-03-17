import React from "react";

export default function ContactForm() {
    return (
        <form className="contact-form-card" onSubmit={(event) => event.preventDefault()}>
            <div className="form-grid">
                <label className="form-field">
                    Full Name
                    <input type="text" name="fullName" placeholder="Your name" required />
                </label>
                <label className="form-field">
                    Email
                    <input type="email" name="email" placeholder="name@email.com" required />
                </label>
                <label className="form-field">
                    Phone
                    <input type="tel" name="phone" placeholder="+91 00000 00000" required />
                </label>
                <label className="form-field">
                    Subject
                    <input type="text" name="subject" placeholder="How can we help?" required />
                </label>
            </div>
            <label className="form-field full-width">
                Message
                <textarea name="message" rows="5" placeholder="Write your message" required></textarea>
            </label>
            <button type="submit" className="form-submit">
                Send Message
            </button>
        </form>
    );
}
