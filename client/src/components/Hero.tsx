import { useState, useEffect } from "react";
import data from "../assets/slideData/data";

const Hero = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // Auto-slide effect
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="hero-slider -z-10">
      {people.map((person, personIndex) => {
        const { id, image } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article key={id} className={`slide ${position}`}>
            <img src={image} alt="slideshow" className="slide-image" />
          </article>
        );
      })}
    </div>
  );
};

export default Hero;
