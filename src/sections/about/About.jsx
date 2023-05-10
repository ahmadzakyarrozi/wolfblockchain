import AboutImage from '../../assets/ahmadzaky.jpeg'
import './about.css'
import CV from '../../assets/ahmadzakyarrozi-cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const About = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }, []);
  return (
    <section id="about" data-aos="fade-in"> 
    <div className="container about__container">
      <div className="about__left">
        <div className="about__potrait" data-aos="fade-up">
          <img src={AboutImage} alt="About Image"/>
        </div>
      </div>
      <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards">
          
        {
          data.map(item => (
            <Card key={item.id} className="about__card">
              <span className='about__card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
              </Card>
          ))
        }
        </div>
        <p>
        I have worked for 2 years in website development especially backend 
        and also in project development especially product management,I can make e-commerce websites and so on
        </p>

        <p>
        I am ahmad zaky arrozi from East Jakarta Indonesia and born on November 14, 1996. I am 26 years old at the moment and am a graduate of the Jakarta Veterans National Development University. 
        I majored in Computer Science, especially Informatics Engineering. see my resume below !
        </p>
      <a href={CV} download className='btn primary'>Download CV<HiDownload/></a>
      </div>
      </div>
      </section>
  )
}

export default About