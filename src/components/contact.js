import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import PageTitle from './pageTitle';
import About from './about';
import AccountInformation from './account/accountInformation';

class Contact extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`{$className} contact`}>
                <PageTitle className='contact__page-title' title='Contact'/>
                <h1 className='contact__info'> HERE IS MY CONTACT INFORMATION </h1>
      
            </div>
        )
    }
}


export default Contact;