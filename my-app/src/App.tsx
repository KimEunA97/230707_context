import { ReactNode, createContext, useContext, useEffect } from 'react';
import GrandParent from './components/GrandParent'


function Context() {
  return (
    <MyContext.Provider value={arr}>
      <GrandParent />
    </MyContext.Provider>
  );
}



export default Context;