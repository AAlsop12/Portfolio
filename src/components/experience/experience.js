import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Dropdown from './dropdown';

class Experience extends Component {
    render() {
        return (
            <div className='experience'>
                <PageTitle className='experience__title' title='Experience'/>  
                <Dropdown className='projects' headline='Projects' information='React'/>
            </div>
        )
    }
}

export default Experience;