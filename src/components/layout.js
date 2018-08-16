import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Home from './home';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <Navbar/>
        {this.props.children}


      </div>
    );
  }
}


export default Layout;
