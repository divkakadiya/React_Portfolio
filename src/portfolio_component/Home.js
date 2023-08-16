import React from 'react'
import './style.css'
import person from './image/person.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <div className='home'>
                <div className='h-card'>
                    <div className='data'>
                        <span>HEY THERE !</span>
                        <h1>I AM DIVYESH KAKADIYA</h1>
                        <p>CREATIVE WEB DEVELOPER</p>
                        <Link to='pro'>SEE MY WORK</Link>
                    </div>
                    <img className='personimg' src={person} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home