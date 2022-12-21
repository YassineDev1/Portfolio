import Typewriter from "typewriter-effect";

export default function Resume() {
  return (
    <div className="p-10 text-center ">
      <Typewriter
        options={{
          strings: "Yassine EL MHERZI",
          autoStart: true,
          loop: false,

          wrapperClassName:
            "max-w-xl py-2 text-3xl font-medium text-blue-700 md:text-5xl ",
          cursor: "",
          cursorClassName:
            "max-w-xl py-2 text-3xl font-medium text-blue-700 md:text-5xl ",
        }}
      />
      <Typewriter
        className="py-2 text-2xl md:text-3xl dark:text-white"
        options={{
          strings: ["MERN Stack Developer", "Java Developer", "PHP Developer"],
          autoStart: true,
          loop: true,
          wrapperClassName: "py-2 text-xl md:text-2xl dark:text-white",
          cursor: "",
          cursorClassName: "py-2 text-xl md:text-2xl dark:text-white",
        }}
      />
      <p className="max-w-xl py-5 mx-auto leading-8 text-gray-800 dark:text-gray-300 text-md md:text-xl ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio eveniet
        eaque cupiditate. Itaque recusandae culpa libero dolores odio quibusdam
        velit.
      </p>
    </div>
  );
}
