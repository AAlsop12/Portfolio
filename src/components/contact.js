import React, { Component } from 'react';

import PageTitle from './pageTitle';

class Contact extends Component {

    render() {
        return (
            <div className='contact'>
                {/* <PageTitle className='contact__title' title='Contact'/> */}
                <p className='contact__name'>Aimee Alsop</p>
                <p className='contact__phone'>801 808 7925</p>
                <p className='contact__email'>aimee.alsop33@gmail.com</p>
                <a className='contact__linked-in' href='https://www.linkedin.com/in/aimee-alsop-5b4836a6/'>Linkedin</a>
                <a className='contact__github' href='https://github.com/AAlsop12'>github</a>
                <img className="contact__aimee-pic" src="https://preview.ibb.co/bzB9vU/Aimee.jpg" width='175' height='250'></img>
            </div>
           
        )
    }
}


export default Contact;


