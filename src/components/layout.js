import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Button from './button';
import About  from './about';
import Welcome from './welcome';
import Account from './account/account';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header />
        <Navbar />
        <Account />
        <Button />
        {this.props.children}

      </div>
    );
  }
}


export default Layout;
