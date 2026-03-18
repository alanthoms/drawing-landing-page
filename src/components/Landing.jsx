import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
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
        <section className="relative z-10 min-h-dvh w-full border border-transparent ">
          <div className="noisy fixed inset-0 z-[100] pointer-events-none opacity-[0.03]" />
          <h1
            id="title-text"
            className="title md:mt-32 mt-40 text-2xl md:text-[13vw] leading-none text-center text-green-600 opacity-[65] tracking-tight"
          >
            Daily Doodle
          </h1>

          <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
            <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto;">
              <div className="space-y-5 hidden md:block text-green-100">
                <p> Quiz for Car Enthusiasts</p>
                <p className="subtitle text-3xl -mb-2 text-green-500">
                  Show Off Your Knowledge
                </p>
              </div>
              <div>
                <p className="subtitle text-3xl -mb-2 text-green-300">
                  Idk whatever
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10  w-full border  border-transparent items:center min-h-screen flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center h:200px">
            <button className="px-20 py-8 text-2xl md:text-3xl  bg-green-600 text-white font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(38,238,38,0.8)] hover:box-transition-all uppercase tracking-tighter">
              <Link to="/">Login</Link>
            </button>
            <button className="px-20 py-8 text-2xl md:text-3xl border text-gray-500 bg-white border-white/20 transition-all duration-300 font-bold  hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:box-transition-all uppercase tracking-tighter">
              <Link to="/">Sign Up</Link>
            </button>
          </div>
        </section>

        <div className="bg-red-600 h-5 w-5"></div>
      </div>
    </div>
  );
};

export default Landing;
