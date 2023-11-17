import React from "react";
import './App.css';
import {Header,Footer} from "./components";
import {Home} from "./pages";



function App() {

  return (
    <React.Fragment className="App">
        <Header/>
          <Home/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
