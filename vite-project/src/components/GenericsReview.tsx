import React from "react";

// Passing types to other types

type MyGenericType<TData> = {
  data: TData;
};

type Example1 = MyGenericType<{
  firstName: string;
}>;

type Example2 = MyGenericType<number>;

// Creating a function with a type helper mapped over the top, and pass the type to them manually
const makeFetch = <TData,>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

makeFetch<{ firstName: string; lastName: string }>("api/endpoint").then(
  (res) => {
    console.log(res);
  }
);

// Sometimes you will need to override the types inside the generic function with an assertion which is Okay to do
const typedObjectkes = <TObj extends {}>(obj: TObj) => {
  return Object.keys(obj) as Array<keyof TObj>;
};

const result = typedObjectkes({
  name: "Victor",
  age: 12,
});

// TKey extends keyof TObj, we can get the correct type for the returned key from the TObj extension
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  if (key === "bad") {
    throw Error("Don't access the bad key");
  }
  return obj[key];
};

const result2 = getValue(
  {
    a: 1,
    b: "any-string",
    c: true,
  },
  "a"
);
