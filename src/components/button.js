import React, { Component } from 'react';

import history from '../history';


class Button extends Component {
    render() {

        const { type, input, onClick } = this.props;

        return (
         
                <button className='button__contact'
                        type={type}
                        {...input}
                        onClick={() => history.push('/contact')}>CONTACT</button>
       
        )

    }
}


export default Button;

