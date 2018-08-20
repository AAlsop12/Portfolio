import React, { Component } from 'react';

import PageTitle from './pageTitle';

class About extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className='about'>
                <PageTitle className='about__page-title' title='About Me'/>
                <h1 className='about__info'> HERE ARE ALL MY IDEAS </h1>
            </div>
        )
    }
}

export default About;