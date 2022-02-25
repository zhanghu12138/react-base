import React, { Component } from "react";

class App extends Component{
  render() {
    return (
      <div></div>
    )
  }
}

export default App

const bus = {
  list: [],
  subscribe(callback){
    this.list.push(callback)
  },
  publish(){
    this.list.forEach(item =>{
      item()
    })
  }
}

bus.subscribe(()=>{
  console.log('1');
})

bus.subscribe(()=>{
  console.log('2');
})

bus.publish()