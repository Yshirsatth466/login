import logo from './logo.svg';
import './App.css';
import HEADER from "./component/HEADER";
import FORM from "./component/FORM";
import ABOUT from "./component/ABOUT";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (<>
 <HEADER title="Login"/>
 <FORM/>
 
 
  </>
  );
}

export default App;
