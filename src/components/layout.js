import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Button from './button';


class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <Navbar />
        <Button />

        {this.props.children}

      </div>
    );
  }
}


export default Layout;
