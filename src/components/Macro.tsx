import { UserContext } from "@/hooks/useLocalData";
import { useContext } from "react";

const Macro = () => {
  const { user } = useContext(UserContext);

  const protein = () => {
    return (user.baseMetabolism * 0.3) / 4;
  };

  const lipids = () => {
    return (user.baseMetabolism * 0.25) / 9;
  };

  const carbohydrates = () => {
    return (user.baseMetabolism * 0.45) / 4;
  };

  return (
    <div className="container mx-auto w-full">
      <h2 className="font-bold text-2xl font-clash text-center md:text-left">
        MACRO<span className="text-primary">.</span>
        <small className="text-xs font-normal ml-2 hidden md:inline-flex">
          (Macronutrients for a healthy lifestyle)
        </small>
      </h2>
      <div className="grid-cols-1 md:grid-cols-3 grid gap-5 mt-3 lg:max-w-[50%] mx-auto">
        <div className="text-center gap-5 mt-3 font-clash">
          <p className="font-bold uppercase text-xl">
            Proteins<span className="text-primary">.</span>
          </p>
          <p>{Math.round(protein())} grams/day ⋍ 30%</p>
        </div>
        <div className="text-center gap-5 mt-3 font-clash">
          <p className="font-bold uppercase text-xl">
            Lipids<span className="text-primary">.</span>
          </p>
          <p>{Math.round(lipids())} grams/day ⋍ 25%</p>
        </div>
        <div className="text-center gap-5 mt-3 font-clash">
          <p className="font-bold uppercase text-xl">
            Carbohydrates<span className="text-primary">.</span>
          </p>
          <p>{Math.round(carbohydrates())} grams/day ⋍ 45%</p>
        </div>
      </div>
    </div>
  );
};

export default Macro;
