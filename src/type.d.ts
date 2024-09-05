export type User = {
  age: number;
  gender: string;
  weight: number;
  height: number;
  activity: number;
  objective: number;
  baseMetabolism: number;
  tracking?: Tracking[];
};

export type Tracking = {
  breakfast: number;
  lunch: number;
  dinner: number;
  snack: number;
};
