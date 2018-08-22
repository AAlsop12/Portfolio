import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Button from './button';
import Account from './account/account';
import Quote from './quote';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <Navbar />
        <Account />
        <Button />
        {this.props.children}
        <Quote />
      </div>
    );
  }
}


export default Layout;
