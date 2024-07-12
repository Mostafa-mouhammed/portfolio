import React from "react";

function About() {
  return (
    <div className="about">
      <h3>About me</h3>
    <div className="container-fluid">
    <div className="row justify-content-around">

        <div className="about-sub col-12 col-md-5 ">
          <p className="about-p">
          I am a skilled .NET developer with experience in creating web applications using Angular
           and the Power Platform. I have a strong background in software development and enjoy solving problems 
          </p>
        </div>

        <div className="about-sub col-12 col-md-5  about-pic">
          <img  alt="" src="./about/about.png"></img>
          <img  alt="" className="dev-pic" src="./about/dev.webp"></img>
        </div>


      </div>
      </div>
    </div>
  );
}

export default About;
