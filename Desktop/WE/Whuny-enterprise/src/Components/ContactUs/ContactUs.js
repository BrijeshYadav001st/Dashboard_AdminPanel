import React, {useRef} from 'react'
import './ContactUs.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import emailjs from '@emailjs/browser';


function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rrjuayo', 'template_dnl0c6i', form.current, 'CFO0i50pcBzjW0T8Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Header />

      <div className="main-footer">

        <div className="top">
          {/* <Location /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13995.80751489071!2d77.20349787661745!3d28.72098408595792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe0c0f142537%3A0x63eaaad8e0e94caf!2sGopalpur%20Village%2C%20Delhi%2C%20110009!5e0!3m2!1sen!2sin!4v1670704096606!5m2!1sen!2sin" height="100%" width="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"></iframe>
        </div>

        <div className="form-wrap">
          <form
          ref={form} onSubmit={sendEmail}
          >
            <h3>
              Get in touch with us
            </h3>
            <div className="input-container fname">
              <label for="fname">Name</label>
              <input id="fname" name="name" type="text" placeholder="Name" />
            </div>
            <div className="input-container email">
              <label for="email">Email</label>
              <input id="email" name="user_email" type="email" placeholder="E-mail" />
            </div>
            <div className="input-container-cnumber">
              <label for="cnumber">Contact Number</label>
              <input id="cnumber" name="contact_number" type="text" placeholder="Contact Number" />
            </div>
            <div className="input-container query">
              <label for="query">Query</label>
              <select required name="query" id="query" className='select-query'>
                <option value="">Select your query</option>
                <option value="WebsiteAndMobile query">Webisite And Mobile Application Development</option>
                <option value="digital query">Digital Marketing</option>
                <option value="maintence query">Website Maintenance</option>
                <option value="financial query">Financial Query</option>
                <option value="support query" id="getsupport">Supports And Tech Query</option>
                <option value="other">Other things</option>
              </select>
            </div>
            <div className="input-container message">
              <label for="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button className="signup-btn" type="submit"  onClick={() => window.location.reload(false)}>Submit</button>
          </form>
        </div>

      </div>

      <Footer />

    </>

  )
}

export default ContactUs