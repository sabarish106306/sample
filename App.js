import './App.css';
import Map from './com/map';
import Didupdate from './com/didupdate';
import Context from './com/context'
import React from 'react';

export const praveen=React.createContext();
export const kumar=React.createContext();


function App() {
  return (
    <div className="App">
      <praveen.Provider value="aswin">
        <kumar.Provider value="sabari">
               <Map></Map>
               <Context></Context>
               <Didupdate></Didupdate>
               </kumar.Provider>
	       <h1>hello</h1>
	       <h2>helloworld</h2>
        </praveen.Provider>


    </div>
  );
}

export default App;
