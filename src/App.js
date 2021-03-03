import { React, useState } from "react";
import "./App.css";
import logo from "./img/logo.png";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ReactComponent as Figma } from "./img/Figma-Icon.svg";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEye,
  FaHtml5,
  FaCss3,
  FaJs,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaSass,
  FaWordpressSimple,
  FaElementor,
  FaBootstrap,
  FaGit,
  FaHeart,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
function App() {
  return (
    <div className="App">
      <div className={`header`}>
        <div className="empty"></div>
        <h2></h2>
        <div className={`nav`}>
          <a className="hover-effect" href="#">
            HOME
          </a>
          <a className="hover-effect" href="#">
            ABOUT
          </a>
          <img src={logo} alt="" />
          <a className="hover-effect" href="#">
            PROJECTS
          </a>
          <a className="hover-effect" href="#">
            CONTACT
          </a>
        </div>

        <div className="switch">
          <HiOutlineLightBulb />
        </div>
      </div>

      <div className={`hero`}>
        <div className="right">
          <img src={logo} alt="" />
        </div>
        <div className="left">
          <h1>
            Hi, <br /> I'm <span>Akinkunmi</span>
          </h1>
          <b>FRONTEND ENGINEER</b>
          <div className="socials">
            <a href="#">
              <FaTwitter className="twitter" />
            </a>
            <a href="#">
              <FaGithub className="github" />
            </a>
            <a href="#">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
          <button className="resumeBtn">
            <FaFileDownload /> DOWNLOAD MY Résumé
          </button>
        </div>
      </div>
      <div className="about">
        <div className="left"></div>
        <div className="right">
          <h1>ABOUT ME</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            sit amet alias at, animi architecto, a iure quisquam assumenda
            dignissimos officia ad ipsam quaerat eaque adipisci veniam
            laudantium ab inventore?Animi perspiciatis dicta beatae quidem totam
            fuga, perferendis voluptatum. Facere eaque eos consectetur ab,
            explicabo, corporis, at velit consequatur ipsa ipsam quos voluptate
            amet enim corrupti repellendus. Tenetur, expedita ad.
          </p>
        </div>
      </div>
      <div className="projects">
        <h1>MY PROJECTS</h1>
        <div className="proj">
          <div className="left"></div>
          <div className="right">
            <h3>Google Clone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              reprehenderit illum hic eius, in nam, inventore dolore rem amet
              dicta quaerat commodi officiis, rerum quia molestias neque
              exercitationem beatae alias?
            </p>
            <div className="tags">
              <small>react</small>
              <small>api</small>
            </div>
            <div className="links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaEye className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className="left"></div>
          <div className="right">
            <h3>Covid19 Tracker</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              reprehenderit illum hic eius, in nam, inventore dolore rem amet
              dicta quaerat commodi officiis, rerum quia molestias neque
              exercitationem beatae alias?
            </p>
            <div className="tags">
              <small>react</small>
              <small>api</small>
            </div>
            <div className="links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaEye className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className="left"></div>
          <div className="right">
            <h3>Jumia Clone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              reprehenderit illum hic eius, in nam, inventore dolore rem amet
              dicta quaerat commodi officiis, rerum quia molestias neque
              exercitationem beatae alias?
            </p>
            <div className="tags">
              <small>react</small>
              <small>firebase</small>
              <small>auth</small>
            </div>
            <div className="links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaEye className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className="left"></div>
          <div className="right">
            <h3>Netflix Clone</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              reprehenderit illum hic eius, in nam, inventore dolore rem amet
              dicta quaerat commodi officiis, rerum quia molestias neque
              exercitationem beatae alias?
            </p>
            <div className="tags">
              <small>react</small>
              <small>api</small>
              <small>auth</small>
            </div>
            <div className="links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaEye className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className="left"></div>
          <div className="right">
            <h3>AI-Powered News App</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              reprehenderit illum hic eius, in nam, inventore dolore rem amet
              dicta quaerat commodi officiis, rerum quia molestias neque
              exercitationem beatae alias?
            </p>
            <div className="tags">
              <small>react</small>
              <small>api</small>
              <small>AI</small>
              <small>voice command</small>
            </div>
            <div className="links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaEye className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className="left"></div>
          <div className="right">
            <h3>PWA Weather App</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              reprehenderit illum hic eius, in nam, inventore dolore rem amet
              dicta quaerat commodi officiis, rerum quia molestias neque
              exercitationem beatae alias?
            </p>
            <div className="tags">
              <small>react</small>
              <small>api</small>
              <small>offline</small>
            </div>
            <div className="links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaEye className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-tools">
        <h1>TOOLS I WORK WITH</h1>
        <div className="tools">
          <FaHtml5 className="html" />
          <FaCss3 className="css" />
          <FaJsSquare className="js" />
          <FaReact className="react" />
          <Figma />
        </div>
        <div className="tools">
          <FaSass className="sass" />
          <FaWordpressSimple className="wp" />
          <FaElementor className="elmt" />
          <FaBootstrap className="btsrp" />
          <FaGit className="git" />
        </div>
      </div>
      <div className="get-in-touch">
        <h1>GET IN TOUCH</h1>
        <ContactForm />
      </div>
      <div className="footer">
        <p>
          Created with <FaHeart className="icon" /> {`&`}{" "}
          <FaReact className="icon" /> by Me for Me
        </p>
      </div>
    </div>
  );
}

export default App;
