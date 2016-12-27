import * as React from "react";
import * as ReactDOM from "react-dom";
//
// ReactDOM.render(<div>Hello world</div>, document.getElementById('root'));

import { Hello } from "./components/Hello";
import { Bye } from "./components/Bye";

ReactDOM.render(
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <Bye compiler="TypeScript" framework="Angular" />
  </div>,
    document.getElementById("root")
);
