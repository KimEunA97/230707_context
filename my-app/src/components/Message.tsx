import React, { createContext, useEffect, useContext } from "react";



export default function Message() {

  const MyContext = createContext<MyContextType>({});


  interface MyContextType {
    [key: string]: string[];
  }

  const arr = {

    a: ['a'],
    b: ['b'],
    c: ['c'],

  }
  const value = useContext(MyContext);
  useEffect(() => {
    console.log('마운트', value);

    return () => {
      console.log('언마운트');
    }
  }, [])


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