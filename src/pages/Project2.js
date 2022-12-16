import "../App.css"
import "./Projects.css"

export default function Project2() {
    return(
        <div className="page">
             <h2>REDESIGN: Red Balloon Bookshop</h2>
             <p>How can we identify and address the usability issues of an existing interface?</p>
             <p>In this project, I evaluated an existing webpage based on the principles of learnability, efficiency, memorability, and accessibility. I redesigned the page to address these issues, and built a responsive webpage based on this design.</p>
             <div className="chunky">
                <div className="chunky1">
                    <h4>ORIGINAL SITE</h4>
                    <img id="og" src="og.png"></img>
                    <p>The site I chose to examine is the home page of the online store for Red Balloon Bookshop, an interface itself has some clear issues and is not particularly intuitive.</p>
                    <form action="https://www.redballoonbookshop.com/buy-books" target="_blank">
                        <button type="submit" class="clicky" value="Visit Original Site">Visit Original Site</button>
                    </form>
                </div>
                <div className="chunky1">
                <h4>REDESIGN</h4>
                    <img id="new" src="1.png"></img>
                    <p>My redesigned site addressed key usability and accessibility concerns from the original page. It is a single-page redesign, so elements with external links have been replaced with dummy elements.</p>
                    <form action="https://tranquilturtle781.github.io/redballoonredesign/" target="_blank">
                        <button type="submit" class="clicky" id="bigclick" value="Visit New Site">Visit Redesigned Site</button>
                    </form>
                </div>
             </div>
             <h2>Key Takeaways</h2>
             <p>In this project, I learned how to critically analyze webpages to identify usability and accessibility issues. 
                I got practice using Balsamiq and Figma to create low and high-fidelity wireframes for multiple screen sizes. 
                I also was able to hone my web development skills by using HTML and CSS to build a responsive website based on these prototypes.</p>
                <br></br>
             <form action="https://tranquilturtle781.github.io/responsiveredesign/" target="_blank">
                    <button type="submit" class="clicky">Explore the full project</button>
             </form>
        </div>
    )
}