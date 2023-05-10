import contacts from './data'
import './contact.css'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }, []);

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        you can contact for more info link below 
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact