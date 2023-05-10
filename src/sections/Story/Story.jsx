import './story.css'
import Card from '../../components/Card'
import data from './data'
const Story = () => {
  return (
    <section id="story">
      <h2> Story of my Work Experience </h2>
      <p> This is my work journey from graduating from college to the last job</p>
      <div className="story__container">
        {
          data.map(item =>(
            <Card key={item.id} className="story light">
              <div className="story__icon">{item.icon}</div>
              <div className="story__details">
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

export default Story