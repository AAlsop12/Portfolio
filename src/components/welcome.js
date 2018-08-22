import React, { Component } from 'react';
import PageTitle from './pageTitle';

class Welcome extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className='welcome'>
                <PageTitle className='welcome__page-title' title='Welcome'/>
                <div className='welcome__greeting'>Welcome to my website!</div>
                <div className='welcome__instructions'>Go ahead and explore.</div>
            </div>
        )
    }
}

export default Welcome;