import React, { Component } from "react";

class Child extends Component{
  
  render() {
    // console.log()
    return (
      <div>
        {this.props.children[1]}
        {this.props.children[0]}
      </div>
    )
  }
}

class App extends Component{
  componentWillMount(){
    console.log('1233');
    console.log('1233');
    
  }
  render() {
    return (
      <div>
        <Child>
          <div>111111111112222222211</div>
          <div>cxzcxzc</div>
        </Child>
      </div>
    )
  }
}

export default App