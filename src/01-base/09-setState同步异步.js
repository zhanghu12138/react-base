import React, { Component } from "react";

class App extends Component{
  state = {
    count: 0,
    count1: 0
  }
  render() {
    return (
      <div>
        <input ref={this.myRef}></input>
        {/* 处在同步状态中，setState是异步执行并且合并执行 */}
        <button onClick={()=>{
          this.setState({count:this.state.count + 1})
          this.setState({count:this.state.count + 1})
          this.setState({count:this.state.count + 1})
        }}>{this.state.count}</button> 
        {/* 处在异步状态中，setState是同步执行 */}
        <button onClick={()=>{
          setTimeout(()=>{
            this.setState({count1:this.state.count1 + 1})
            this.setState({count1:this.state.count1 + 1})
            this.setState({count1:this.state.count1 + 1})
          },0)
        }}>{this.state.count1}</button>
      </div>
    )
  }
}

export default App