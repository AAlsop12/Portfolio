import React, { Component } from 'react';
import PageTitle from './pageTitle';

class Welcome extends Component {

    // handleClick = () => {
    //     if(document.getElementById('welcome').classList.contains('welcome-hidden')) {
    //         document.getElementById('welcome').classList.remove('welcome-hidden');
    //     } else {
    //         document.getElementById('welcome').classList.add('welcome-hidden'); 

    //     } 
    // }

    render() {
        const { className, title, icon } = this.props;
        
        return (
            <div className='welcome   welcome-hidden'>
                <div className='welcome__title'>Welcome</div>
                <div className='welcome__greeting'>Thanks for stopping by!</div>
                <div className='welcome__instructions'>Go ahead and explore</div>
                <div className='welcome__arrow'>
                    <i className="fas fa-angle-double-right" onClick={this.handleClick}></i>
                </div>
    

            </div>
        )
    }
}

export default Welcome;