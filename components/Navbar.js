import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion as m } from "framer-motion";

export default function Navbar({ darkModeState, darkMode }) {
  return (
    <m.nav
      className="flex justify-between py-10 mb-12"
    >
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
        className="flex items-center"
      >
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
