import React from "react";
import Axios from "axios";

const TypeDeclarations = () => {
  const data = Axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
      console.log({ res });
    })
    .catch((e) => {
      console.log("Error", e);
    });
    
  return <h1>Anything here</h1>;
};
