"use client";
import { useEffect } from "react";
import { useSpring } from "framer-motion";
import FlyingRobot from "./FlyingRobot";

const robotSpring = { damping: 18, stiffness: 90 };

const GlobalFlyingRobot = () => {
  const robotX = useSpring(0, robotSpring);
  const robotY = useSpring(0, robotSpring);

  useEffect(() => {
    const setIdle = () => {
      robotX.set(window.innerWidth * 0.85);
      robotY.set(window.innerHeight * 0.2);
    };

    setIdle();

    const handleMouseMove = (e) => {
      robotX.set(e.clientX);
      robotY.set(e.clientY);
    };

    const handleMouseLeave = () => setIdle();
    const handleResize = () => setIdle();

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [robotX, robotY]);

  return <FlyingRobot robotX={robotX} robotY={robotY} />;
};

export default GlobalFlyingRobot;
