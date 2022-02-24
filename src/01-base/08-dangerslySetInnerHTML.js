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
        <span dangerouslySetInnerHTML={{__html:"1222222"}}></span>
      </div>
    )
  }
}

export default App