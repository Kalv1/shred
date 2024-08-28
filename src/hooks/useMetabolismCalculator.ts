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
        return (
          13.707 * weight +
          492.3 * (height / 100) -
          6.673 * age +
          77.607 * activity
        );
      case "Female":
        return (
          9.74 * weight +
          172.9 * (height / 100) -
          4.737 * age +
          667.05 * activity
        );
      default:
        return 5;
    }
  };

  return {
    calcBaseMetabolism,
  };
};
