import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../images/sun.json";
import { NONAME } from "dns";

class Animation extends Component {
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,

      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
    );
  }
}

export default Animation;
