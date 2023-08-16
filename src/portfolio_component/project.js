import React from 'react'
import './style.css'
import pro1 from './image/pr-1.png'
import pro2 from './image/pr-2.png'
import pro3 from './image/pr-3.png'
import pro4 from './image/pr-4.png'

const Project = () => {
  return (
    <React.Fragment>
      <div className='pro-page'>
        <div className='pro-cards'>
          <div className='pro-card'>
            <img src={pro1} />
            <p>This project made with HTML & CSS.</p>
            <button>VIEW</button>
          </div>
          <div className='pro-card'>
            <img src={pro4} />
            <p>This project made with HTML,CSS,BOOTSTRAP & JAVASCRIPT.</p>
            <button>VIEW</button>
          </div>
          <div className='pro-card'>
            <img src={pro3} />
            <p>This project made with HTML,CSS,BOOTSTRAP & JQUERY.</p>
            <button>VIEW</button>
          </div>
          <div className='pro-card'>
            <img src={pro2} />
            <p>This project made with HTML,CSS & BOOTSTRAP.</p>
            <button>VIEW</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project