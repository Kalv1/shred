import { UserContext } from "@/hooks/useLocalData";
import { useContext } from "react";

const Macro = () => {
  const { user } = useContext(UserContext);

  const protein = () => {
    return (user.baseMetabolism * 0.3) / 4;
  };

  const lipide = () => {
    return (user.baseMetabolism * 0.25) / 9;
  };

  const glucide = () => {
    return (user.baseMetabolism * 0.45) / 4;
  };

  return (
    <div className="container mx-auto w-full">
      <h2 className="font-bold text-2xl font-clash">
        MACRO<span className="text-primary">.</span>
        <small className="text-xs font-normal ml-2">
          (Macronutrients for a healthy lifestyle)
        </small>
      </h2>
      <div className="grid-cols-1 md:grid-cols-3 grid gap-5 mt-3 lg:max-w-[40%] mx-auto">
        <div className="text-center gap-5 mt-3 font-clash">
          <p className="font-bold uppercase text-xl">Proteins<span className="text-primary">.</span></p>
          <p>{Math.round(protein())} grams/day ⋍ 30%</p>
        </div>
        <div className="text-center gap-5 mt-3 font-clash">
          <p className="font-bold uppercase text-xl">Lipides<span className="text-primary">.</span></p>
          <p>{Math.round(lipide())} grams/day ⋍ 25%</p>
        </div>
        <div className="text-center gap-5 mt-3 font-clash">
          <p className="font-bold uppercase text-xl">Glucides<span className="text-primary">.</span></p>
          <p>{Math.round(glucide())} grams/day ⋍ 45%</p>
        </div>
      </div>
    
    </div>
  );
};

export default Macro;
