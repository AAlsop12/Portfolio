import React, { Component } from 'react';
import PageTitle from './pageTitle';

class Welcome extends Component {
    render() {
        const { className, title, icon } = this.props;
        
        return (
            <div className='welcome'>
                <div className='welcome__title'>Welcome</div>
                <div className='welcome__greeting'>Thanks for stopping by!</div>
                <div className='welcome__instructions'>Go ahead and explore</div>
                <div className='welcome__arrow'>
                    <i class="fas fa-angle-double-right"></i>
                </div>
    

            </div>
        )
    }
}

export default Welcome;