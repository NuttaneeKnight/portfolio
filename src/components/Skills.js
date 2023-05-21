import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NuttaneeKnight from "../assets/NuttaneeKnight.pdf";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>
                About 👩‍💻 &&<br></br> My Skills 🖥
              </h2>
              <p>
                Experienced Front End web developer with Full Stack developer
                experience. I am a software engineer bootcamp graduate with an
                extensive background in hospitality management.<br></br>
                <p>
                  My skills include: <br></br>Frontend: HTML, CSS, JavaScript,
                  React, TypeScript, jQuery, Python <br></br>
                  Backend: Node.js, Express, RESTful APIs, PostgreSQL<br></br>
                  Misc.: Mocha, Chai, Knex, Git, GitHub, Heroku, Node Package
                  Manager, Visual Studio Code, ServiceNow
                </p>
                <a href={NuttaneeKnight} download="NuttaneeKnight">
                  <button type="button" class="btn btn-primary">
                    Get Resume
                  </button>
                </a>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>ServiceNow</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
