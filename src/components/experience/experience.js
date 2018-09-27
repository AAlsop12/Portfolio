import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Dropdown from './dropdown';

class Experience extends Component {
    render() {
        return (
            <div className='resume'>
                <PageTitle className='experience__title' title='Experience'/>  
                <Dropdown />
            </div>
        )
    }
}

export default Experience;