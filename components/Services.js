import Image from "next/image";
import myPicture from "../public/myPicture.jpeg";
import creativeTeam from "../public/creativeTeam.svg";

export default function Services() {
  return (
    <>
      <div className="relative mx-auto mt-20 overflow-hidden rounded-full w-80 h-80 md:h-96 md:w-96">
        <Image src={myPicture} alt="" layout="fill" objectFit="cover" />
      </div>
      <section>
        <div>
          <h3 className="py-4 text-3xl">My Services</h3>
          <p className="py-2 leading-8 text-gray-800 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            magnam corporis. Quibusdam molestias illo numquam
            <span className="text-blue-600"> agencies </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            <span className="text-blue-600"> aspernatur!</span>
          </p>
          <p className="py-2 leading-8 text-gray-800 text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, voluptate corrupti ipsam placeat est itaque?
          </p>
        </div>
        <div className="gap-10 lg:flex">
          <div className="p-10 my-10 text-center shadow-lg rounded-xl">
            <Image
              src={creativeTeam}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pt-8 pb-2 text-lg font-medium">Landing Pages</h3>
            <p className="py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              alias!
            </p>
            <h4 className="text-blue-600 oy-4"> Tools Used</h4>
            <p className="py-1 text-gray-800">ReactJs</p>
            <p className="py-1 text-gray-800">TailwindCss</p>
            <p className="py-1 text-gray-800">NodeJS</p>
          </div>
          <div className="p-10 my-10 text-center shadow-lg rounded-xl">
            <Image
              src={creativeTeam}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pt-8 pb-2 text-lg font-medium">Desktop Apps</h3>
            <p className="py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              alias!
            </p>
            <h4 className="text-blue-600 oy-4"> Tools Used</h4>
            <p className="py-1 text-gray-800">Rust</p>
            <p className="py-1 text-gray-800">PHP</p>
            <p className="py-1 text-gray-800">Docker</p>
          </div>
          <div className="p-10 my-10 text-center shadow-lg rounded-xl">
            <Image
              src={creativeTeam}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pt-8 pb-2 text-lg font-medium">Mobile Apps</h3>
            <p className="py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              alias!
            </p>
            <h4 className="text-blue-600 oy-4"> Tools Used</h4>
            <p className="py-1 text-gray-800">Java</p>
            <p className="py-1 text-gray-800">Kotlin</p>
            <p className="py-1 text-gray-800">NGINX</p>
          </div>
          <div className="p-10 my-10 text-center shadow-lg rounded-xl">
            <Image
              src={creativeTeam}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pt-8 pb-2 text-lg font-medium">Custom Software</h3>
            <p className="py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              alias!
            </p>
            <h4 className="text-blue-600 oy-4"> Tools Used</h4>
            <p className="py-1 text-gray-800">AngularJS</p>
            <p className="py-1 text-gray-800">TailwindCss</p>
            <p className="py-1 text-gray-800">Laravel8</p>
          </div>
        </div>
      </section>
    </>
  );
}
