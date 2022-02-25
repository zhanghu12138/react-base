import React, { Component } from "react";

class NavBar extends Component{
  render() {
    return (
      <div style={{background:'yellow'}}>
        <button onClick={()=>{
          this.props.event()
        }}>修改</button>
        <span>NavBar</span>
      </div>
    )
  }
}

class Field extends Component{
  render() {
    return (
      <div>
        <label htmlFor="fieldInput">{this.props.lable} </label>
        <input id="fieldInput" type={this.props.type}></input>
      </div>
    )
  }
}

class App extends Component{
  state = {
    isShow: true
  }
  render() {
    return (
      <div>
        <Field lable="用户名" type="text" ></Field>
        <Field lable="密码" type="password"></Field>
        <div> 
          <button>登录</button>
          <button>重置</button>
        </div>
      </div>
    )
  }
}

export default App