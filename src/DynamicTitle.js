import React, { useState, useEffect } from "react";
import "./App.css";

const DynamicTitle = () => {
  const items = [
    "Software Engineer",
    "Full Stack Developer",
    "Solution Developer",
    "Graphic Designer",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === items[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, items]);

  return (
    <div className="wrapper dynamictitle mx-auto">
      <div className="static-txt">I'm a</div>
      <div className="dynamic-txt">
        {`${items[index].substring(0, subIndex)}`}
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default DynamicTitle;
