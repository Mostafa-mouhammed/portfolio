import React from "react";

function TimeLine() {
  return (
    <div className="timeline-main">
      <header>
        <h1>Timeline</h1>
        <p>A Career Journey of academic achievements and career milestones</p>
      </header>

      <ul class="timeline">
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="hexa"></span>
              <span class="flag">
                Suez Canal University{" "}
                <span className="time-line-logo">
                  <img alt="" src="../timeline/scu.png" />
                </span>
              </span>
              <span class="time-wrapper">
                <span class="time">Sep 2019 - Jun 2023</span>
              </span>
            </div>
            <div class="desc">
              I have a Bachelor's degree in Arts and Humanities - English
              literature from Suez Canal University, where I graduated with a
              very good grade.
            </div>
          </div>
        </li>

        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="hexa"></span>
              <span class="flag">
                Graphic Designer{" "}
                <span className="time-line-logo">
                  <img alt="" src="../timeline/prof.png" />
                </span>
              </span>
              <span class="time-wrapper">
                <span class="time">Nov 2019 - Feb 2023</span>
              </span>
            </div>
            <div class="desc">
              I worked as a graphic designer for nearly three years during my
              time in college.
              <ol className="gd-ul mt-2">
                <li>El-Professor for Printing and Advertising - Full-Time</li>
                <li>Dalida Restaurant - Hybrid</li>
                <li>Freelance</li>
              </ol>
            </div>
          </div>
        </li>

        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="hexa"></span>
              <span class="flag">
                Information Technology Institute
                <span className="time-line-logo">
                  <img alt="" src="../timeline/iti.png" />
                </span>
              </span>
              <span class="time-wrapper">
                <span class="time">Oct 2023 - Jun 2024</span>
              </span>
            </div>
            <div class="desc">
              I have been accepted as a student at the Information Technology
              Institute and earned a 9-month diploma in Professional Web
              Development and Business Intelligence track.
            </div>
          </div>
        </li>

        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="hexa"></span>
              <span class="flag">
                Link Development{" "}
                <span className="time-line-logo">
                  <img alt="" src="../timeline/link.png" />
                </span>
              </span>
              <span class="time-wrapper">
                <span class="time">Jul 2024 - Present</span>
              </span>
            </div>
            <div class="desc">
              I'm currently working as a Software Engineer at Link Development
              Corp.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TimeLine;
