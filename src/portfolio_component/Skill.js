import React from 'react'
import html from './image/html.png'
import css from './image/css3.png'
import bootstrap from './image/bootstrap.png'
import sass from './image/sass.png'
import js from './image/javascript.png'
import react from './image/react.png'

const Skill = () => {
    return (
        <React.Fragment>
            <div className='skill'>
                <h1 style={{ fontFamily: 'cursive' }}>My Skill</h1>
                <div className='skill-cards'>
                    <div className='img-card'>
                        <img src={html} />
                        <div className="progress" >
                            <div className="progress-bar bg-success" style={{ width: '95%' }}>95%</div>
                        </div>

                    </div>
                    <div className='img-card'>
                        <img src={css} />
                        <div className="progress" >
                            <div className="progress-bar bg-success" style={{ width: '95%' }}>95%</div>
                        </div>
                    </div>
                    <div className='img-card'>
                        <img src={bootstrap} />
                        <div className="progress" >
                            <div className="progress-bar bg-success" style={{ width: '90%' }}>90%</div>
                        </div>
                    </div>
                    <div className='img-card'>
                        <img src={sass} />
                        <div className="progress" >
                            <div className="progress-bar bg-success" style={{ width: '95%' }}>95%</div>
                        </div>
                    </div>
                    <div className='img-card'>
                        <img src={js} />
                        <div className="progress" >
                            <div className="progress-bar bg-success" style={{ width: '85%' }}>85%</div>
                        </div>
                    </div>
                    <div className='img-card'>
                        <img src={react} />
                        <div className="progress" >
                            <div className="progress-bar bg-success" style={{ width: '100%' }}>Progressing</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Skill