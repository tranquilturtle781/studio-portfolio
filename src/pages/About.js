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
                <h2 className="about">Hi! I'm tranquilturtle781.</h2>
                <p id="bio">I'm a junior at Brown University studying Applied Mathematics and 
                Computer Science. Although my primary interests lie in machine learning, data-driven 
                research, and ethical AI, I have always been interested in the intersection of computer science
                and design. I believe that to be an effective and responsible developer, you need to truly understand
                users and the user experience.</p>
            </div>
            <img id="profilepic" src="turtle.png"></img>
            </div>
            <h2 className="about">A little more about me</h2>
            <ul className="listabout">
                <li>I love crosswords, both constructing and solving them.</li>
                <li>I'm happiest when I'm outside. I spend most of my free time hiking, paddling, biking, and exploring the natural world. My favorite hike is the Mount Katahdin summit via the Knife Edge Trail!</li>
                <li>I'm an avid crocheter and have crocheted several of my favorite pieces of clothing</li>
            </ul>  
            <h2 className="about">Let's connect!</h2>
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