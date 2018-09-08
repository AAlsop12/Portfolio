import React, { Component } from 'react';


class Project extends Component {
    render() {
        const { className, title, picture } = this.props;
        return (
            <div className={className}>
                <a href="https://desolate-sierra-42605.herokuapp.com/">{title}</a>
                {this.props.children}
            </div>
        )
    }
}

export default Project;