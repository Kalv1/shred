import { useMetabolismCalculator } from "@/hooks/useMetabolismCalculator";


export const useLocalData = () => {

  const { setGender, setAge, setWeight, setHeight, setActivity, setBaseMetabolism, gender, age, weight, height, activity, baseMetabolism } = useMetabolismCalculator();


  const saveMetaData = () => {
    console.log(gender, age, weight, height, activity)
    const data = {
      gender,
      age,
      weight,
      height,
      activity,
      baseMetabolism
    }
    localStorage.setItem("user-data", JSON.stringify(data));
  };

  const restoreMetaData = () => {
    const data = localStorage.getItem("user-data");
    if (data) {
      const parsedData = JSON.parse(data);

      console.log('parsedData',parsedData)

      setGender(parsedData.gender);
      console.log(parsedData.gender, gender)

      setAge(parsedData.age);
      console.log(parsedData.age, age)

      setWeight(parsedData.weight);
      console.log(parsedData.weight, weight)

      setHeight(parsedData.height);
      setActivity(parsedData.activity);
      setBaseMetabolism(parsedData.baseMetabolism);
    }
  };

  return {
    saveMetaData,
    restoreMetaData,
  };
};
