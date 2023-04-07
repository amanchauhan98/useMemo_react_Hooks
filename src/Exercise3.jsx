import React from "react";
import { useMemo } from "react";

const ExerciseThree = ({ data }) => {
  let arr = [];
  const result = useMemo(() => {
    for (let e of data) {
      arr.push(" ", e.name);
    }
    return arr;
  });
  console.log(arr);
  return (
    <>
      <b>Exercise Three</b>
      <p>Output : {result}</p>
    </>
  );
};
export default ExerciseThree;
