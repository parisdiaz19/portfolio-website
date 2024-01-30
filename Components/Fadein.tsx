import React, { useEffect, useState } from "react";
import styles from "../Components/FadeIn.module.css";

function Fadein() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const ScrollY = window.scrollY;
    const threshold = 200;

    setIsVisible(scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`bg-blue-500 p-4 ${styles.fadeIn}`}>Fading Component</div>
    </div>
  );
}

export default Fadein;
