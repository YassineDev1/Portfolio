import Image from "next/image";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
export default function About() {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "keyframes",
          duration: 1.2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView, animation]);

  return (
    <m.section
      drag={false}
      animate={animation}
      ref={ref}
      id="about"
      className="py-12 px-8 dark:text-gray-200 dark:bg-gray-900  bg-white w-full"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="py-1 text-3xl ">About Me</h3>
        <p className="px-0 py-2 leading-8 text-center md:px-12 md:w-2/3text-md">
          I have a variety of projects that I have worked on, some of which are
          available to view on this website. These projects showcase my skills,
          experience and my ability to deliver high-quality work in a timely
          manner.
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1  md:py-20">
        <div className="md:border-r-2 md:border-b-0 border-b-2 py-12 border-solid dark:border-gray-200  border-black">
          <Image
            draggable={false}
            src="/WebDev.png"
            priority
            width={700}
            height={700}
            alt="Web Dev"
            className="m-auto rounded-lg "
          />
        </div>
        <div className="flex text-base md:text-xl md:mt-0 mt-8 font-medium md:justify-center gap-12 flex-col items-center">
          <h1 className="md:text-4xl text-3xl">Collaborations </h1>
          <div>Front End Developer</div>
          <div>Backend Developer</div>
          <div>DevOps Engineer</div>
          <div>Data Scientist</div>
        </div>
      </div>
    </m.section>
  );
}
