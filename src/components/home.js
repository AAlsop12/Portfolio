import React, { Component } from 'react';

import Contact from './contact';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Contact className='contact'/>
            </div>
        )
    }
}

export default Home;