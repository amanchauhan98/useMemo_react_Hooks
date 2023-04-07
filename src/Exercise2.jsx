import React from "react";
import { useMemo } from "react";

const ExerciseTwo = ({ str1, str2 }) => {
  const concatStr = useMemo(() => {
    return str1.concat(" ", str2);
  });

  return (
    <>
      <b>ExerciseTwo</b>
      <p>Concat of two string is : {concatStr}</p>
    </>
  );
};
export default ExerciseTwo;
