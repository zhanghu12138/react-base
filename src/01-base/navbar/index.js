import React, { Component } from "react";
import kerWinPropTypes from "prop-types";

class NavBar extends Component{
  state = {
    text: '收藏'
  }
  render() {
    return (
      <div>
        {this.props.title}NavBar
        {this.props.leftShow && <div>123333</div>}
      </div>
    )
  }
}

export default NavBar

NavBar.defaultProps = {
  leftShow: true
}

NavBar.propTypes = {
  title: kerWinPropTypes.string,
  leftShow: kerWinPropTypes.bool
}