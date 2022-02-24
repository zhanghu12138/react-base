import React, { Component } from "react";

class App extends Component{
  state = {
    text: '收藏'
  }
  render() {
    return (
      <div>
        <input ref={this.myRef}></input>
        <button onClick={()=>{this.setState({text:"取消收藏"})}}>{this.state.text}</button>
      </div>
    )
  }
}

export default App