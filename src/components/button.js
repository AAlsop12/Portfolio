import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';


class Button extends Component {
    render() {
  
        return (
            <div className='button'>
                {
                    this.props.navbarLinks.forEach((link, index) => {
                        return (
                            <button className={'button__contact'} key={index} onClick={() => this.props.changeNavbarActive(link._id)}>
                                CONTACT
                            </button>
                        )
                    })
                }
            </div>
        )

    }
}

function mapStateToProps(state) {
    const{ navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

Button = connect(mapStateToProps, actions)(Button);

export default Button;




// const { type, input, onClick } = this.props;

//         return (
         
//                 <button className='button__contact'
//                         type={type}
//                         {...input}
//                         // onClick={() => history.push('/contact')}
//                         key={index} 
//                         onClick={() => this.props.changeNavbarActive(link._id)}>CONTACT</button>
       
//         )