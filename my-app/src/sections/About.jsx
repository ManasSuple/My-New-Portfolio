import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmail";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative grid-default-color grid-1 flex items-end overflow-hidden">
          {/* Centered, full-height background image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="assets/self-photo.jpg"
              className="h-full w-full object-cover opacity-90"
              alt="Self"
            />
          </div>
          {/* Overlay text content */}
          <div className="relative z-10 w-full text-center p-6">
            <p className="headtext">Hi, I'm Manas Suple</p>
            <p className="subtext">
              A web developer with a knack for clean design and smart solutions.
              I build responsive websites and apps using ReactJS and
              FlutterFlow, blending creativity with real-world functionality.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">Manas.codes</p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Learner"
            />
            <Card
              style={{ rotate: "30deg", top: "60%", left: "45%" }}
              text="Focused"
            />
            <Card
              style={{ rotate: "65deg", bottom: "40%", left: "70%" }}
              text="Resilient"
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Persistent"
            />
            <Card
              style={{ rotate: "20deg", top: "35%", left: "65%" }}
              containerRef={grid2Container}
              image="assets/logos/visualstudiocode.svg"
            />

            <Card
              style={{ rotate: "-12deg", top: "5%", left: "48%" }}
              containerRef={grid2Container}
              image="assets/logos/vitejs.svg"
            />
            <Card
              style={{ rotate: "54deg", top: "72%", left: "10%" }}
              containerRef={grid2Container}
              image="assets/logos/react.svg"
            />
            <Card
              style={{ rotate: "-37deg", bottom: "42%", left: "43%" }}
              containerRef={grid2Container}
              image="assets/logos/github.svg"
            />
            <Card
              style={{ rotate: "28deg", top: "80%", left: "28%" }}
              containerRef={grid2Container}
              image="assets/logos/git.svg"
            />
            <Card
              style={{ rotate: "-22deg", bottom: "60%", left: "17%" }}
              containerRef={grid2Container}
              image="assets/logos/css3.svg"
            />
            <Card
              style={{ rotate: "-41deg", bottom: "8%", left: "91%" }}
              containerRef={grid2Container}
              image="assets/logos/html5.svg"
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Living in Mumbai, India </p>
            <p className="subtext">
              Open to remote work across any time zone. Also available for
              on-site opportunities worlwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Excited to collaborate? Let’s chat and make it happen
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I work with ReactJS for frontend and FlutterFlow for app
              prototyping. Currently, I’m learning Node.js for backend
              development. I also have hands-on experience with Excel, Tableau,
              and a strong foundation in networking and cybersecurity.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
