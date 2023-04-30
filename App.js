import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect,useReducer,useRef,Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Chatbot } from './Chatbot';
function App()
{
  
  return (
    <div className="App">
  
    <Chatbot/>
    </div>
  );
  
}

export default App;