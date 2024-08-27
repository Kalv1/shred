import { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import sparkles from "./assets/svg/sparkles.svg";
import flare from "./assets/png/flare.png";
import Select from "./components/Select";

const App = () => {
  const [gender, setGender] = useState("Male");

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="mx-auto container w-full">
        <Navbar
          navItems={[
            {
              name: "CALCULATOR",
              link: "/",
            },
            {
              name: "MACRO",
              link: "/",
            },
            {
              name: "TRACKING",
              link: "/",
            },
          ]}
        />
        <div className="relative mt-20">
          <img
            src={flare}
            alt="flares"
            className="absolute left-1/2 translate-x-[-50%] -top-64 w-[1200px] h-[1200px] select-none pointer-events-none"
          />
          <Alert
            className="mx-auto relative z-10"
            message="Discover the benefit of tracking your body composition to improuve yourself"
            icon={sparkles}
          >
            <p>
              Discover the <span className="text-primary">benefit</span> of
              tracking your body composition to improuve{" "}
              <span className="text-primary">yourself</span>
            </p>
          </Alert>
          <h1 className="text-center font-clash font-bold text-7xl leading-tight mt-28">
            The <span className="text-primary">All-in-One</span>
            <br /> solution for training
          </h1>
          <p className="text-center font-inter mt-8 text-xl font-bold text-secondary">
            If you want to start weight training and track your <br />
            performance, you've come to the right place.
          </p>
        </div>
      </div>
      <div className="w-full relative bg-[#161616] mt-48">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent left-1/2 -translate-x-1/2 absolute top-0 z-[2]" />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent left-1/2 -translate-x-1/2 absolute bottom-0 z-[2]" />
        <div className="container mx-auto font-clash py-7">
          <h2 className="font-bold text-2xl">
            CALCULATOR<span className="text-primary">.</span>
          </h2>
          <Select
            value={gender}
            onChange={setGender}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            placeholder="Select your gender"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
