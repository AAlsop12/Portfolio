// import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../actions';

// import AccountInformation from './account/accountInformation';
// import Mission from './mission';
// import Contact from './contact';

// import FormButton from './formFields';

// class Home extends Component {

//     componentDidMount() {

//         const headerLinks = [
//             {
//                 _id: 0,
//                 title: 'Logout',
//                 path: '/signin'
//             },
//             {
//                 _id: 1,
//                 title: 'Account Information',
//                 path: '/accountInformation'
//             }
//         ]

//         const navbarLinks = [
//             {
//                 _id: 0,
//                 title: 'My Mission',
//                 active: true,
//                 component: <Mission/>
//             },
//             {
//                 _id: 1,
//                 title: 'Contact',
//                 active: false,
//                 component: <Contact/>
//             }

            

//         ]

//         this.props.setHeaderLinks(headerLinks);
//         this.props.setNavbarLinks(navbarLinks);
//     }

//     renderContent() {
//         let jsx;
//         if(this.props.navbarLinks) {
//             this.props.navbarLinks.forEach(link => {
//                 if(link.active) {
//                     jsx = link.component;
//                 }
//             })
//         }
//         return jsx;
//     }

//     render() {
//         return (
//             <div>
//                 { this.renderContent() }
//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     const { headerLinks, navbarLinks } = state.headerNavbar;
//     return { headerLinks, navbarLinks }
// }

// Home = connect(mapStateToProps, actions)(Home);

// export default Home;