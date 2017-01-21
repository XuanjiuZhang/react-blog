/**
 * Created by xuanjiu on 17/1/19.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render(){
    return (
        <nav>
          <Link to="/">Home</Link>
        </nav>
    );
  }
}

export default Nav;