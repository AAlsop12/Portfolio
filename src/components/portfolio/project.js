import React, { Component } from 'react';


class Project extends Component {
    render() {
        const { className, title, picture } = this.props;
        return (
            <div className={className}>
                {title}
                {this.props.children}
            </div>
        )
    }
}

export default Project;