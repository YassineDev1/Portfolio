import Image from "next/image"
const Contact = () => {
  return (
    <section className="grid  bg-white grid-cols-1 md:grid-cols-2">
      <div className="md:block hidden">
        <Image
          src={"/FullStack.jpg"}
          alt="Full STack"
          width={1200}
          height={800}
        />
      </div>
      <div className="flex py-4 justify-center items-center bg-gray-300">
        <form
          action=""
          className="flex flex-col gap-4 md:w-[800px] w-full justify-center items-center"
        >
          <h1 className="text-2xl font-semibold">Contact</h1>
          <div className="md:w-[450px]">
            Name:
            <input
              type="text"
              className="border-2 w-full h-10 rounded-sm border-solid border-black"
            />
          </div>
          <div className="md:w-[450px]">
            email:
            <input
              type="email"
              className="border-2 h-10 w-full rounded-sm border-solid border-black"
            />
          </div>
          <div className="md:w-[450px]">
            subject:
            <textarea rows={8} className="border-2 w-full rounded-sm border-solid border-black" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact