import React, {Component} from "react";
import PropTypes from 'prop-types'

class Header extends Component {

  render() { 
    console.log(this.props);
    return ( 
      <h1>{this.props.name}</h1>
     );
  }
}

Header.propTypes = {
  titulo: PropTypes.string
}
 
export default Header ;