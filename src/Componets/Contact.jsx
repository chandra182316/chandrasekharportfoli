import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_asuip4c',
      'template_2dirydc',
      form.current,
      '0pvCiosmI4RI1I7Zn'
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully ✅");
        e.target.reset(); // Clear the form after sending
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message ❌");
    });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contactTitle">Contact Me</h1>

      {/* Social Links Section */}
      <div className="socialLinks">
        <a href="https://www.linkedin.com/in/chandra182316" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/chandra182316" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.hackerrank.com/profile/chandra182316" target="_blank" rel="noopener noreferrer">HackerRank</a>
        <a href="https://leetcode.com/accounts/login/?next=" target="_blank" rel="noopener noreferrer">LeetCode</a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input type="text" placeholder="Your Name" name="user_name" required />
        <input type="email" placeholder="Your Email" name="user_email" required />
        <textarea placeholder="Your Message" name="message" rows="6" required />
        <button type="submit" className="submitBtn">Send</button>
      </form>
      
    </section>
  );
};

export default Contact;

