
import React, { createContext } from 'react';
import Comp_A from './Components/Comp_A';

const FirstName = createContext();
const LastName = createContext();

function App(){
  return(
    <>
      <FirstName.Provider value={"Tushar"}>
        <LastName.Provider value={"Panda"}>
          <Comp_A/>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App;
export {FirstName, LastName};