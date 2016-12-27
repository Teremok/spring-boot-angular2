import * as React from "react";
import "./hello.initial.scss";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1 className="container">Hello from {this.props.compiler}
            () {this.props.framework}!</h1>;
    }
}

