import React, { Component } from "react";
import NavBar from "./navbar";



class App extends Component{
  state = {
    text: '收藏'
  }
  render() {
    return (
      <div>
        <NavBar title="第一个"></NavBar>
        <NavBar title="第二个"></NavBar>
        <NavBar title="第三个" leftShow={false}></NavBar>
        <input ref={this.myRef}></input>
        <button onClick={()=>{this.setState({text:"取消收藏"})}}>{this.state.text}</button>
      </div>
    )
  }
}

export default App