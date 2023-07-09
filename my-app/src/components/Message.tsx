import React, { createContext, useEffect, useContext } from "react";
import { MyContextType } from "../types/types";

export default function Message() {




  const value = useContext(MyContext);



  const aa: string[] = arr.a;
  return (
    <div>
      <div>이것이오 a: {aa}</div>
      Received:
      {Object.entries(value).map(([key, arr]) => (
        <div key={key}>
          {key}: {arr.join(', ')}
        </div>
      ))}
    </div>
  );
}