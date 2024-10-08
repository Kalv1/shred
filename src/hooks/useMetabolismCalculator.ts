import { User } from "@/type";

export const useMetabolismCalculator = (user: User) => {
  const calcBaseMetabolism = () => {
    switch (user.gender) {
      case "Male":
        return (
          ((10 * user.weight + 6.25 * user.height - 5 * user.age + 5) *
          user.activity) * user.objective
        );
      case "Female":
        return (
          ((10 * user.weight + 6.25 * user.height - 5 * user.age - 161) *
          user.activity) * user.objective
        );
      default:
        return 5;
    }
  };

  return {
    calcBaseMetabolism,
  };
};
