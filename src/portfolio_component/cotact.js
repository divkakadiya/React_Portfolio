import React from 'react'
import './style.css'

const Contact = () => {
    return (
        <React.Fragment>
            <div className='contact'>
                <div className='c-info'>
                    <h2 style={{ fontFamily: 'cursive' }}>Cotact Us</h2>
                    <div className='u-info'>
                        <i class="ri-shield-user-fill"></i>
                        <h6>Divyesh Kakadiya</h6>
                    </div>
                    <div className='u-info'>
                        <i class="ri-contacts-fill"></i>
                        <h6>9327991545</h6>
                    </div>
                    <div className='u-info'>
                        <i class="ri-mail-open-fill"></i>
                        <h6>divkakadiyarnw@gmail.com</h6>
                    </div>
                    <div className='u-info'>
                        <i class="ri-user-location-fill"></i>
                        <h6>Surat,Gujarat</h6>
                    </div>
                    <button>CONTACT ME</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact