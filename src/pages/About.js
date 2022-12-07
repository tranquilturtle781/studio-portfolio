import "../App.css"
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/fontawesome-free-solid'
import { faGithub } from '@fortawesome/fontawesome-free-brands'

export default function About() {
    return(
        <div className="page">
            <div className="r">
            <div>
                <h2>Hi! I'm tranquilturtle781.</h2>
                <p id="bio">I'm a junior at Brown University studying Applied Mathematics and Computer Science. My primary interests lie in machine learning, data-driven research, and ethical AI. UI design is a new interest of mine that I have explored through a User Interfaces and User Experiences course at Brown. This portfolio serves as a demonstration of the skills I have developed from this course. </p>
            </div>
            <img id="profilepic" src="turtle.png"></img>
            </div>
            <p>I'm an avid [REDACTED], and my favorite way to start the morning is with a [REDACTED] and a [REDACTED].</p>
            <h2>Let's connect!</h2>
            <div className='social'>
                <FontAwesomeIcon icon={faEnvelope} color='#192142'/>
                <p>tranquil_turtle@brown.edu</p>
            </div>
            <div className='social'>
                <FontAwesomeIcon icon={faGithub} color='#192142'/>
                <a href='https://github.com/tranquilturtle781' target='_blank'>tranquilturtle781</a>
            </div>
            
        </div>
    )
}