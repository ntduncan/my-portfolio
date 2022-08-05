import "./Home.css";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

import me from "../../assets/images/me.png";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="profile-photo-frame">
          <img src={me} alt="" className="profile-photo" />
        </div>
        <h1>
          <ReactTypingEffect
            text={["Hey! I'm Nate.", "¡Hola! Soy Nate.", "Bonjour! Je suis Nate.", "Hallo! Ich bin Nate.", "Ciao! Sono Nate.", "こんにちは！私はネイトです。", "안녕하세요! 저는 네이트입니다."]}
            speed={100}
            eraseDelay={1000}
            typingDelay={1000}
            className="typing-effect"
          />
        </h1>
      </div>
      <div className="body">
        <p className="introduction">
          I am a software engineer based in the USA in the beautiful state of{" "}
          <span className="city">Idaho</span>. I enjoy building
          asthetically pleasing, responsive websites and full stack applications.
        </p>
      </div>
    </div>
  );
}
