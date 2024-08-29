import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Alert from "@/components/Alert";
import sparkles from "@/assets/svg/sparkles.svg";
import flare from "@/assets/png/flare.png";
import Select from "@/components/Select";
import NumberPicker from "@/components/NumberPicker";
import { useMetabolismCalculator } from "./hooks/useMetabolismCalculator";
import { useLocalData } from "@/hooks/useLocalData";

const App = () => {
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(18);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);
  const [activity, setActivity] = useState(1.2);
  const [baseMetabolism, setBaseMetabolism] = useState<number>(0);

  const { saveMetaData, restoreMetaData } = useLocalData();
  const { calcBaseMetabolism } = useMetabolismCalculator();

  useEffect(() => {
    const data = restoreMetaData();
    if (data) {
      setGender(data.gender);
      setAge(data.age);
      setWeight(data.weight);
      setHeight(data.height);
      setActivity(data.activity);
      setBaseMetabolism(data.baseMetabolism);
    }
  }, []);

  const handleValidate = () => {
    const metabolism = calcBaseMetabolism(
      gender,
      age,
      weight,
      height,
      activity
    );
    setBaseMetabolism(metabolism);

    saveMetaData({
      gender,
      age,
      weight,
      height,
      activity,
      baseMetabolism: metabolism,
    });
  };

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
            <small className="text-xs font-normal ml-2">
              (Harris-Benedict)
            </small>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8 mt-5">
            <Select
              value={gender}
              onChange={(value) => setGender(value.toString())}
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
              ]}
              placeholder="Select your gender"
            />
            <NumberPicker value={age} max={100} min={0} onChange={setAge} />
            <NumberPicker
              value={weight}
              min={0}
              max={300}
              onChange={setWeight}
            />
            <NumberPicker
              value={height}
              min={0}
              max={300}
              onChange={setHeight}
            />
            <Select
              value={activity}
              onChange={(value) => setActivity(+value)}
              options={[
                { value: 1.2, label: "A bit active" },
                { value: 1.4, label: "Active" },
                { value: 1.8, label: "Very active" },
              ]}
              placeholder="Select your gender"
            />
            <button
              className="rounded bg-primary uppercase font-bold"
              onClick={() => handleValidate()}
            >
              Confirm
            </button>
          </div>
          {baseMetabolism !== 0 && (
            <>
              <h2 className="text-center mt-8 text-2xl font-bold">
                YOUR OBJECTIVE IS<span className="text-primary">.</span>
              </h2>
              <h3 className="text-center text-5xl font-bold mt-5">
                {Math.round(baseMetabolism)} kcal/day
              </h3>
              <h2 className="font-bold text-2xl">
                MACRO<span className="text-primary">.</span>
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
