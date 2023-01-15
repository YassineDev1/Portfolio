import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion as m } from "framer-motion";

export default function Navbar({ darkModeState, darkMode }) {
  return (
    <m.nav className="flex justify-between w-full px-10 py-10 mb-12 shadow-md dark:shadow-gray-600 dark:shadow-sm md:px-20 lg:px-40 ">
      <m.h1
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl font-burtons dark:text-gray-200"
      >
        <Link href={"/"}>Yassine EL MHERZI</Link>
      </m.h1>
      <m.ul
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-end text-lg  text-center  md:justify-between md:w-[450px]"
      >
        <li className="hidden px-2 link md:inline text-gray-900 dark:text-[#a0a0a0] dark:hover:text-[#ffffff] ">
          <Link href={"#about"}>About Me </Link>
        </li>
        <li className="hidden px-2 link md:inline text-gray-900 dark:text-[#a0a0a0] w-[87px] dark:hover:text-[#ffffff]">
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
