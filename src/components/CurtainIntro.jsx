import { useEffect, useState } from "react";

import frame1 from "../assets/curtains/frame1.png";
import frame2 from "../assets/curtains/frame2.png";
import frame3 from "../assets/curtains/frame3.png";
import frame4 from "../assets/curtains/frame4.png";
import frame5 from "../assets/curtains/frame5.png";

import "./CurtainIntro.css";

const frames = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
];

export default function CurtainIntro() {
  const [currentFrame, setCurrentFrame] = useState(0);

  const [textOpacity, setTextOpacity] = useState(1);

  const [introOpacity, setIntroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // VERY FAST cinematic opening
      const maxScroll = 100;

      const progress = Math.min(scrollY / maxScroll, 1);

      // frame switching
      const frameIndex = Math.min(
        frames.length - 1,
        Math.ceil(progress * (frames.length - 1))
      );

      setCurrentFrame(frameIndex);

      // text fades quickly
      setTextOpacity(Math.max(1 - progress * 3, 0));

      // intro disappears after opening
      if (progress > 0.7) {
        setIntroOpacity(
          Math.max(1 - (progress - 0.7) * 15, 0)
        );
      } else {
        setIntroOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="curtain-intro"
      style={{
        opacity: introOpacity,
      }}
    >
      {/* CURTAIN FRAME */}
      <img
        src={frames[currentFrame]}
        alt="Curtain"
        className="curtain-image"
      />

      {/* TEXT */}
      <div
        className="intro-text"
        style={{
          opacity: textOpacity,
        }}
      >
        <div
  className="intro-text"
  style={{
    opacity: textOpacity,
  }}
>
  <div className="ornament">
    ✦ ❈ ✦
  </div>

  <h2>Welcome to</h2>

  <div className="mini-line" />

  <h1>Harshie's Art Museum</h1>

 <p>
  Art by @Sushiisketches
  
</p>

 

  <div className="scroll-text">
    SCROLL
  </div>
</div>
      </div>
    </div>
  );
}