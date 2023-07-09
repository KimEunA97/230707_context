import React, { createContext, useEffect, useContext } from "react";
import { MyContextType } from "../types/types";
import { MyContext } from "../App";

export default function Message({ arr }) {




  const value = useContext(MyContext);


  return (
    <MyContext.Consumer>
      <div>{arr}</div>
    </MyContext.Consumer>
  );
}