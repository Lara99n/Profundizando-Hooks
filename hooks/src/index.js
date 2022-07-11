import ReactDOM from "react-dom/client";
//import { TodoApp } from "./08-useReducer/TodoApp";
//import { Padre } from "./07-tarea-memo/Padre";
//import { CallbackHooks } from "./06-Memos/CallbackHooks";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { MultipleCustomHooks } from "./03-Examples/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { HooksApp } from "./HooksApp";
//import { Layout } from "./05-useLayoutEffect/Layout";
//import { Memorize } from "./06-Memos/Memorize";
//import { MemoHook } from "./06-Memos/MemoHook";
//import "./08-useReducer/intro-reducer";
import { MainApp } from "./useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
