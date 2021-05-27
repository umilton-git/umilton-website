import React from "react";
import { Carousel } from "react-bootstrap";
import python from "../Assets/python.svg";
import cpp from "../Assets/cpp.svg";
import unity from "../Assets/unity.svg";
import html from "../Assets/html.svg";
import javascript from "../Assets/javascript.svg";
import react from "../Assets/react.svg";
import solidity from "../Assets/solidity.svg";
import ganache from "../Assets/ganache.svg";
import truffle from "../Assets/truffle.svg";
import haskell from "../Assets/haskell.svg";
import brown from "../Assets/brown.svg";
import truffleyellow from "../Assets/truffleyellow.svg";
import grey from "../Assets/grey.svg";
import purple from "../Assets/purple.svg";
import lightblue from "../Assets/lightblue.svg";
import darkblue from "../Assets/darkblue.svg";
import red from "../Assets/red.svg";
import darkgrey from "../Assets/darkgrey.svg";
import "../CSS/carouselcss.css";

const CarouselContainer = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lightblue}
        alt="lightblue"
      />

      <Carousel.Caption>

        <h3>Python</h3>
        <br></br>
        <br></br>
        <br></br>
        <img
        src = {python}
        alt = "Python"
        />
        <br></br>
        <br></br>
        <br></br>
        <p>
        Python is an object oriented dynamic programming language and also the
        first language that I learned. I was able to create structures such as
        linked lists (both singly and doubly linked), stacks and queues. I
        also developed an understanding of attributes like lists.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={darkblue}
        alt="darkblue"
      />

      <Carousel.Caption>

        <h3>C++</h3>
        <br></br>
        <br></br>
        <br></br>
        <img
        src = {cpp}
        alt = "cpp"
        />
        <br></br>
        <br></br>
        <br></br>
        <p>
        C++ is a static object oriented programming language and the language
        I've worked most extensively in. I've programmed more data structures
        (from binary search trees to node traversal algorithms) and even made
        a lexer for a class.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={grey}
        alt="grey"
      />

      <Carousel.Caption>

        <h3>Unity</h3>
        <br></br>
        <br></br>
        <br></br>
        <img
        src = {unity}
        alt = "Unity"
        />
        <br></br>
        <br></br>
        <br></br>
        <p>
        Unity is a C# based game development program. I have experience
        working with Unity to make projects both as a team and as an
        individual. I plan to upload any projects that I make onto this site
        in the future.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={red}
        alt="red"
      />

      <Carousel.Caption>

        <h3>HTML</h3>
        <br></br>
        <br></br>
        <br></br>
        <img
        src = {html}
        alt = "html"
        />
        <br></br>
        <br></br>
        <br></br>
        <p>
        HTML is the first language I've learned, with experience working with
        HTML since high school. I have also gained experience supplementing
        HTML projects with PHP and AJAX.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={darkblue}
        alt="darkblue"
      />

      <Carousel.Caption>

        <h3>Javascript</h3>
        <br></br>
        <br></br>
        <br></br>
        <img
        src = {javascript}
        alt = "Javascript"
        />
        <br></br>
        <br></br>
        <br></br>
        <p>
        Javascript is another langauge that I've done a good bit of work in. I
        have experience working with the following libraries and runtime
        environments: Node.js, P5.js, React.js, Web3.js, and Processing.js.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={darkgrey}
        alt="darkgrey"
      />

      <Carousel.Caption>

        <h3>React</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img
        src = {react}
        alt = "React"
        />
        <br></br>
        <br></br>
        <br></br>
        <p>
        React is a website creation library for Javascript that I'm currently
        learning. This website was made in React with Typescript!
        </p>
      </Carousel.Caption>
    </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brown}
          alt="brown"
        />
        <Carousel.Caption>
          <h3>Ganache</h3>
          <br></br>
          <br></br>
          <br></br>
          <img
          src = {ganache}
          alt = "Ganache"
          />
          <br></br>
          <br></br>
          <br></br>
          <p>Ganache is a program meant for deploying your own test blockchain to
          demo your smart contracts on. I've done a guided example with ganache
          but would like to learn more with it.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grey}
          alt="grey"
        />

        <Carousel.Caption>
          <h3>Solidity</h3>
          <br></br>
          <br></br>
          <br></br>
          <img
          src = {solidity}
          alt = "Solidity"
          />
          <br></br>
          <br></br>
          <br></br>
          <p>Solidity is an object-oriented high level language for writing smart
          contracts on Ethereum's blockchain. I've already done a few guided
          examples but want to make my own Solidity project next.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={truffleyellow}
          alt="truffleyellow"
        />

        <Carousel.Caption>

          <h3>Truffle</h3>
          <br></br>
          <br></br>
          <br></br>
          <img
          src = {truffle}
          alt = "truffle"
          />
          <br></br>
          <br></br>
          <br></br>
          <p>
          Truffle is a program meant for testing your smart contracts in the
          Ethereum Virtual Machine. I've done a guided example with Truffle but
          want to do more.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={purple}
          alt="purple"
        />

        <Carousel.Caption>

          <h3>Haskell</h3>
          <br></br>
          <br></br>
          <br></br>
          <img
          src = {haskell}
          alt = "Haskell"
          />
          <br></br>
          <br></br>
          <br></br>
          <p>
          Haskell is a functional programming language, and the first functional
          language I will be learning. Cardano plans to use it for their smart
          contract software service, so I view learning it as a good investment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
