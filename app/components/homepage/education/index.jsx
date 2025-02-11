// @flow strict

"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  const targetSection = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (targetSection) => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 1, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  return (
    <div id="education" ref={targetSection} className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="wrapper">
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443] seq"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md seq">
              Educations
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443] seq"></span>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 seq">
            <div className="flex justify-center items-start seq">
              <div className="w-3/4 h-3/4 seq">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-6 seq">
                {
                  educations.map(education => (
                    <GlowCard key={education.id} identifier={`education-${education.id}`}>
                      <div className="p-3 relative text-white">
                        <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {education.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                            {education.id % 2 ? <BsPersonWorkspace size={36} /> : <PiCertificateFill size={36} />}
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {education.title}
                            </p>
                            <p className="text-sm sm:text-base">{education.institution}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;