import {
    FETCH_EXPERIENCES,
    TOGGLE_DESCRIPTION
    
} from '../actions/types';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_EXPERIENCES:
            return [...state, ...action.payload ]
        case TOGGLE_DESCRIPTION:
            return [
                ...state.map((experience, index) => {
                        if(experience == action.payload) {
                            experience.open = !experience.open
                        }
                        return experience
                    })
                ]
        default: return state;
    }
}
