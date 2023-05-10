import Project from "./Project"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
const Projects = ({projects}) => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }, []);

  return (
    <div className="portfolio__projects">
        {
            projects.map(project => (
                <Project key={project.id} project={project} data-aos="fade-up" />
            ))
        }
    </div>
  )
}

export default Projects