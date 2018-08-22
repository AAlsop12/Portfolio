import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import history from '../../history';

class Navbar extends Component {

    handleOnClick = (link) => {
        this.props.changeNavbarActive(link._id)
        if(this.props.onClick) {
            this.props.onClick(link._id);
        } 
        history.push(link.path);
    }

    render() {
        return (
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className={`navbar__link ${link.active ? 'white-text' : ''}`} key={index} onClick={() => this.handleOnClick(link)}>
                                {link.title}
                            </a>
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

Navbar = connect(mapStateToProps, actions)(Navbar);

export default Navbar;