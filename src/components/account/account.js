import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import AccountInformation from './accountInformation';
import About from '../about';
import Contact from '../contact';
import Welcome from '../welcome';



class Account extends Component {

    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: 'Logout',
                path: '/signin'
            },
            {
                _id: 1,
                title: 'Sign Up',
                path: '/signup'
            }
        ]

        const navbarLinks = [
            {
                _id: 0,
                title: 'About Me',
                active: false,
                // component: <About/>
                path: '/about'
            },
            {
                _id: 1,
                title: 'Blog',
                active: false,
                // component: <Contact/>
            },
            {
                _id: 2,
                title: 'Portfolio',
                active: false,
                // component: <Portfolio/>
            },
            {
                _id: 3,
                title: 'Account Information',
                active: false,
                // component: <AccountInformation/>
                path: '/accountInformation'
            },
            {
                _id: 4,
                title: 'Contact',
                active: false,
                // component: <Contact/>,
                path: '/contact'
            },
   



            

        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }


    render() {
        return (
            <div className='allTabs'>
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;