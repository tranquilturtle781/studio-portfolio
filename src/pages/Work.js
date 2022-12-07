import "../App.css"
import "./Work.css"
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Work() {
    return(
        <div className="page2">
            <div class="projdisplay">
            <div className="card">
            <Link className="links" to="/project1">
                <div className="img_wrap">
                <img src="personas.png"></img>
                <p className="img_description">How much can we learn by observing and talking to real users?</p>
                </div>
                </Link>
                <h4>Personas: Assessing Elevator Controls</h4>
            </div>
            <div className="card">
            <Link className="links" to="/project2">
                <div className="img_wrap">
                <img src="project1.png"></img>
                <p className="img_description">How can we identify and address the usability issues of an existing interface?</p>
                </div>
                </Link>
                <h4>Redesign: Red Balloon Bookshop</h4>
            </div>
            <div className="card">
            <Link className="links" to="/project3">
                <div className="img_wrap">
                <img src="iterative.png"></img>
                <p className="img_description">How can we use the iterative design process to develop an interface for an emerging startup?</p>
                </div>
                </Link>
                <h4>Iterative Design: LifeAt Reimagined</h4>
            </div>
            <div className="card">
            <Link className="links" to="/project4">
                <div className="img_wrap">
                <img src="tbd.png"></img>
                <p className="img_description">project 4 description</p>
                </div>
                </Link>
                <h4>TBD?</h4>
            </div>
            </div>
        </div>
    )
}