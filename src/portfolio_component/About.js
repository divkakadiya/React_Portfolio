import React from 'react'
import './style.css'
import person from './image/person.jpg'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <React.Fragment>
            <div className='about'>
                <div className='a-card'>
                    <img className='personimg' src={person} />
                    <div className='data'>
                        <h2 style={{ fontFamily: 'cursive' }}>About me</h2>
                        <p>Hi there! My self divyesh Kakadiya. I am front-end developer.I am working with <b>HTML, CSS, BOOTSTRAP, JAVASCRIPT and REACT JS</b>.I am creative developer.I am working fast and 100% accuracy work.I am creating user-friendly and visually appealing websites and My Educational background is 12<sup>th</sup> complete.  As a developer, I'm constantly exploring new technologies and staying up-to-date with the latest web  development trends. I believe that the web has the power to transform businesses and enhance user             experiences, and I'm dedicated to creating impactful digital solutions that achieve just that.</p>
                        <Link to='/contact'>HIRE ME</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About