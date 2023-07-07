import { createContext, useContext, useEffect } from 'react';
const MyContext = createContext<MyContextType>({});


interface MyContextType {
  [key: string]: string[];
}

const arr = {

  a: ['a'],
  b: ['b'],
  c: ['c'],

}

function Context() {
  return (
    <MyContext.Provider value={arr}>
      <GrandParent />
    </MyContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  return <Message />;
}

function Message() {
  const value = useContext(MyContext);
  useEffect(() => {
    console.log('마운트', value);

    return () => {
      console.log('언마운트', value);
    }
  }, [value])
  return (
    <div>
      <div>a: {arr.a}</div>
      Received:
      {Object.entries(value).map(([key, arr]) => (
        <div key={key}>
          {key}: {arr.join(', ')}
        </div>
      ))}
    </div>
  );
}

export default Context;