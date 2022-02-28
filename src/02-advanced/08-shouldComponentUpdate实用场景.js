import React, { Component } from "react";

class Box extends Component{
  // shouldComponentUpdate(nextProps, nextState) {
  //   // if()
  // }
  render() {
    console.log('render');
    
    return (
      <div>
        {this.props.current}
      </div>
    )
  }
  componentWillUnmount() {
    console.log(123333)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps',nextProps);
    // console.log('props',this.props);
    console.log(this);
    console.log('prevState',prevState);
    
  }
}

class Test extends Component{
  // shouldComponentUpdate(nextProps, nextState) {
  //   // if()
  // }
  render() {
    console.log('render');
    return (
      <div>
        {this.props.current}
      </div>
    )
  }
  // componentWillUnmount() {
  //   console.log(123333)
  // }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps',nextProps);
    // console.log('props',this.props);
    console.log('prevState',prevState);
    
  }
  componentDidUpdate(prevProps){

  }
}

// 控制移除

class App extends Component{
  state = {
    name:'建设局',
    list:[1,2,3,4,5,6,7,8,9,0],
    current: 1
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
        <button onClick={()=>{this.setState({current:this.state.current + 1})}}>修改</button>
        <span>{this.state.name}</span>
        {
          this.state.list.map((item, index)=><Box current={this.state.current} key={item}></Box>)
        }
        <Test current={this.state.current}></Test>
      </div>
    )
  }
}

export default App