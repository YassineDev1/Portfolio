import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-16 py-3 text-4xl text-gray-600">
      <AiFillFacebook className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
      <AiFillLinkedin className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
      <AiFillGithub className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
      <AiFillInstagram className="rounded-full cursor-pointer hover:text-gray-900 dark:hover:text-gray-200 hover:rounded-full " />
    </div>
  );
}
