import "../App.css"
import "./Projects.css"

export default function Project2() {
    return(
        <div className="page">
             <h2>REDESIGN: Red Balloon Bookshop</h2>
             <p>CONTEXT W GUIDING QUESTION</p>
             <div className="chunky">
                <div className="chunky1">
                    <h4>ORIGINAL SITE</h4>
                    <img id="og" src="og.png"></img>
                    <p>The site I chose to examine and redesign is the home page of the online store for Red Balloon Bookshop. I chose to analyze this webpage because it is affiliated with a book shop that was my absolute favorite store as a child, but the interface itself has some clear issues and is not particularly intuitive.</p>
                    <form action="https://www.redballoonbookshop.com/buy-books" target="_blank">
                        <button type="submit" class="clicky" value="Visit Original Site">Visit Original Site</button>
                    </form>
                </div>
                <div className="chunky1">
                <h4>REDESIGN</h4>
                    <img id="new" src="1.png"></img>
                    <p>???</p>
                    <form action="https://tranquilturtle781.github.io/redballoonredesign/" target="_blank">
                        <button type="submit" class="clicky" id="bigclick" value="Visit New Site">Visit Redesigned Site</button>
                    </form>
                </div>
             </div>
             <form action="https://tranquilturtle781.github.io/responsiveredesign/" target="_blank">
                    <button type="submit" class="clicky">Explore the full project</button>
             </form>
        </div>
    )
}