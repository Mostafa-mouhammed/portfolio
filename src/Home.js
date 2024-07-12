import React from "react";
import DynamicTitle from "./DynamicTitle";
import ScrollButton from "./ScrollDown";

function Home() {
  return (
    <div className="Home">
      <ScrollButton></ScrollButton>
      <h1>
        Welcome to my Portofolio, I'm{" "}
        <span className="name">Mostafa Mohamed</span>
      </h1>

      <DynamicTitle></DynamicTitle>

      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <a href="./cv.pdf" download="cv.pdf" class="button_text">
            Download my cv
          </a>
        </span>
      </button>

    </div>
  );
}

export default Home;
