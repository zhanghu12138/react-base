import React, { Component } from "react";

class Child extends Component{
  render() {
    return (
      <div>
        <span>{this.props.text}</span>
        <button>修改父组件</button>
      </div>
    )
  }
}

class App extends Component{
  state = {
    text:'12233'
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({text:122222222222222222222222})}}>修改</button>
        <Child text={this.state.text}></Child>
      </div>
      
    )
  }
}

export default App