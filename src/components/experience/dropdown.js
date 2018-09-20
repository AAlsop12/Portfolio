import React, { Component } from 'react';


class Dropdown extends Component {

    render() {
        const { className, headline, information } = this.props;

        return (
            <div className={className}>
                <div className="Projects">{headline}</div>
                <div className="Information">{information}</div>
            </div>
           
        )
    }
}


export default Dropdown;