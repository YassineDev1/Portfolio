import Image from "next/image";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
export default function About() {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
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
      animate={animation}
      ref={ref}
      id="about"
      className="py-12 dark:text-gray-800 left-0  bg-white w-full"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="py-1 text-3xl ">About Me</h3>
        <p className="px-0 py-2 leading-8 text-center text-gray-800 md:px-12 md:w-2/3text-md">
          I have a variety of projects that I have worked on, some of which are
          available to view on this website. These projects showcase my skills,
          experience and my ability to deliver high-quality work in a timely
          manner.
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1  py-20">
        <div className="md:border-r-2 md:border-b-0 border-b-2 border-solid  border-black">
          <Image
            src="/WebDev.png"
            priority
            width={700}
            height={700}
            alt="Web Dev"
          />
        </div>
        <div className="flex text-xl font-semibold justify-center gap-12 flex-col items-center">
          <h1 className="text-4xl">Collaborations </h1>
          <div>Front End Developer</div>
          <div>Backend Developer</div>
          <div>DevOps Engineer</div>
          <div>Data Scientist</div>
        </div>
      </div>
    </m.section>
  );
}
