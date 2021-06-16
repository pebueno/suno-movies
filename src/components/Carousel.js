// import React from "react";

import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./styles/Carousel.scss";

export function Carousel() {
  return <ImageSlider slides={SliderData} />;
}
