import Image from "next/image";
import ref1 from "/public/myDoctor.PNG"
import ref2 from "../public/myDoctor1.PNG";
import ref3 from "../public/myDoctor2.PNG";
import ref4 from "../public/myDoctor3.PNG";
export default function Projects() {
  return (
    <section>
      <div className="text-center">
        <h3 className="py-1 text-3xl dark:text-gray-50">Portfolio</h3>
        <p className="py-2 leading-8 text-center text-gray-800 dark:text-gray-100 text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
          explicabo? Possimus numquam quam hic aliquid voluptate magnam nobis
          reiciendis sint. Reiciendis placeat rem autem provident ex dolorum
          iure incidunt libero!
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="flex-1 basis-1/3">
          <Image
            src={ref1}
            alt=""
            className="object-cover rounded-lg shadow-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="flex-1 basis-1/3">
          <Image
            src={ref2}
            alt=""
            className="object-cover rounded-lg shadow-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="flex-1 basis-1/3">
          <Image
            src={ref3}
            alt=""
            className="object-cover rounded-lg shadow-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="flex-1 basis-1/3">
          <Image
            src={ref4}
            alt=""
            className="object-cover rounded-lg shadow-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}
