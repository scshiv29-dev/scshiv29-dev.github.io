import React from "react";

export default function Hero() {
  return (
    <div className="hero w-full h-screen bg-base-200 section " id="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/me.png" className="max-w-sm rounded-lg " data-aos="fade-right" data-aos-duration="1500"/>
        <div data-aos="fade-left" data-aos-duration="1500">
          <div className="flex flex-row space-x-3">
            <h1 className="text-5xl font-bold">Welcome </h1>
            <h1 className="text-5xl font-bold">to </h1>
            <h1 className="text-5xl font-bold">my </h1>
            <h1 className="text-5xl font-bold">personal </h1>
            <h1 className="text-5xl font-bold">portfolio 👋</h1>
          </div>

          <div className="flex flex-row space-x-3">
            <h2 className="text-4xl font-bold">This </h2>
            <h2 className="text-4xl font-bold"> is </h2>
            <h2 className="text-4xl font-bold"> shivam </h2>
            <h2 className="text-4xl font-bold">chaudhary 💻</h2>
          </div>

          <p className="py-6 text-lg">
            I am a highly skilled full stack developer with experience in a
            variety of technologies including NodeJs, JavaScript, Python,
            Expressjs etc. I have expertise in developing and deploying web and
            mobile applications with a focus on creating efficient, scalable,
            and user-friendly solutions. My experience includes working with a
            wide range of front-end and back-end technologies, and my skills in
            problem-solving and attention to detail allow me to deliver
            high-quality software that meets the needs of users and clients. I
            am also familiar with cloud computing and database management.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
