import React from "react";

function Projects() {
  return (
    <div className="projects text-white py-5">
      <div className="project-headers row">
        <div className="project-icon col-6">
          <img  alt="" src="../projects/icon2.png" />
        </div>
        <div className="col-6 project-title-header">
          <p>My Projects</p>
        </div>
      </div>

      <div className="contianer-fluid p-1 pt-5">
        <div className="row justify-content-evenly">
          <div className="projects-card col-12 col-md-5 mx-auto">
            <div className="project-img">
              <img alt="" src="../projects/horus.png" />
            </div>
            <div className="project-title p-1">
              Horus - Movies Web Application
            </div>

            <div className="project-techused">
              <div className="span-ft d-flex">
                {" "}
                <div className="span-body"></div>{" "}
                <div className="span-arr"></div>{" "}
              </div>
              <p>Technology Used</p>
              <div className="span-rt d-flex">
                {" "}
                <div className="span-body"></div>{" "}
                <div className="span-arr"></div>{" "}
              </div>
            </div>

            <div className="techs">
              <div className="tech-item">ASP .NET Core MVC</div>
            </div>
          </div>

          <div className="projects-card col-12 col-md-5 mt-5 mt-md-0 mx-auto">
            <div className="project-img">
              <img  alt="" src="../projects/galaxy.jpeg" />
            </div>
            <div className="project-title p-1">
              Galaxy - Ecommerce Web Application
            </div>

            <div className="project-techused">
              <div className="span-ft d-flex">
                {" "}
                <div className="span-body"></div>{" "}
                <div className="span-arr"></div>{" "}
              </div>
              <p>Technology Used</p>
              <div className="span-rt d-flex">
                {" "}
                <div className="span-body"></div>{" "}
                <div className="span-arr"></div>{" "}
              </div>
            </div>

            <div className="techs">
              <div className="tech-item">ASP .NET Core Web API</div>
              <div className="tech-item">Angular</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
