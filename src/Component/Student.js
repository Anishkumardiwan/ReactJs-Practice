import React, { Component } from "react";
import { MyContext } from "./Common/Context";
export default class Student extends Component {
    static contextType = MyContext;

    render() {
        return (
            <div>
                <h3>Student Component</h3>

                <h4>
                    Name: {this.context.data.name} Value: {this.context.data.value}
                </h4>
                <button onClick={this.context.handleClick}>Change Value</button>
            </div>

        );
    }
}
