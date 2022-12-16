import "../App.css"
import "./Projects.css"

export default function Project3() {
    return(
        <div className="page">
             <h2>ITERATIVE DESIGN: LifeAt Reimagined</h2>
             <p>How can we use the iterative design process to develop an interactive interface for an emerging startup? In this project, I worked on a team of four to complete the entire process of mocking up a solution to a startup's concept, including sketches, prototypes, and user testing.</p>
             <h4>THE CONCEPT</h4>
             <p>We chose the startup <b>LifeAt</b>, which aims to serve as a "virtual getaway while you work". 
                LifeAt's goal is to make doing work just a bit more relaxing and fun by providing users 
                with relaxing video backgrounds like a scenic beach, lush forest, or bustling cafe to 
                look at while they work. More information about LifeAt can be found on their <a href="https://www.ycombinator.com/companies/lifeat" target="_blank">Y Combinator page</a>.</p>
            <h4>PROTOTYPES</h4>
            <p>After several rounds of sketching and low-fidelity prototyping, as well as group critique, we developed a final high-fidelity prototype. See the main features in the video below, or <a href="https://www.figma.com/proto/k61Sy11rurvyZB575Rj9Rv/Lo-Fi-Iterative-Design-(Copy)?node-id=53%3A2&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=53%3A2&amp;hotspot-hints=0&amp;hide-ui=1" target="_blank">explore it yourself</a>.</p>
            <br></br>
            <video controls width="600" muted>
            <source src="figma2.mp4" type="video/mp4"></source>
            </video>
            <br></br>
            <br></br>
             <form action="https://lazytortoise905.github.io/iterative/" target="_blank">
                    <button type="submit" className="clicky">Explore the full project</button>
             </form>
        </div>
    )
}