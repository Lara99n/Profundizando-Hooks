import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-Examples/MultipleCustomHooks";
import { HooksApp } from "./HooksApp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MultipleCustomHooks />);
