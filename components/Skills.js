import Image from "next/legacy/image";
import myPicture from "../public/myPicture.jpeg";
import SkillsCards from "./SkillsCards";

export default function Skills() {
  return (
    <>
      <div className="relative mx-auto mt-20 overflow-hidden rounded-full w-80 h-80 md:h-96 md:w-96">
        <Image src={myPicture} alt="" layout="fill" objectFit="cover" />
      </div>
      <section>
        <div id="skills" className="dark:text-white">
          <h3 className="py-4 text-3xl">My Skills</h3>
          <p className="py-2 leading-8 text-gray-800 dark:text-white text-md">
            I am proficient in a variety of programming languages, frameworks
            and tools including ReactJS, JavaScript, HTML, CSS, Node.js, Redux,
            React Router and Webpack. I am also familiar with Agile development
            methodologies and Git for version control.
          </p>
        </div>
        <SkillsCards />
      </section>
    </>
  );
}
