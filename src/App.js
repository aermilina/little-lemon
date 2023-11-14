import React from "react";
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"

function App() {
  return (
    <React.Fragment className="App">
        <Header/>
        <Main/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
