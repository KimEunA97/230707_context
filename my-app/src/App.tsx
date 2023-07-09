import { ReactNode, createContext, useContext, useEffect } from 'react';
import GrandParent from './components/GrandParent'
import { MyContextType } from './types/types';

export const MyContext = createContext<MyContextType>({});

const arr: MyContextType = {

  a: ['a입니다'],
  b: ['b입니다'],
  c: ['c입니다'],

}

export function App() {
  return (
    <MyContext.Provider value={arr}>
      <GrandParent />
    </MyContext.Provider>
  );
}



export default App;