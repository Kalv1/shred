import { useMetabolismCalculator } from "@/hooks/useMetabolismCalculator";
import { useLocalData, UserContext } from "@/hooks/useLocalData";
import Select from "@/components/Select";
import NumberPicker from "@/components/NumberPicker";
import { useContext } from "react";
import { Icon } from "@iconify/react";

const Calculator = () => {
  const { user, setUser } = useContext(UserContext);

  const { calcBaseMetabolism } = useMetabolismCalculator(user);

  const { saveMetaData } = useLocalData();

  const handleValidate = () => {
    const metabolism = calcBaseMetabolism();

    saveMetaData({
      ...user,
      baseMetabolism: metabolism,
    });

    setUser({ ...user, baseMetabolism: metabolism });
  };

  return (
    <div className="container mx-auto font-clash mb-7">
      <h2 className="font-bold text-2xl uppercase text-center md:text-left">
        Calculator<span className="text-primary">.</span>
        <small className="text-xs font-normal ml-2 hidden md:inline-flex">
          (Harris-Benedict)
        </small>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-7 gap-8 mt-5">
        <label>
          <p className="font-bold text-md uppercase text-[#8D8D8D]">
            Gender
            <Icon
              className="inline-flex ml-1"
              icon="fa:transgender"
              color="8D8D8D"
            ></Icon>
          </p>

          <Select
            value={user.gender}
            onChange={(value) => setUser({ ...user, gender: value.toString() })}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            placeholder="Select your gender"
          />
        </label>
        <label>
          <p className="font-bold text-md uppercase text-[#8D8D8D]">
            Age
            <Icon
              className="inline-flex ml-1"
              icon="ph:user"
              color="8D8D8D"
            ></Icon>
          </p>
          <NumberPicker
            value={user.age}
            max={100}
            min={0}
            onChange={(value) => setUser({ ...user, age: +value })}
          />
        </label>

        <label>
          <p className="font-bold text-md uppercase text-[#8D8D8D]">
            Weight <small>(kg)</small>
            <Icon
              className="inline-flex ml-1"
              icon="ion:scale-sharp"
              color="8D8D8D"
            ></Icon>
          </p>
          <NumberPicker
            value={user.weight}
            min={0}
            max={300}
            onChange={(value) => setUser({ ...user, weight: +value })}
          />
        </label>

        <label>
          <p className="font-bold text-md uppercase text-[#8D8D8D]">
            Height <small>(cm)</small>
            <Icon
              className="inline-flex ml-1"
              icon="mdi:ruler"
              color="8D8D8D"
            ></Icon>
          </p>
          <NumberPicker
            value={user.height}
            min={0}
            max={300}
            onChange={(value) => setUser({ ...user, height: +value })}
          />
        </label>

        <label>
          <p className="font-bold text-md uppercase text-[#8D8D8D]">
            Activity
            <Icon
              className="inline-flex ml-1"
              icon="mdi:run"
              color="8D8D8D"
            ></Icon>
          </p>
          <Select
            value={user.activity}
            onChange={(value) => setUser({ ...user, activity: +value })}
            options={[
              { value: 1.2, label: "A bit active" },
              { value: 1.4, label: "Active" },
              { value: 1.8, label: "Very active" },
            ]}
            placeholder="Select your gender"
          />
        </label>

        <label>
          <p className="font-bold text-md uppercase text-[#8D8D8D]">
            Objective
            <Icon
              className="inline-flex ml-1"
              icon="mdi:run"
              color="8D8D8D"
            ></Icon>
          </p>
          <Select
            value={user.objective}
            onChange={(value) => setUser({ ...user, objective: +value })}
            options={[
              { value: 0.85, label: "Weight loss" },
              { value: 1, label: "Maintain weight" },
              { value: 1.25, label: "Build muscle" },
            ]}
            placeholder="Select your gender"
          />
        </label>
        <div className="w-full flex items-end">
          <button
            className="rounded bg-primary uppercase font-bold py-2.5 h-fit w-full border border-white/15"
            onClick={() => handleValidate()}
          >
            Confirm
          </button>
        </div>
      </div>
      {user.baseMetabolism !== 0 && (
        <>
          <h2 className="text-center mt-8 text-xl font-bold">
            KCAL TARGET<span className="text-primary">.</span>
          </h2>
          <h3 className="text-center text-4xl font-bold mt-5">
            {Math.round(user.baseMetabolism)} kcal/day
          </h3>
        </>
      )}
    </div>
  );
};

export default Calculator;
