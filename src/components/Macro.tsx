import { UserContext } from "@/hooks/useLocalData";
import { useContext } from "react";

const Macro = () => {
  const { user } = useContext(UserContext);

  return (
    <h2 className="font-bold text-2xl font-clash">
      MACRO<span className="text-primary">.</span>
    </h2>
  );
};

export default Macro;
