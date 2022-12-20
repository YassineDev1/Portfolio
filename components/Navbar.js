import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { UserContext } from "../Context/UserContext";


export default function Navbar() {
  const {darkMode, setDarkMode} = useContext(UserContext)
  return (
    <nav className="flex justify-between py-10 mb-12">
      <h1 className="text-xl font-burtons dark:text-gray-200">
        Yassine EL MHERZI
      </h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl cursor-pointer dark:text-white"
          />
        </li>
        <li>
          <a
            className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-800"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
