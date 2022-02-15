import React, { Component } from "react";
import { Consumer } from "./Common/Context";
export default class Student extends Component {
  render() {
    return (
      <div>
        <h3>Student Component</h3>
        <Consumer>
          {({ data, handleClick }) => (
            <div>
              <h4>
                Name: {data.name} Value: {data.value}
              </h4>
              <button onClick={handleClick}>Change Value</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
