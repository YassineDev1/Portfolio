import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import {
  FaReact,
  FaDocker,
  FaLaravel,
  FaAngular,
  FaNodeJs,
  FaReacteurope,
  FaCss3Alt,
} from "react-icons/fa";
import {SiKotlin} from "react-icons/si"
import { RiVuejsFill } from "react-icons/ri";
import { motion as m } from "framer-motion";

const SkillsCards = ({ animation }) => {
  const { data } = useContext(UserContext);

  const technologyIcons = {
    React: FaReact,
    Vue: RiVuejsFill,
    Docker: FaDocker,
    Laravel: FaLaravel,
    Angular: FaAngular,
    "Node.js": FaNodeJs,
    "React Native": FaReacteurope,
    "Tailwind CSS": FaCss3Alt,
    Kotlin: SiKotlin,
  };

  return (
    <m.div
      drag={false}
      animate={animation}
      className="grid grid-cols-1 mx-auto gap-12  lg:grid-cols-3"
    >
      {data &&
        data.map((category) => (
          <div className="py-4" key={category.id}>
            <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              {category.skills.map((skill, index) => {
                const IconComponent = technologyIcons[skill.name];
                return (
                  <m.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="p-6 text-center shadow-lg rounded-xl dark:bg-white dark:text-gray-900"
                  >
                    {IconComponent && (
                      <IconComponent className="mx-auto text-6xl" />
                    )}
                    <h3 className="pt-4 pb-2 text-lg font-medium">
                      {skill.name}
                    </h3>
                    <p className="py-2">{skill.description}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        ))}
    </m.div>
  );
};

export default SkillsCards;
