import "../CSS/SiteHeader.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const SiteHeader = () => {
  return(
    <div className="SiteHeader">
        <header>
          <h1>Ulysses.</h1>
          <div className="header-text">
            Fledgling computer scientist looking to explore new opportunities.
          </div>
          <Link to="/home"><Button variant="dark" as="input" type="button" value="Home" /></Link>{' '}
          <a href="https://github.com/umilton-git"><Button variant="dark" as="input" type="button" value="GitHub"/></a>{' '}
          <Link to="/projects"><Button variant="dark" as="input" type="button" value="Projects" /></Link>{' '}
          <a href="https://www.linkedin.com/in/ulysses-milton-14222813a/"><Button variant="dark" as="input" type="submit" value="LinkedIn" /></a>{' '}
        </header>
      </div>
  )
}

export default SiteHeader;
