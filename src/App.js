import "./styles.css";
import React, { useState, useMemo } from "react";
import ExerciseTwo from "./Exercise2";
import ExerciseThree from "./Exercise3";
import ExerciseFour from "./Exercise4";
import ExerciseFive from "./Exercise5";

let array1 = [2, 5, 1, 8, 10];
let array2 = [10, 20, 30, 40, 50];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p> Exercise 1</p>
      <ExerciseOne data={array1} />
      <ExerciseTwo str1={"aman"} str2={"Chauhan"} />
      <ExerciseThree data={arrObj} />
      <ExerciseFour data={array1} funcAddTwo={addTwo} />
      <ExerciseFive data1={array1} data2={array2} />
    </div>
  );
}

const ExerciseOne = ({ data }) => {
  let sum = 0;
  const add = useMemo(() => {
    for (let e of data) {
      sum += e;
    }
    return sum;
  });

  return (
    <>
      <p>Sum of arrays is : {add}</p>
    </>
  );
};
// for exercise three :
const arrObj = [
  { name: "aman", age: 20 },
  { name: "rakesh", age: 30 },
  { name: "rahul", age: 60 }
];

// function for exerxise 4
const addTwo = (num) => {
  return num + 2;
};
