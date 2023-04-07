import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Scroll from "@/components/Scroll";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className=" scroll-auto w-full h-screen scroll-smooth  relative ">
        <Header />
        <Hero />
        <Projects />
      </div>
    </>
  );
}
