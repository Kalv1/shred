import { useMetabolismCalculator } from "@/hooks/useMetabolismCalculator";
import { useLocalData, UserContext } from "@/hooks/useLocalData";
import Select from "@/components/Select";
import NumberPicker from "@/components/NumberPicker";
import { useContext } from "react";

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
    <div className="container mx-auto font-clash py-7">
      <h2 className="font-bold text-2xl">
        CALCULATOR<span className="text-primary">.</span>
        <small className="text-xs font-normal ml-2">(Harris-Benedict)</small>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8 mt-5">
        <Select
          value={user.gender}
          onChange={(value) => setUser({ ...user, gender: value.toString() })}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          placeholder="Select your gender"
        />
        <NumberPicker
          value={user.age}
          max={100}
          min={0}
          onChange={(value) => setUser({ ...user, age: +value })}
        />
        <NumberPicker
          value={user.weight}
          min={0}
          max={300}
          onChange={(value) => setUser({ ...user, weight: +value })}
        />
        <NumberPicker
          value={user.height}
          min={0}
          max={300}
          onChange={(value) => setUser({ ...user, height: +value })}
        />
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
        <button
          className="rounded bg-primary uppercase font-bold py-2 h-fit"
          onClick={() => handleValidate()}
        >
          Confirm
        </button>
      </div>
      {user.baseMetabolism !== 0 && (
        <>
          <h2 className="text-center mt-8 text-2xl font-bold">
            YOUR OBJECTIVE IS<span className="text-primary">.</span>
          </h2>
          <h3 className="text-center text-5xl font-bold mt-5">
            {Math.round(user.baseMetabolism)} kcal/day
          </h3>
        </>
      )}
    </div>
  );
};

export default Calculator;
