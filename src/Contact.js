import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="printer-img">
          <img alt="" src="./about/feature-print.png" />
        </div>

        <div className="contact-txt">Contact me</div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-around">
          <div class="contact-sub col-5">
            <div>
              <div class="main">
                <a
                  href="mailto:moustafamuhammadd@gmail.com"
                  class="card envelope"
                >
                  <i class="fa-solid fa-envelope"></i>
                </a>

                <a href="https://wa.me/201288646727" class="card whatsapp">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/mostafamouhammed/"
                  class="card linkedin"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>

                <a
                  style={{ fill: "black", color: "black" }}
                  href="./cv.pdf"
                  download="cv.pdf"
                  class="card file"
                >
                  <i class="fa-solid fa-file"></i>{" "}
                </a>

                <div class="card">
                  <svg
                    class="uiverse"
                    width="23px"
                    height="23px"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"
                      fill="url(#paint0_linear_501_142)"
                    ></path>
                    <path
                      d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"
                      fill="url(#paint1_linear_501_142)"
                    ></path>
                    <path
                      d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"
                      fill="url(#paint2_linear_501_142)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_501_142"
                        x1="0"
                        y1="0"
                        x2="96.1684"
                        y2="87.6201"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#BF66FF"></stop>
                        <stop offset="0.510417" stop-color="#6248FF"></stop>
                        <stop offset="1" stop-color="#00DDEB"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_501_142"
                        x1="0"
                        y1="0"
                        x2="96.1684"
                        y2="87.6201"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#BF66FF"></stop>
                        <stop offset="0.510417" stop-color="#6248FF"></stop>
                        <stop offset="1" stop-color="#00DDEB"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_501_142"
                        x1="0"
                        y1="0"
                        x2="96.1684"
                        y2="87.6201"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#BF66FF"></stop>
                        <stop offset="0.510417" stop-color="#6248FF"></stop>
                        <stop offset="1" stop-color="#00DDEB"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <a
                  style={{ fill: "black", color: "black" }}
                  href="https://github.com/Mostafa-mouhammed"
                  class="card github"
                >
                  <i class="fa-brands fa-github"></i>
                </a>

                <a href="tel:+1234567890" class="card phone">
                  <i class="fa-solid fa-phone"></i>
                </a>
                <a
                  href="https://www.hackerrank.com/profile/moustafamohammad"
                  class="card hackerrank"
                >
                  <i class="fa-brands fa-hackerrank"></i>{" "}
                </a>
                <a
                  href="mailto:moustafamuhammadd@gmail.com"
                  class="card envelope"
                >
                  <i class="fa-solid fa-envelope-open-text"></i>
                </a>

                <p class="text">
                  <br></br>contact <br></br> me
                </p>

                <div class="main_back"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
