import Head from "next/head";
import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { motion as m } from "framer-motion";
import { data } from "../data/data";
import Loading from "../components/Loading";
import Contact from "../components/Contact";

const Navbar = lazy(() => import("../components/Navbar"));
const Resume = lazy(() => import("../components/Resume"));
const SocialMedia = lazy(() => import("../components/SocialMedia"));
const Skills = lazy(() => import("../components/Skills"));
const About = lazy(() => import("../components/About"));

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const darkModeState = useCallback(
    (darkMode) => {
      if (isLoaded) setDarkMode(darkMode);
      window.localStorage.setItem("darkModeState", JSON.stringify(darkMode));
    },
    [darkMode, isLoaded]
  );
  useEffect(() => {
    let currentState = window.localStorage.getItem("darkModeState");
    if (isLoaded) setDarkMode(JSON.parse(currentState));
  }, [isLoaded]);
  if (!isLoaded) return <Loading  loading={isLoaded}/>;
  return (
    <Suspense fallback={<Loading loading={isLoaded} />}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={darkMode ? "dark" : ""}
      >
        <Head>
          <title>EL MHERZI YASSINE Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="" />
        </Head>
        <main className="overflow-x-hidden relative bg-white dark:bg-gray-900">
          <section className="min-h-screen">
            <UserContext.Provider value={data}>
              <Navbar darkModeState={darkModeState} darkMode={darkMode} />
              <div className="px-10 md:px-20 lg:px-40">
                <Resume />
                <SocialMedia />
                <Skills />
              </div>
              <About />
              <Contact />
            </UserContext.Provider>
          </section>
        </main>
      </m.div>
    </Suspense>
  );
}
