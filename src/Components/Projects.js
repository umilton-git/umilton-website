import "../CSS/Projects.css";
import ScriptTag from "react-script-tag";
import raycasting from "../Assets/raycastfinalsc.PNG";

const Projects = () => {
  return(
    <div className="projects">
        <h3>Raycaster</h3>
        <body className="projects-body">A simple raycasting demo I made for my computer graphics class.</body>
        <a href="https://umilton-git.github.io/raycast/"><img src={raycasting} alt="Raycasting" height="350"/></a>
        <h3 className="coming-soon">More to come soon...</h3>
      </div>
  )
}

export default Projects;
