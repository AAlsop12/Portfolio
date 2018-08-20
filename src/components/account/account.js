import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import AccountInformation from './accountInformation';
import About from '../about';
import Contact from '../contact';
import Home from '../home';


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
                component: <About/>
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
                component: <AccountInformation/>
            },
            {
                _id: 4,
                title: 'Contact',
                active: false,
                component: <Contact/>
            },



            

        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        let jsx;
        if(this.props.navbarLinks) {
            this.props.navbarLinks.forEach(link => {
                if(link.active) {
                    jsx = link.component;
                }
            })
        }
        return jsx;
    }

    render() {
        return (
            <div>
                { this.renderContent() }
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