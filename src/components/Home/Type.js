import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Competitive Programmer",
          "Full Stack Developer",
          
        ],
        delay:35,
        pauseFor:400 ,
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
