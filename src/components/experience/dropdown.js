import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { fetchExperiences, toggleDescription } from '../../actions'
import AnimateHeight from 'react-animate-height';

class Dropdown extends Component {

    constructor(props) {
        super(props)

        this.renderExperience = this.renderExperience.bind(this);

    }

    componentDidMount() {
        this.props.fetchExperiences()
    }

    renderExperience(experience) {
        return (
            <li key={experience.header} className={`experience ${experience.open ? 'experience__selected' : ''}`}>
                <div className='experience__info'>
                    <div className='experience__header-container"'>
                            <div className='experience.header'onClick={() => this.props.toggleDescription(experience)}>{experience.header}</div>      
                    </div> 

                    <a className={`'experience__arrow ${experience.open ? null : 'experience__arrow-close'}`} ></a>

                </div>
            <AnimateHeight
                duration={ 300 }
                height={ experience.open ? 'auto' : '0' } 
                >
                    <div className={`experience__description`}>
                        <h6 className='experience__description-title'></h6>
                        <p>{experience.description}</p>
                    </div>
            </AnimateHeight>

            </li>
        )
    }

    render() {
        return (
            <ul>

                {this.props.experiences.map(this.renderExperience)}
            </ul>
           
        )
    }
}

function mapStateToProps(state) {
    return { experiences: state.experiences }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchExperiences: () => {
            dispatch(fetchExperiences())
        },
        toggleDescription:(experience) => {
            dispatch(toggleDescription(experience))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);