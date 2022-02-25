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

class SideBar extends Component{
  render() {
    return (
      <div  style={{background:'green'}}>
        <button>修改</button>
        <span>SideBar</span>
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
        <NavBar event={()=>{
          this.setState({isShow:!this.state.isShow})
        }}></NavBar>
        {this.state.isShow && <SideBar></SideBar>}
      </div>
    )
  }
}

export default App