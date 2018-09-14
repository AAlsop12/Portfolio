import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Project from './project';


class Portfolio extends Component {

    
    render() {
        return (
            <div className='portfolio'>
                {/* {/* <PageTitle className='portfolio__title' title='Portfolio'/>  */}
                <Project className='ecommerce' title='Ecommmerce'/>
                <Project className='madlibs' title='Madlibs'/> 
                <Project className='countdown' title='Countdown' link="https://protected-journey-60036.herokuapp.com/"/>
                    <img className="countdown__pic" src="countdown.png" width='200' height='150'></img>
                <Project className='schedule' title='Course Scheduling' link="https://course-scheduling.herokuapp.com"/>
                    <img className="schedule__pic" src="schedule.png" width='200' height='150'></img>
                <Project className='github' title='Github' link="https://github.com/AAlsop12"/>
                    <img className="github__pic" src="github.png" width='200' height='150'></img>
                <Project className='portfolio' title='Portfolio' link="https://desolate-sierra-42605.herokuapp.com/"/>
                    <img className="portfolio__pic" src="portfolio.png" width='200' height='150'></img>

            </div>
        )
    }
}

export default Portfolio;


