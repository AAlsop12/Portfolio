import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Dropdown extends Component {

    state = {
        height: 0,
    };

    toggle = () => {
        const {height} = this.state;

        this.setState({
            height: (height === 0 ? 'auto' : 0),
        });
    };



    render() {
        const { height } = this.state;

        const { className, headline, information } = this.props;

        return (
        
            <div> 
                <button onClick={ this.toggle }>
                    { height === 0 ? 'Open' : 'Close' }
                </button>

                <AnimateHeight
                    duration={ 300 }
                    height={ 'auto' }>
                        <h6>Skills</h6>
                        <p>"React, Redux, Javascript"</p>
                </AnimateHeight>
        </div>     
           
        );
    }
}


export default Dropdown;