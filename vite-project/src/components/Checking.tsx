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

// Generics - Built-in

// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = [];

// Generics - Created

function identity<T>(item: T): T {
  return item;
}

identity<string>("checking");
identity<number>(3);

const getRandomElement = <T,>(list: T[]): T => {
  const randIn = Math.floor(Math.random() * list.length);
  return list[randIn];
};

getRandomElement<string>(["a", "b", "c"]);
getRandomElement([2, 33, 32, 78]);

const merge = <T extends object, U extends object>(obj1: T, obj2: U) => {
  return {
    ...obj1,
    ...obj2,
  };
};

const combination = merge(
  { name: "Victor" },
  { hobby: ["driving", "reading"] }
);

interface Lengthy {
  length: number;
}

const printLengthy = <T extends Lengthy>(thing: T): number => {
  return thing.length * 2;
};

  
// narrowing with the In operator
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  epiDuration: number;
}

const getRunTime = (media: Movie | TVShow) => {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.epiDuration;
  }
  return media.duration;
};
