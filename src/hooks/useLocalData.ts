import { User } from "@/type";
import { createContext, Dispatch } from "react";

export const UserContext = createContext<{
  user: User;
  setUser: Dispatch<User>;
}>({
  user: {
    age: 18,
    gender: "Male",
    weight: 70,
    height: 180,
    activity: 1.2,
    baseMetabolism: 0,
  },
  setUser: () => {},
});

export const useLocalData = () => {
  const saveMetaData = (user: User) => {
    const data = {
      gender: user.gender,
      age: user.age,
      weight: user.weight,
      height: user.height,
      activity: user.activity,
      baseMetabolism: user.baseMetabolism,
    };
    localStorage.setItem("user-data", JSON.stringify(data));
  };

  const restoreMetaData = () => {
    const data = localStorage.getItem("user-data");

    if (data) {
      return JSON.parse(data);
    } else {
      return {
        age: 18,
        gender: "Male",
        weight: 70,
        height: 180,
        activity: 1.2,
        baseMetabolism: 0,
      };
    }
  };

  return {
    saveMetaData,
    restoreMetaData,
  };
};
