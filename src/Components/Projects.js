import "../CSS/Projects.css";
import ScriptTag from "react-script-tag";
import raycasting from "../Assets/raycastfinalsc.PNG";
import yc from "../Assets/TheYellowCircle.PNG";

const Projects = () => {
  return(
    <div className="projects">
        <h3>Raycaster</h3>
        <body className="projects-body">A simple raycasting demo I made for my computer graphics class.</body>
        <a href="https://umilton-git.github.io/raycast/"><img src={raycasting} alt="Raycasting" height="350"/></a>
        <h3>The Yellow Circle</h3>
        <body className="projects-body">The first individual Unity game I made on my own for a game design class in college. 
        get the circles, make the eye move through the house to slow it down.</body>
        <a href="https://github.com/umilton-git/TheYellowCircle/"><img src = {yc} alt = "The Yellow Circle" height = "350" /></a>
        <h3 className="coming-soon">More to come soon...</h3>
      </div>
  )
}

export default Projects;
