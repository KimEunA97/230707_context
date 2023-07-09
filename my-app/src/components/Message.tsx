import React, { createContext, useEffect, useContext } from "react";
import { MyContext } from "../App";

export default function Message() {




  const value = useContext(MyContext);

  console.log(value)

  const AB = "1"

  function plus() {

    return value.a + AB

  }

  return (
    <div>{plus()}</div>
  );
}