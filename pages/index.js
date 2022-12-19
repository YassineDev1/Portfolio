import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Services from "../components/Services";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = (value) => {
    console.log(value)
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>EL MHERZI YASSINE Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <Navbar changetoDarkMode={darkMode => setDarkMode(!darkMode)} darkMode={darkMode} />
          <Resume />
          <SocialMedia />
          <Services />
          <Projects />
        </section>
      </main>
    </div>
  );
}
