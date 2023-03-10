import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Navbar() {
  const Context = useContext(UserContext)
  const {darkMode, setDarkMode} = Context;
  return (
    <m.nav className="flex items-center justify-around w-full gap-8 px-6 py-10 mb-12 shadow-md md:gap-0 md:justify-between dark:shadow-gray-600 dark:shadow-sm md:px-20 lg:px-40 ">
      <m.h1
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:text-xl text-md font-burtons dark:text-[#cccccc] dark:text-semibold"
      >
        <Link href={"/"} draggable={false} >Yassine EL MHERZI</Link>
      </m.h1>
      <m.ul
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-end   text-center  md:justify-between md:w-[450px]"
      >
        <li className="hidden px-2 link md:inline text-gray-900 dark:text-[#ccccce] dark:hover:text-[#ffffff] ">
          <Link href={"#about"} draggable={false}>About Me </Link>
        </li>
        <li className="hidden px-2 link md:inline text-gray-900 dark:text-[#ccccce] w-[87px] dark:hover:text-[#ffffff]">
          <Link href={"#skills"} draggable={false}>Services</Link>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl cursor-pointer dark:text-white"
          />
        </li>
        <li>
          <Link 
            draggable={false}
            className="px-4 py-2 ml-8 text-sm text-white rounded-md md:text-md bg-gradient-to-r from-blue-500 to-blue-800"
            // href="https://www.linkedin.com/in/yassine-elmherzi"
            href={"#contact"}
            // target="_blank"
            // replace
          >
            Contact
          </Link>
        </li>
      </m.ul>
    </m.nav>
  );
}
