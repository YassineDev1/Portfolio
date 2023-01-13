import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import {motion as m} from "framer-motion"

export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-16 py-3 text-4xl text-gray-600">
      <m.span whileHover={{ scale: 1.5 }}>
        <AiFillFacebook className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
      </m.span>
      <m.span whileHover={{ scale: 1.5 }}>
        <AiFillLinkedin className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
      </m.span>
      <m.span whileHover={{ scale: 1.5 }}>
        <AiFillGithub className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
      </m.span>
      <m.span whileHover={{ scale: 1.5 }}>
        <AiFillInstagram className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
      </m.span>
    </div>
  );
}
