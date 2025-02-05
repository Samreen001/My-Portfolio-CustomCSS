import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <section id="contact-section" className={styles.contactPage}>
      <h1>Get in Touch</h1>
      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm}>
          <label>
            Your Name
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Your Email
            <input type="email" placeholder="Your Email" required />
          </label>
          <label>
            Your Message
            <textarea placeholder="Your Message" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
        <div className={styles.imageContainer}>
          <Image
            src="/contact-image.jpg" 
            alt="Contact"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
