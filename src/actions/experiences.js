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
                descriptionOne: 'Using React, React Redux, Javascript, Node.js, HTML, and CSS, I worked on applications in Visual Studio Code.',              
                descriptionTwo: 'Created applications for ecommerce, property management, a credit card menu, a madlibs game, and college course scheduling.',

                open: false
            },
            {
                header: 'Recreation Therapy',
                descriptionOne: 'Director of Recreation Therapy at Stonehenge of American Fork:Led a team in organizing and implementing activities for 78 patients. Designed and carried out individual therapeutic interventions for the patients.',
                descriptionTwo: 'Certified Therapeutic Recreation Specialist at New Haven: Customized experiential therapy sessions for 30 different teenage girls and their families according to their treatment plans.',
                open: false
            },
            {
                header: 'Education',
                descriptionOne: 'Bottega Coding School--Graduated Fall 2018',
                descriptionTwo: 'Brigham Young University -- Graduated Fall 2016 GPA: 3.95',
                open: false
            },
            {
                header: 'Mandarin Physical Ed. Teacher',
                descriptionOne:  'Designed engaging lesson plans to help children enjoy active play.',
                descriptionTwo:  'Established classroom expectations and maintained classroom discipline',

            },
            {
                header: 'Service',
                descriptionOne:  'Utah Mental Hospital: Engaged patients with a variety of mental issues in constructive discussion twice a week.  40+ hrs.',
                descriptionTwo:  'Representative for the Church of Jesus Christ of Latter-day Saints: Taipei Taiwan 2 Years',

            },
            {
                header: 'Skills',
                descriptionOne:  'React, Javascript, Python, MySQL, Visual Studio Coce, Node.js, CSS, SCSS, HTML, Github',
                descriptionTwo:  'Mandarin-Fluent, Public Speaking, Therapy, Team Building, Communication',

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