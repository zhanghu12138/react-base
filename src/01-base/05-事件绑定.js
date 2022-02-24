import React, { Component } from "react";

class App extends Component{
  render() {
    return (
      <div>
        <input></input>
        <button onClick={(evt)=>{console.log(evt)}}>测试</button>
      </div>
    )
  }
}

export default App