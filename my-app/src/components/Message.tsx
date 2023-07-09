import React, { createContext, useEffect, useContext } from "react";
import { MyContext } from "../App";

export default function Message() {




  const value = useContext(MyContext);

  console.log(value)

  return (
    <div>{value.a}</div>
  );
}