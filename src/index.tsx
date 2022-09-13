import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MESSAGES } from "./core/constants/messages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  /* 
Strict mode is intentionally commented out because one part of this task was to make every component log its name once, for what is useEffect used internally. We can always undo the comment, it's just for the purpose of a cleaner console.

Link to React docs: https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects

Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

Class component constructor, render, and shouldComponentUpdate methods
Class component static getDerivedStateFromProps method
Function component bodies
State updater functions (the first argument to setState)
Functions passed to useState, useMemo, or useReducer
*/

  // <React.StrictMode>
  <App propsMessage={MESSAGES.HELLO} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
