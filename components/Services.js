import Image from "next/legacy/image";
import myPicture from "../public/myPicture.jpeg";
import ServicesCards from "./ServicesCards";

export default function Services() {
  return (
    <>
      <div className="relative mx-auto mt-20 overflow-hidden rounded-full w-80 h-80 md:h-96 md:w-96">
        <Image src={myPicture} alt="" layout="fill" objectFit="cover" />
      </div>
      <section>
        <div className="dark:text-white">
          <h3 className="py-4 text-3xl">My Services</h3>
          <p className="py-2 leading-8 text-gray-800 dark:text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            magnam corporis. Quibusdam molestias illo numquam
            <span className="text-blue-600"> agencies </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            <span className="text-blue-600"> aspernatur!</span>
          </p>
          <p className="py-2 leading-8 text-gray-800 text-md dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, voluptate corrupti ipsam placeat est itaque?
          </p>
        </div>
        <ServicesCards />
      </section>
    </>
  );
}
