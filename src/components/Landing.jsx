import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import LiquidEther from "./LiquidEther";
const Landing = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    gsap.from(heroSplit.chars, {
      yPercent: -50,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      opacity: 0.1,
    });

    paraSplit.lines.forEach((line) => {
      line.classList.add("line");
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="py-10">
      <div>
        <section className="absolute inset-0 w-full h-full">
          <LiquidEther
            colors={["#02022b", "#3300ff", "#03ecfc"]}
            mouseForce={10}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={true}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            color0="#022C22"
            color1="#00FF66"
            color2="#34D399"
          />
          <h1
            id="title-text"
            className="title absolute inset-x-0 top-1/2 -translate-y-1/2 -mt-10 z-[200] text-2xl md:text-[13vw] leading-none text-center text-white tracking-tight  duration-300 ease-in-out  text-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Doodlog
          </h1>

          <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
            <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto;">
              <div className="space-y-5 hidden md:block text-blue-200">
                <p> Sketch. Share. Improve.</p>
                <p className="subtitle text-3xl -mb-2 text-blue-500">
                  Build your creative streak
                </p>
              </div>
              <div>
                <p className="subtitle text-3xl -mb-2 text-blue-300">
                  Make it a habit
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
