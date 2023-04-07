import React from "react";
import { useMemo } from "react";

const ExerciseFive = ({ data1, data2 }) => {
  const output = useMemo(() => {
    if (data1.length !== data2.length) {
      throw new Error("Array length is not equal");
    } else {
      return data1.reduce((total, num, index) => {
        return total + num * data2[index];
      });
    }
  }, [data1, data2]);
  return (
    <>
      <b>ExerciseFive</b>
      <p>
        Output The sum of the two product corresponding element is :{" "}
        <span>{output}</span>{" "}
      </p>
    </>
  );
};
export default ExerciseFive;
