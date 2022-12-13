import "../App.css"
import "./Projects.css"

export default function Project4() {
    return(
        <div className="page">
             <h2>DEVELOPMENT: Interactive Data Display</h2>
             <div className="info">
                <div className="toptext">
                <p>I developed an interactive interface that visualizes a dataset, and allows users to filter and 
                    sort the displayed data based on its attributes, as well as add elements of the data to an aggregator. 
                    The interface was built using React, and leverages React's state structure to update components continuously based on users' actions.</p>
                <p>I chose to work with a dataset that contains information about various fruits. By using this application, users can easily compare 
                    the nutritional contents of different fruits and learn a little bit about plant taxonomy!</p>
                </div>
                
                <img src="fruit.png" id="f"></img>
             </div>
             <h4>Key Takeaways</h4>
             <p>Although my chosen dataset was relatively trivial, this project reinforced my understanding of React, which will allow me to build more interactive pages in the future.
                     In building this site, I also got practice with the aesthetic side of UI design, as I aimed to make my final product both visually appealing and easy to use.
                </p>
             <form action="https://tranquilturtle781.github.io/fruit-development/" target="_blank">
                    <button type="submit" class="clicky">Explore the final product</button>
             </form>
        </div>
    )
}