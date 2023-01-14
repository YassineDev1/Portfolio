import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion as m } from "framer-motion";

export default function Navbar({ darkModeState, darkMode }) {
  return (
    <m.nav className="flex justify-between w-full px-10 py-10 mb-12 shadow-lg dark:shadow-gray-600 md:px-20 lg:px-40 ">
      <m.h1
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl font-burtons dark:text-gray-200"
      >
        Yassine EL MHERZI
      </m.h1>
      <m.ul
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-end  md:justify-between md:w-[450px]"
      >
        <li className="hidden md:inline dark:text-gray-300">
          <Link href={"#about"}>About Me </Link>
        </li>
        <li className="hidden md:inline dark:text-gray-300">
          <Link href={"#skills"}>Services</Link>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={() => darkModeState(!darkMode)}
            className="text-2xl cursor-pointer dark:text-white"
          />
        </li>
        <li>
          <Link
            className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
            href="https://www.linkedin.com/in/yassine-elmherzi"
            target="_blank"
            replace
          >
            Contact
          </Link>
        </li>
      </m.ul>
    </m.nav>
  );
}
