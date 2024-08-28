export const useMetabolismCalculator = () => {
  const calcBaseMetabolism = (
    gender: string,
    age: number,
    weight: number,
    height: number,
    activity: number
  ) => {
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
  };
};
