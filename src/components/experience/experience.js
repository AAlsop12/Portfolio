import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Dropdown from './dropdown';

class Experience extends Component {
    render() {
        return (
            <div className='experience'>
                <PageTitle className='experience__title' title='Experience'/>  
                <Dropdown className='experience__skills' headline='Skills' information='React, Redux, Javascript, Python'/>
            </div>
        )
    }
}

export default Experience;