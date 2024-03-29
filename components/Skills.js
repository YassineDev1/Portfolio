import Image from "next/legacy/image";
import myPicture from "../public/myPicture.jpeg";
import {useInView} from "react-intersection-observer" 
import { lazy, useEffect } from "react";
import {useAnimation} from "framer-motion"

const SkillsCards = lazy(() => import("./SkillsCards"));
export default function Skills() {
  const animation = useAnimation()
  const {ref, inView} = useInView({
    threshold: 0.1
  })
  useEffect(() => {
    if(inView){
      animation.start({
          x:0,
          transition: {
            type: "spring",
            duration: 1.2,
            bounce: 0.3
          },
      })
    }
    if(!inView){
        animation.start({
          x: "-100vw"
        })
    }
  },[inView, animation])
  return (
    <>
      <div className="relative mx-auto mt-12 mb-28 overflow-hidden rounded-full w-[300px] h-[300px]">
        <Image draggable={false} src={myPicture} alt=""  layout="fill" objectFit="cover" />
      </div>
      <section className="flex flex-col items-center justify-center gap-8 max-w-full text-center" ref={ref}>
        <div id="skills" className="flex flex-col items-center  dark:text-white">
          <h3 className="py-4 text-3xl">My Skills</h3>
          <p className="px-0 leading-8 text-gray-800 md:px-12 md:w-2/3 dark:text-white text-md">
            I am proficient in a variety of programming languages, frameworks
            and tools including ReactJS, JavaScript, HTML, CSS, Node.js, Redux,
            React Router and Webpack. I am also familiar with Agile development
            methodologies and Git for version control.
          </p>
        </div>
        <SkillsCards animation={animation} />
      </section>
    </>
  );
}
