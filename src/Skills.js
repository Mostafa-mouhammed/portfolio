import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 400);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 600);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: !isSmallScreen,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 2 : 5,
    slidesToScroll: isSmallScreen ? 2 : 5,
  };

  return (
    <div className="skills">
      <h1 className="text-white pt-5">Skills</h1>
      <p className="text-white">Unleashing technical prowess and expertise.</p>
      <div className="slider mt-5">
        <Slider {...settings}>
          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/powerapp.png" />
              </div>
              <div className="skill-title">Power Apps</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/automate.png" />
              </div>
              <div className="skill-title">Power Automate</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/bi.png" />
              </div>
              <div className="skill-title">Power BI</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/virual.png" />
              </div>
              <div className="skill-title">Virual Agent</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/pages.png" />
              </div>
              <div className="skill-title">Power Pages</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/html.png" />
              </div>
              <div className="skill-title">HTML 5</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/css.png" />
              </div>
              <div className="skill-title">CSS 3</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/JS.png" />
              </div>
              <div className="skill-title">Javascript</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/tss.png" />
              </div>
              <div className="skill-title">Typescript</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/Angular.png" />
              </div>
              <div className="skill-title">Angular</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/jqueryy.png" />
              </div>
              <div className="skill-title">jQuery</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/sqlserverrr.png" />
              </div>
              <div className="skill-title">SQL Server</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/git.png" />
              </div>
              <div className="skill-title">Github</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/bootstrapp.png" />
              </div>
              <div className="skill-title">Bootstrap</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/mongodb.png" />
              </div>
              <div className="skill-title">MongoDB</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/node.png" />
              </div>
              <div className="skill-title">Node JS</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/cs.png" />
              </div>
              <div className="skill-title">C Sharp</div>
            </div>
          </div>

          <div className="skill-item-container">
            <div className="skill-item">
              <div className="icon-div">
                <img alt="" loading="eager" src="../icons/nett.png" />
              </div>
              <div className="skill-title">.NET Core</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
