import { Tracking, User } from "@/type";
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
    objective: 1,
    baseMetabolism: 0,
  },
  setUser: () => {},
});

export const useLocalData = () => {
  const saveMetaData = (user: User) => {
    localStorage.setItem("user-data", JSON.stringify(user));
  };

  const saveTracking = (tracking: Tracking[]) => {
    localStorage.setItem("tracking", JSON.stringify(tracking));
  };

  const restoreTracking = () => {
    const data = localStorage.getItem("tracking");

    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const restoreMetaData = () => {
    const data = localStorage.getItem("user-data");

    if (data) {
      return JSON.parse(data);
    } else {
      return {
        age: 18,
        gender: "Male",
        weight: 80,
        height: 180,
        activity: 1.2,
        objective: 1,
        baseMetabolism: 0,
      };
    }
  };

  return {
    saveMetaData,
    restoreMetaData,
    saveTracking,
    restoreTracking,
  };
};
