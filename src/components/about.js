import React, { Component } from 'react';

import PageTitle from './pageTitle';
import Navbar from './headernavbar/navbar';

class About extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className='about'>
                <h1>ALL ABOUT ME</h1>   
            </div>
        )
    }
}

export default About;