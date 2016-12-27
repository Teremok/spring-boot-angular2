import * as React from "react";
import "./hello.initial.scss";

export interface ByeProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Bye extends React.Component<ByeProps, undefined> {
    render() {
        return
        <h1 className="container">
            Good bye from {this.props.compiler} and {this.props.framework}!
        </h1>;
    }
}

