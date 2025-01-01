"use client";
import Lottie from "lottie-react";
import animationData from "@/../public/animation.json";

const Loading = () => {
  return <Lottie animationData={animationData} loop className="w-44 h-44" />;
};

export default Loading;
