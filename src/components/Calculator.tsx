import { useMetabolismCalculator } from "@/hooks/useMetabolismCalculator";
import { useLocalData } from "@/hooks/useLocalData";
import Select from "@/components/Select";
import NumberPicker from "@/components/NumberPicker";

const Calculator = () => {
    const { calcBaseMetabolism, baseMetabolism,  gender, age, weight, height, activity, setGender, setAge, setWeight, setHeight, setActivity, setBaseMetabolism } = useMetabolismCalculator();
    const { saveMetaData } = useLocalData();


    const handleValidate = () => {
        const metabolism = calcBaseMetabolism();
        setBaseMetabolism(metabolism);

        console.log(gender, age, weight, height, activity)
    
        saveMetaData();
      };


    return (
        <div className="w-full relative bg-[#161616] mt-48 mb-64">
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
              className="rounded bg-primary uppercase font-bold py-2 h-fit"
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
    )
}

export default Calculator;