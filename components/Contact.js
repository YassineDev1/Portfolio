const Contact = () => {
  return (
    <section className="grid grid-cols-1 bg-white dark:bg-gray-500 md:grid-cols-2">
      <div className="hidden lg:block">
        <img
          src={"/FullStack.jpg"}
          alt="Full STack"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center w-full md:px-10 md:py-10 py-6 px-6 dark:bg-gray-500 bg-gray-100">
        <form
          action=""
          className="flex flex-col md:gap-4 gap-2 w-full lg:w-2/3 dark:bg-gray-300 bg-gray-50 rounded-md shadow-lg md:py-8 md:px-4 px-6 py-4 justify-center items-center"
        >
          <h1 className="text-2xl font-semibold">Contact</h1>
          <div className="w-full">
            Name:
            <input
              type="text"
              className="w-full h-10 border-2 border-gray-300 focus:border-blue-300  outline-none border-solid rounded-md"
            />
          </div>
          <div className="w-full">
            email:
            <input
              type="email"
              className="w-full h-10 border-2 border-gray-300 focus:border-blue-300  outline-none border-solid rounded-md"
            />
          </div>
          <div className="w-full">
            subject:
            <textarea  className="w-full h-28 border-2 border-gray-300 outline-none  focus:border-blue-200 border-solid rounded-md" />
          </div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact