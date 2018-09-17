import React, { Component } from 'react';
import PageTitle from './pageTitle';


class Goals extends Component {
    render() {
        return (
            <div className='goals'>
                <PageTitle className='goals__title' title='My Goals'/>
                <h4 className='goal-one'> Get Skills</h4>
                    <p className='goals__get-skills'> Continue improving my React/Javascript/Python skills.  Build 2 new projects by the end of October</p>
                <h4 className='goal-two'> Get Hired</h4>
                    <p className='goals__get-hired'> By the end of October, secure a position that would continue to push me to learn</p>
                <h4 className='goal-three'> Get Experience</h4>
                    <p className='goals__get-experience'> After securing a position, work HARD at it.  Learn as much as possible as quickly as possible</p>
                <h4 className='goal-four'> Become a Senior Developer</h4>
                    <p className='goals__be-senior'> Look towards the Senior positions and become qualified for them</p>

            </div>

        )
    }
}

export default Goals;