import React from "react";
import { useMemo } from "react";

const ExerciseFour = ({ data, funcAddTwo }) => {
  let arr = [];
  const result = useMemo(() => {
    for (let e of data) {
      arr.push(funcAddTwo(e), " , ");
    }
    return arr;
  });
  return (
    <>
      <b>Exercise Four</b>
      <p>Output : {result}</p>
    </>
  );
};
export default ExerciseFour;
