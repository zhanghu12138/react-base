import React, { Component } from "react";

class App extends Component{
  state = {
    list:[1,2,34,5,67,1,2,34,5,671,2,34,5,67,1,2,34,5,67,1,2,34,5,67,1,2,34,5,67]
  }

  myRef = React.createRef()
  render() {
    return (
      <div>
        <span>邮箱列表</span>
        <button onClick={()=>{
          this.setState({list: [...[222,3,3,34,5,6,6,6],...this.state.list]})
        }}>添加</button>
        <div ref={this.myRef} style={{height:'200px',overflow:"auto"}}>
          {this.state.list.map((item,index) => {
            return(
              <div style={{height:"100px"}} key={index}>{item}</div>
            )
          })}
        </div>
      </div>
    )
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('prevProps',prevProps);
    console.log('prevState',prevState);
    let box = this.myRef.current.scrollHeight
    return box
    
  }
  componentDidUpdate(_prevProps, prevState,skjadksa) {
    console.log(this.myRef.current.scrollHeight);
    console.log(skjadksa);
  }
}

export default App