import React from 'react';

const ContactSection = () => (
  <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>sandeepmekala34@gmail.com</p>
          <p>9618149815</p>
          <a href="images/Next24tech.pdf" download className="btn btn2">
            <button>Download List<br />of items</button>
          </a>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Email" placeholder="Your Email" required />
            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
          </form>
        </div>
      </div>
    </div>
    <button type="submit" className="btn_btn2">Submit</button>
  </div>
);

export default ContactSection;
