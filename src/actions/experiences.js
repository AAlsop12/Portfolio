import {
    FETCH_EXPERIENCES,
    TOGGLE_DESCRIPTION
    
} from './types';

export function fetchExperiences() {
    return {
        type: FETCH_EXPERIENCES,
        payload: [
            {
                header: 'Projects',
                description: 'Using React, React Redux, Javascript, Node.js, HTML, and CSS, I worked on applications in Visual Studio Code designed for ecommerce, property management, a credit card menu, a madlibs game, and college course scheduling.',              
                open: false
            },
            {
                header: 'Director of Recreation Therapy at Stonehenge',
                description: 'Led a team in organizing and implementing activities for 78 patients. Designed and carried out individual therapeutic interventions for the patients.',
                open: false
            }
        ]
    }
}

export function toggleDescription(experience) {
    return {
        type: TOGGLE_DESCRIPTION,
        payload: experience
    }
}