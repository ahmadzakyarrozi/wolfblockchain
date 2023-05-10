import './abilities.css'
import data from './data'
import Card from '../../components/Card'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Abilities = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  }, []);

  return (
    <section id="abilities">
      <h2> Talents and Abilities </h2>
      <p> these are some of my skills both in code technology and managing product tech</p>
      <div className="container abilities__container" data-aos="fade-up">
        {
          data.map(item =>(
            <Card key={item.id} className="abilities light">
              <div className="abilities__icon">{item.icon}</div>
              <div className="abilities__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
   
  )
}

export default Abilities