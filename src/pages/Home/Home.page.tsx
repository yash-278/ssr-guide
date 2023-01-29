import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";

const Home = () => {
  return (
    <div className="App bg-mirage h-screen overflow-y-hidden">
      <Navbar />
      <div className="h-full bg-hero-bg bg-cover bg-bottom">
        <div className="bg-mirage h-full bg-opacity-90 text-white">
          <div className="absolute top-1/2 -translate-y-1/2 mx-10 uppercase font-bold italic">
            <h1 className="tracking-wide text-3xl md:text-4xl">WELCOME</h1>
            <p className="my-3 text-sm md:text-base">
              This is a Fan-made Guide project for Static Shift Racing & is still Work in Progress.
            </p>
            <p className="text-sm md:text-base">
              Please be patient for the upcoming updates regarding the guide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
