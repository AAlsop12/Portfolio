import React, { Component } from 'react';


class Project extends Component {
    render() {
        const { className, title, picture, link } = this.props;
        return (
            <div className={className}>
                <a href={link}>{title}</a>
                {/* {this.props.children} */}
            </div>
        )
    }
}

export default Project;