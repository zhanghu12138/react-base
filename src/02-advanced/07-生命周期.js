import React, { Component } from "react";

class App extends Component{
  state = {
    name:'建设局'
  }
  componentWillUpdate(){
    console.log('12333');
    
  }
  shouldComponentUpdate(nextProps, nextState){
    // 此处可以这样处理
    if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
      return true
    }
    return false
  }

  render() {
    console.log('render');
    
    return (
      <div>
        <button onClick={()=>{this.setState({name:"修改了"})}}>修改</button>
        <span>{this.state.name}</span>
      </div>
    )
  }
}

export default App