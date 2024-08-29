import { useState, useEffect } from "react";

export const useMetabolismCalculator = () => {

  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(18);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);
  const [activity, setActivity] = useState(1.2);
  const [baseMetabolism, setBaseMetabolism] = useState<number>(0);

  useEffect(() => {
    console.log('je suis modifie')
  }, [gender, age, weight, height, activity]);


  const calcBaseMetabolism = () => {
    switch (gender) {
      case "Male":
        return (10 * weight + 6.25 * height - 5 * age + 5) * activity;
      case "Female":
        return (10 * weight + 6.25 * height - 5 * age - 161) * activity;
      default:
        return 5;
    }
  };

  return {
    calcBaseMetabolism,
    gender,
    age,
    weight,
    height,
    activity,
    baseMetabolism,
    setBaseMetabolism,
    setGender,
    setAge,
    setWeight,
    setHeight,
    setActivity,
  };
};
