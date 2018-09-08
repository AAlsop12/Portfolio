import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Button from './button';
import Account from './account/account';
import {Quotes} from './quote';

let list = ["first quote", "second quote", "third quote"]

class Layout extends Component {

  
  render() {
    return (
      <div className='layout'>
        <Header />
        <Navbar />
        <Account />
        <Button />
        {this.props.children}
        {Quotes(list)}
      </div>
    );
  }
}


export default Layout;
