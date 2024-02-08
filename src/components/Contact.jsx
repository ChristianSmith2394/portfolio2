import React from "react";
import ContactItem from "./ContactItem.jsx";
import phone from "../assets/phone.svg";
import email from "../assets/emailme.svg";
import location from "../assets/location.svg";
import Title from "./Title.jsx";
import "../styles/contact.css";

function Contact() {
  return (
    <div>
      <div className="title">
        {/* <Title title={"Contact Me"} /> */}
      </div>
      <div className="contact">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24685.490313746144!2d-74.5000455461547!3d39.34069258828403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0c2d67d7f1a7b%3A0x617b4e170c6d5854!2sVentnor%20City%2C%20NJ%2C%20USA!5e0!3m2!1sen!2suk!4v1652137379881!5m2!1sen!2suk"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"+1 609-224-7221"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"christiansmith2394@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Ventnor City, New Jersey"}
            text2={"United States"}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
