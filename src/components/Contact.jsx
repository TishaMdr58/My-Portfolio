import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.message) newErrors.message = 'Message is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setMessageSent(true);
    }
  };

  return (
    <div id="contact" className="mainContact">
      <div className="subContact">
        <div className="left">
          <h1>Let’s talk on something great together</h1>
          <div className="iconsAndText">
            <div className="emailContact">
              <div className="text1">📧 mdrtisha@gmail.com</div>
            </div>
            <div className="phone">
              <div className="text2">📞 9840300970</div>
            </div>
            <div className="location">
              <div className="text3">📍 Lalitpur</div>
            </div>
          </div>
        </div>

        <div className="right">
          {!messageSent ? (
            <form className="form">
              <label>Your name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}

              <label>Your email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}

              <label>Your message</label>
              <textarea
                name="message"
                value={data.message}
                onChange={handleInputChange}
                cols="30"
                rows="10"
              ></textarea>
              {errors.message && <div className="error">{errors.message}</div>}

              <div className="btn" onClick={handleButtonClick}>
                Send Message
              </div>
            </form>
          ) : (
            <p className="thankYou">Thank you! Your message has been sent.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
