import React, { Component } from "react";

class App extends Component{
  myRef = React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myRef}></input>
        <button onClick={()=>{console.log(this.myRef.current.value)}}>测试</button>
      </div>
    )
  }
}

export default App