import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="snap-mandatory w-full h-screen overflow-auto relative snap-y">

      <Header />
      <Hero />
      <Projects />
    </div>
    </>
  );
}
