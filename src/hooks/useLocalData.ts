export const useLocalData = () => {
  const saveMetaData = (data: {
    gender: string;
    age: number;
    weight: number;
    height: number;
    activity: number;
    baseMetabolism: number;
  }) => {
    localStorage.setItem("user-data", JSON.stringify(data));
  };

  const restoreMetaData = () => {
    const data = localStorage.getItem("user-data");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };

  return {
    saveMetaData,
    restoreMetaData,
  };
};
