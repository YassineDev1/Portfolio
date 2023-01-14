import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { FaReact, FaDocker, FaLaravel } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { motion as m } from "framer-motion";

const SkillsCards = ({ animation }) => {
  const data = useContext(UserContext);
  return (
    <m.div animate={animation} className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      {data &&
        data.map((item) => {
          return (
            <m.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              className="p-10 my-10 text-center shadow-lg rounded-xl dark:bg-white dark:text-gray-900"
            >
              {item.technology == "React" ? (
                <FaReact className="mx-auto text-6xl" />
              ) : (
                ""
              )}
              {item.technology == "Vue" ? (
                <RiVuejsFill className="mx-auto text-6xl" />
              ) : (
                ""
              )}
              {item.technology == "Docker" ? (
                <FaDocker className="mx-auto text-6xl" />
              ) : (
                ""
              )}
              {item.technology == "Laravel" ? (
                <FaLaravel className="mx-auto text-6xl" />
              ) : (
                ""
              )}
              <h3 className="pt-8 pb-2 text-lg font-medium">{item.project}</h3>
              <p className="py-2">{item.text}</p>
              <h4 className="text-blue-600 oy-4"> Tools Used</h4>
              {item.tools &&
                item.tools.map((e, i) => (
                  <p key={i} className="py-1 text-gray-800">
                    {e}
                  </p>
                ))}
            </m.div>
          );
        })}
    </m.div>
  );
};

export default SkillsCards;
