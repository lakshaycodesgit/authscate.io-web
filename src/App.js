import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Carrier from "./components/Carrier"
import Form from "./components/Forms/form";





const App = () => {
 
  return( 
 <>
 <Routes>
<Route path="/" element={<HomePage/>}></Route>


<Route path="/carrier" element={<Carrier/>}/>
<Route path="/register" element={<Form/>}/>

  </Routes>

</>
  ); 
};

export default App;
