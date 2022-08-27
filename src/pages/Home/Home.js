import "./Home.css";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

import me from "../../assets/images/me.png";
import TechSkills from "../../components/TechSkills/TechSkills";

export default function Home() {

  // skills animations include: rotate, pulse, or wiggle
  const skills = [
    {
      title: "React",
      src:
        "https://daynin.github.io/clojurescript-presentation/img/react-logo.png",
      animation: "rotate",
    },
    {
      title: "NodeJS",
      src: "https://code-maven.com/img/node.png",
      animation: "",
    },
    {
      title: "CSS",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
      animation: "",
    },
    {
      title: "Firebase",
      src: "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
      animation: "pulse",
    },
    {
      title: "SASS",
      src: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
      animation: "wiggle",
    },
    {
      title: "Angular",
      src: "https://angular.io/assets/images/logos/angular/angular.svg",
      animation: "",
    },
    {
      title: "MongoDB",
      src: "https://imgs.search.brave.com/f60L0kEz1GPLoPQBwzdpafZrxyozcDGLwS7tCVrXM7Y/rs:fit:256:256:1/g:ce/aHR0cDovL3d3dy5t/aW1hc3RlY2guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzAyL21vbmdvZGIt/bG9nby5wbmc",
      animation: "",
    },
    {
      title: ".NET",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/150px-Microsoft_.NET_logo.svg.png",
      animation: "",
    },
    {
      title: "Vue",
      src: "https://imgs.search.brave.com/k7hByVHf6JyKnYu6wHao8ziaaAjTVp__eJACWjeHuxI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvdnVl/LTktbG9nby1wbmct/dHJhbnNwYXJlbnQu/cG5n",
      animation: "wiggle",
    },
  ];

  return (
    <div className="home">
      <div className="header">
        <div className="profile-photo-frame">
          <img src={me} alt="" className="profile-photo" />
        </div>
        <h1>
          <ReactTypingEffect
            text={[
              "Hey! I'm Nate.",
              "console.log('Hey! I'm Nate.')",
              "System.out.println('Hey! I'm Nate.');",
              "Console.Print('Hey! I'm Nate!');",
              "print('Hey! I'm Nate!')",
            ]}
            speed={100}
            eraseDelay={1000}
            typingDelay={1000}
            className="typing-effect"
          />
        </h1>
      </div>
      <div className="body">
        <p className="introduction">
          I am a software developer in the United States based in the beautiful state of{" "}
          <span className="city">Idaho</span>. I have professional experience doing backend work in both Java and JavaScipt. My passion is web dev and I enjoy building asthetically
          pleasing, responsive websites and full stack applications!
        </p>
        <div className="tech-info">
          <TechSkills skills={skills} />
        </div>
      </div>
    </div>
  );
}
