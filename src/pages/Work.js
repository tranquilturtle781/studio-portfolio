import "../App.css"
import "./Work.css"
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Work() {
    return(
        <div className="page2">
            <h2>MY PROCESS</h2>
            <p id="intro">As a student whose interests lie predominantly within the AI/ML sphere, I had minimal experience with UI design before this semester. However,  I believe that no matter your particular interests, to be an effective and responsible developer, you need to truly understand users and the user experience. With that in mind, I took a course on user interfaces and user experience this fall at Brown. This portfolio documents my journey as I explore the world of UI/UX, and learn what it takes to create meaningful, usable interfaces. </p>
            <h2>MY WORK</h2>
            <div class="projdisplay">
            <div className="card">
            <Link className="links" to="/personas">
                <div className="img_wrap">
                <img src="personas.png"></img>
                <p className="img_description">How much can we learn by observing and talking to real users?</p>
                </div>
                </Link>
                <h4>PERSONAS: Assessing Elevator Controls</h4>
            </div>
            <div className="card">
            <Link className="links" to="/redesign">
                <div className="img_wrap">
                <img src="project1.png"></img>
                <p className="img_description">How can we identify and address the usability issues of an existing interface?</p>
                </div>
                </Link>
                <h4>REDESIGN: Red Balloon Bookshop</h4>
            </div>
            <div className="card">
            <Link className="links" to="/iterativedesign">
                <div className="img_wrap">
                <img src="lifeat.png"></img>
                <p className="img_description">How can we use the iterative design process to develop an interface for an emerging startup?</p>
                </div>
                </Link>
                <h4>ITERATIVE DESIGN: LifeAt Reimagined</h4>
            </div>
            <div className="card">
            <Link className="links" to="/development">
                <div className="img_wrap">
                <img src="fruit.png"></img>
                <p className="img_description">How can we display information in an interactive and meaningful way?</p>
                </div>
                </Link>
                <h4>DEVELOPMENT: Interactive Data Display</h4>
            </div>
            </div>
        </div>
    )
}