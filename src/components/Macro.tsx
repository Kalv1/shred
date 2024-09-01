import { UserContext } from "@/hooks/useLocalData";
import { useContext, useMemo } from "react";

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
    <div className="container mx-auto">
      <h2 className="font-bold text-2xl font-clash">
        MACRO<span className="text-primary">.</span>
        <small className="text-xs font-normal ml-2">
          (Macronutrients for a healthy lifestyle)
        </small>
      </h2>
      <div className="flex items-center gap-5 mt-3 font-clash">
        <p className="font-bold uppercase text-xl">Protein :</p>
        <p>{Math.round(protein())} grams/day</p>
      </div>
      <div className="flex items-center gap-5 mt-3 font-clash">
        <p className="font-bold uppercase text-xl">Lipides :</p>
        <p>{Math.round(lipide())} grams/day</p>
      </div>
      <div className="flex items-center gap-5 mt-3 font-clash">
        <p className="font-bold uppercase text-xl">Glucide :</p>
        <p>{Math.round(glucide())} grams/day</p>
      </div>
    </div>
  );
};

export default Macro;
