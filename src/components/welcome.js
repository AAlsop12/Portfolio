import React, { Component } from 'react';
import PageTitle from './pageTitle';
import Quote from './quote';

class Welcome extends Component {

    // handleClick = () => {
    //     if(document.getElementById('welcome').classList.contains('welcome-hidden')) {
    //         document.getElementById('welcome').classList.remove('welcome-hidden');
    //     } else {
    //         document.getElementById('welcome').classList.add('welcome-hidden'); 

    //     } 
    // }

    render() {
        
        return (
            <div className='welcome-shell'>
                <div className='welcome'>
                    <div className='welcome__title'>Welcome</div>
                    <div className='welcome__greeting'>Thanks for stopping by!</div>
                    <div className='welcome__instructions'>Go ahead and explore</div>
                    {/* <div className='welcome__arrow'>
                        <i className="fas fa-angle-double-right" onClick={this.handleClick}></i>
                    </div> */}
                    <img className="welcome__aimee-pic" src="https://preview.ibb.co/bzB9vU/Aimee.jpg" width='175' height='250'></img>
                </div>
                <div className="welcome-shell__quote-shell" >
                    <Quote className='quote' quote="Everything in moderation, including moderation." author="--Oscar Wilde"/>
                </div>
            </div>


        )
    }
}

export default Welcome;