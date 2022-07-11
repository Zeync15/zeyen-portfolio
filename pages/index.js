import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

// sensei: https://www.youtube.com/watch?v=CMx51wpd7g4&ab_channel=CodeCommerce

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ze Yen | Front-end Web Developer</title>
        <meta name="description" content="Chai Ze Yen Portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Experiences />
      <Projects />
      <Skills />
    </div>
  );
}
