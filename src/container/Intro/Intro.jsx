import React, { useRef, useState } from "react";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  return (
    <div className="app__video">
      <video
        src={meal}
        width="320"
        height="240"
        type="video/mp4"
        controls
      ></video>
    </div>
  );
};

export default Intro;
