"use client";
import React from "react";
import Lottie from "lottie-react";
import aboutLottie from "../public/lottie/Login.json";

const About = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6  py-12">

            {/* Left: Text */}
            <div className="md:w-1/2 mb-8 md:mb-0">
                <Lottie
                    animationData={aboutLottie}
                    loop={true}
                    className="w-full h-full"
                />
            </div>

            {/* Right: Lottie Animation */}
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-teal-400 text-center mb-12">About Me</h2>
                <p className="text-lg leading-relaxed">
                    Passionate web designer and MERN Stack developer. I create clean,
                    user-friendly websites that deliver real value. Quick learner,
                    detail-oriented, and a team player ready to contribute to impactful projects.
                </p>
            </div>
        </section>
    );
};

export default About;
