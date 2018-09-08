import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Project from './project';


class Portfolio extends Component {

    
    render() {
        return (
            <div className='portfolio'>
                <PageTitle className='portfolio__title' title='Portfolio'/> 
                <Project className='madlibs' title='Madlibs'/>
                <Project className='countdown' title='Countdown'/>
                <Project className='ecommerce' title='Ecommerce'/>


            </div>
        )
    }
}

export default Portfolio;