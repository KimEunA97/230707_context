import { ReactNode, createContext, useContext, useEffect } from 'react';
import GrandParent from './components/GrandParent'
import { MyContextType } from './types/types';

export const MyContext = createContext<MyContextType>({});



const arr: MyContextType = {

  a: ['a'],
  b: ['b'],
  c: ['c'],

}

export function App() {
  return (
    <MyContext.Provider value={arr}>
      <GrandParent />
    </MyContext.Provider>
  );
}



export default App;