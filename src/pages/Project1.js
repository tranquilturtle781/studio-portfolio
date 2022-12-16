import "../App.css"
import "./Projects.css"

export default function Project1() {
    return(
        <div className="page">
            <h2>PERSONAS: Assessing Elevator Controls</h2>
            <div className="info">
                <div className="toptext1">
                <p>How much can we learn by observing and talking to real users? This project explores just that by attempting to step into users' shoes and learn from their interactions with a specific interface.</p>
                <p>My chosen interface was an elevator control panel located in the main elevator of a building at Brown University.</p>
                </div>
                <div className="f1">
                <img src="interface.png"></img>
                </div>
             </div>
             <p>After both interviewing users as well as observing them in action, I generalized my findings in the form of two distinct personas, <b>Friendly Fiona</b> and <b>Tired TA Tom</b>. </p>
             <br></br>
             <div className="moreFlex">
                <div className="moreFlexPart">
                    <img src="persona1.png"></img>
                    <p><b>Friendly Fiona</b> represents the inexperienced users that don't use this elevator very frequently. She illustrates the struggles users shared regarding unintuitive buttons. </p>
                </div>
                <div className="moreFlexPart">
                    <img src="persona2.png"></img>
                    <p><b>Tired TA Tom</b> is a busy student who is always running late. He represents the frequent users of this elevator that continue to struggle with the card swiping feature of the interface 
                    due to a lack of clear instructions.</p>
                </div>
             </div>
             <br></br>
            <p>After developing these personas, I chose to really dig into the Tired TA Tom persona by creating a storyboard that documents his user journey. </p>
            <br></br>
             <div class="display">
                <div class="card1">
                    <img src="1.jpg"></img>
                    <p>TA Tom is late for his hours in the CIT. He needs to get to room 502 as quickly as possible!</p>
                </div>
                <div class="card1">
                    <img src="2.jpg"></img>
                    <p>After running across campus, he reaches the elevator in the CIT and presses the up button (hurry!)</p>
                </div>
                <div class="card1">
                    <img src="3.jpg"></img>
                    <p>The elevator arrives and Tom steps inside. He hits floor 5 and waits, thinking he doesn't need to swipe this early.</p>
                </div>
                <div class="card1">
                    <img src="4.jpg"></img>
                    <p>The elevator doesn't move and the doors reopen!</p>
                </div>
                <div class="card1">
                    <img src="5.jpg"></img>
                    <p>Tom tries to press floor 5 then swipe his card, but the light on the card reader stays red.</p>
                </div>
                <div class="card1">
                    <img src="6.jpg"></img>
                    <p>He tries swiping his card the other way around. The light turns green, but the elevator doesn't move.</p>
                </div>
                <div class="card1">
                    <img src="7.jpg"></img>
                    <p>Tom is frustrated. He has held hours in the CIT for over a year, and he still can't remember how to swipe correctly!</p>
                </div>
                <div class="card1">
                    <img src="8.jpg"></img>
                    <p>He finally tries swiping first, then pressing floor 5.</p>
                </div>
                <div class="card1">
                    <img src="9.jpg"></img>
                    <p>The elevator starts moving up!</p>
                </div>
                <div class="card1">
                    <img src="10.jpg"></img>
                    <p>Tom finally makes it to his hours, flustered and late. Five students are already waiting for his help.</p>
                </div>
            </div>
             <h2>Key Takeaways</h2>
             <p> In this project, I learned how to view an interface from the perspective of real users. I demonstrated my ability to learn
                from users via a contextual inquiry, including writing questions for users that are stimulating yet objective. I also learned how to 
                synthesize the information gained from users, and 
                </p>
                <br></br>
                <br></br>
            <form action="https://tranquilturtle781.github.io/personas/" target="_blank">
                    <button type="submit" class="clicky">Explore the full project</button>
             </form>
        </div>
    )
}