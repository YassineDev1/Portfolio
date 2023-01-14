import Typewriter from "typewriter-effect"
export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="py-1 text-3xl dark:text-gray-50">About Me</h3>
        <p className="px-0 py-2 leading-8 text-center text-gray-800 md:px-12 md:w-2/3 dark:text-gray-100 text-md">
          I have a variety of projects that I have worked on, some of which are
          available to view on this website. These projects showcase my skills,
          experience and my ability to deliver high-quality work in a timely
          manner.
        </p>
      </div>
      {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="flex-1 basis-1/3"></div>
        <div className="flex-1 basis-1/3"></div>
        <div className="flex-1 basis-1/3"></div>
        <div className="flex-1 basis-1/3"></div>
      </div> */}
      <div className="flex justify-center py-20">
        <Typewriter
          options={{
            strings: "Comming soon !",
            autoStart: true,
            loop: true,
            wrapperClassName:
              " py-2 text-center  mx-auto text-3xl font-medium text-red-500 md:text-5xl ",
            cursor: "",
            cursorClassName:
              " py-2 text-3xl font-medium text-blue-700 md:text-5xl ",
          }}
        />
      </div>
    </section>
  );
}
