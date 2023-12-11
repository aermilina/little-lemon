import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import './App.css';
import {Layout} from "./components";
import {Home} from "./pages";
import { ResponsiveStateProvider } from "./ui/media";



function App() {

  return (
      <BrowserRouter>
        <ResponsiveStateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </Layout>
        </ResponsiveStateProvider>
        </BrowserRouter>
  );
}

export default App;
