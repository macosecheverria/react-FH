import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./09-useContext/MainApp";
//import TodoApp from './08-useReducer/TodoApp'
//import Padre from './07-tarea-memo/Padre'
//import CounterWithCustomHooks from './01-useState/CounterWithCustomHooks'
//import SimpleForm from './02-useEffect/Simpleform'
//import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
//import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
//import FocusScreen from './04-useRef/FocusScreen';
//import Layout from './05-useLayoutEffect/Layout';
//import Memorize from './06-memos/Memorize';
//import MemoHook from './06-memos/MemoHook';
//import CallbackHook from './06-memos/CallbackHook';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
