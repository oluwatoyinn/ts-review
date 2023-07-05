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

enum ArrowKeys {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

// To avoid typescript adding more code to javascript compilation

const enum ArrowKeys2 {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const arrowUp = {
  number: 1,
  status: ArrowKeys.UP,
};

const arrowDown = {
  number: 1,
  status: ArrowKeys2.DOWN,
};

// interfaces
interface POINT {
  x: number;
  y: number;
}

// Multiple Inheritance

interface Human {
  name: string;
}

interface Work {
  level: string;
  specialty: string[];
}

interface HumanWork extends Human, Work {
  native: string;
  age: number;
}

const Engineer: HumanWork = {
  native: "English",
  level: "senior",
  age: 20,
  specialty: ["JS", "React Js"],
  name: "Victor James",
};

// Interfaces can only describe object shapes, type alias can describe any sort of types- object, function, union