import React, { Component } from "react";

const GlobalContext = React.createContext()

class FilmItem extends Component{

  render() {
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            console.log(value)
            return(
              <div>
                <span>{value.call}</span>
                <button onClick={()=>{value.setCall('已经修改完成了')}}>修改状态</button>
              </div>
            )
          }
        }
      </GlobalContext.Consumer>
    )
  }
}

class App extends Component{
  state = {
    call:'打电话'
  }
  render() {
    return (
      <GlobalContext.Provider value={{call: this.state.call,setCall:(value)=>{this.setState({call:value})}}}>
        <FilmItem></FilmItem>
      </GlobalContext.Provider>
    )
  }
}



export default App