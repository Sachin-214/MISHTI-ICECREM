import React from "react";

const CONTACT_ITEMS = [
    {
        title: "Address",
        text: "Mishti Ice Cream, Sanawad Rd, Khargone, Madhya Pradesh 451001",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M12 2.5c-3.45 0-6.25 2.77-6.25 6.2 0 4.7 6.25 12.8 6.25 12.8s6.25-8.1 6.25-12.8c0-3.43-2.8-6.2-6.25-6.2zm0 8.7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                    fill="currentColor"
                />
            </svg>
        )
    },
    {
        title: "Phone",
        text: "+91 98765 43210",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M6.6 3.8c.35-.3.83-.37 1.25-.2l2.6 1.05c.44.18.74.6.78 1.06l.2 2.48c.04.5-.19.99-.61 1.27l-1.4.94c1.02 2.1 2.7 3.78 4.8 4.8l.94-1.4c.28-.42.77-.65 1.27-.61l2.48.2c.46.04.88.34 1.06.78l1.05 2.6c.17.42.1.9-.2 1.25l-1.3 1.55c-.32.38-.8.56-1.28.5-3.6-.45-6.88-2.1-9.4-4.62C6.3 13.32 4.65 10.04 4.2 6.44c-.06-.48.12-.96.5-1.28L6.6 3.8z"
                    fill="currentColor"
                />
            </svg>
        )
    },
    {
        title: "Email",
        text: "hello@mishtiicecream.com",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M4 5.5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm0 2.2v.2l8 4.8 8-4.8v-.2H4zm16 2.7-7.3 4.4a1.5 1.5 0 0 1-1.4 0L4 10.4V16a.8.8 0 0 0 .8.8h14.4a.8.8 0 0 0 .8-.8v-5.6z"
                    fill="currentColor"
                />
            </svg>
        )
    }
];

export default function ContactInfo() {
    return (
        <div className="contact-info-grid">
            {CONTACT_ITEMS.map((item) => (
                <div className="contact-card reveal" key={item.title}>
                    <div className="contact-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}
