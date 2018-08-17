import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`{$className} contact`}>CONTACT</div>
        )
    }
}

export default Contact;