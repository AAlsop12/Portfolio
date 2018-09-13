import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Project from './project';


class Portfolio extends Component {

    
    render() {
        return (
            <div className='portfolio'>
                {/* <PageTitle className='portfolio__title' title='Portfolio'/> 
                <Project className='ecommerce' title='Ecommmerce'/>
                <Project className='madlibs' title='Madlibs'/> */}
                <Project className='countdown' title='Countdown' link="https://protected-journey-60036.herokuapp.com/"/>
                <Project className='schedule' title='Course Scheduling' link="https://course-scheduling.herokuapp.com"/>
                <Project className='github' title='Github' link="https://github.com/AAlsop12"/>
                <Project className='portfolio' title='Portfolio' link="https://desolate-sierra-42605.herokuapp.com/"/>

            </div>
        )
    }
}

export default Portfolio;