import { useEffect, useState } from "react";
import { slides } from "../db/slides.json";
import useProgressiveImage from "./UseProgrsiveImage";
import "./slider.scss";
import { Registration } from "../registration/Registration";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderAutoIndex = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % slides.length);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(sliderAutoIndex, 3500);

    return () => clearInterval(intervalId);
  }, []);
  const imageUrl = useProgressiveImage(slides[currentIndex].url) || slides[currentIndex].url;
  return (
    <div className="slider-wrapper">
      <div
        className="slider"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Registration />
        <div className="slider-dots-wrapper">
          {slides.map((_slide, slideIndex) => (
            <div
              key={slideIndex}
              className={currentIndex === slideIndex ? "active dot" : "dot"}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
