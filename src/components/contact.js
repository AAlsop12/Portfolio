import React, { Component } from 'react';

import PageTitle from './pageTitle';

class Contact extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`{$className} contact`}>
                <PageTitle className='contact__page-title' title='Contact'/>
                <h1> HERE IS MY CONTACT INFORMATION </h1>
            </div>
        )
    }
}

export default Contact;