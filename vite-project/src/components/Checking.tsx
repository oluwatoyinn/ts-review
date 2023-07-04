import React from "react";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: string;
  long: string;
};

const stuff: (number | string)[] = [1, 2, 3, "James"]; //Union types and Arrays

const coord: (Point | Loc)[] = [];

let userMood: "Happy" | "Sad";
