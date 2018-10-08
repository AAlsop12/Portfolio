import React, { Component } from 'react';

import PageTitle from './pageTitle';
import Navbar from './headernavbar/navbar';
import Quote from './quote';

class About extends Component {
    render() {
        // const { className } = this.props;
        return (
                <div className='about'>
                    <div className='about-wrapper'>
                        <PageTitle className='about__title' title='About Me'/>  
                        <p className='about__info'>I'm insatiably curious.  I love to figure things out--how they work, what makes them tick.  
                            This curiousity served me well as I studied therapy in college and in my work for several years 
                            as a recreation thrapist.  I loved helping people figure themselves out--like a puzzle.  Although I love therapy, 
                            I wanted to keep learning. <br></br> <br></br>
                            I heard coding is like riddle solving so I took an intro course to find out for myself.  I loved it.  It's like a complex
                            puzzle that I find thrilling to work on.  And each time I do, I get better and look to figure the next
                            step with a greater arsenal of skills.  Finally, a field where my curiosity can build on itself.
                            <br></br> <br></br>
                            When I can, I love to go canyoneering, skiing, and traveling with my husband.
                        </p>
                    </div>
        
                    <img className="about-guatamala" src="guatamala.jpg" width='300' height='250'></img>             
                    <img className="about-sequoia" src="sequoia.jpg" width='300' height='250'></img>
                    <img className="about-ski" src="ski.jpg" width='300' height='250'></img>
                    <img className="about-ropes" src="ropes.png" width='300' height='250'></img>
                </div>




        )
    }
}

export default About;