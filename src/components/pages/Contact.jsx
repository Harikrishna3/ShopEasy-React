import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_title: "Contact Us",
      page_path: "/contactUs",
      page_location: window.location.href
    })
  }, [location]);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center' }}>We are delighted to assist you! If you have any questions, concerns, or feedback, please don't hesitate to get in touch with us. Our dedicated customer support team is here to provide you with the best possible assistance.</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Customer Support:</h2>

      <p style={{ textAlign: 'center' }}>Email: <a href="mailto:support@ShopEasy.com">support@ShopEasy.com</a><br />
        Phone: +91 (XXX) XXX-XXXX</p>


      <h2 style={{ textAlign: 'center' }}>Business Hours:</h2>

      <p style={{ textAlign: "center" }}>Monday to Friday: 9:00 AM - 6:00 PM (EST)<br />
        Saturday and Sunday: Closed</p>

      <div>
        <p style={{ textAlign: 'center' }}>We value your time and aim to respond to all inquiries within 24 hours during our business hours.</p>
        <h2 style={{ textAlign: 'center' }}>Address:</h2>
      </div>

      <p style={{ textAlign: 'center' }}>ShopEasy<br />
        1234 Main Street,<br />
        City, State ZIP Code,<br />
        Country</p>


      <div>
        <h2 style={{ textAlign: 'center' }}>Have a Question?</h2>
        <p style={{ textAlign: 'center' }}>Please fill out the form below, and we'll get back to you as soon as possible:</p>
      </div>

      <form style={{ margin: '0 auto', maxWidth: 400 }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" style={{ width: '100%', padding: 10, marginBottom: 20 }} defaultValue={""} />
        <input type="submit" defaultValue="Submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 4, cursor: 'pointer' }} />
      </form>


      <div>
        <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions (FAQs):</h2>
        <p style={{ textAlign: 'center' }}>Before reaching out, you might find the answer to your question in our Frequently Asked Questions section. Check it out <Link>here</Link>.</p>
        <h2 style={{ textAlign: 'center' }}>Social Media:</h2>
        <p style={{ textAlign: 'center' }}>Stay connected with us on social media to receive updates, promotions, and exciting offers:</p>
      </div>

      <p style={{ textAlign: 'center' }}>
        Facebook: <Link >[Link to Facebook Page]</Link><br />
        Instagram: <Link>[Link to Instagram Profile]</Link><br />
        Twitter: <Link>[Link to Twitter Profile]</Link>
      </p>

      <div>
        <p style={{ textAlign: 'center' }}>Your feedback is invaluable to us, and we continuously strive to improve our services to meet your expectations. We appreciate your trust and support in [Your E-commerce Website Name], and we look forward to serving you!</p>
        <p style={{ textAlign: 'center' }}>Thank you,
          <br />
          The [Your E-commerce Website Name] Team</p>
      </div>


    </div>
  )
}
export default Contact