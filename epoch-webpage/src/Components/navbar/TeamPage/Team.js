import React from 'react'
import './team.css'
import {BiLogoGmail} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


function Team() {
  return (
    <>
    <section>
        <div className="row">
            <h1>Our Team</h1>
        </div>
    
        <div className="row">
            <div className="column">
                <div className="card">
                    <div className="img">
                        <img src="user-profile.jpg" alt="" />
                    </div>
                    <h3>Name</h3>
                    <p>Position In The club</p>
                    <a href="">
                    <BiLogoGmail className='contact_option-icon' />
                    </a>
                    <a href="">
                    <BsInstagram className='contact_option-icon'/>
                    </a>
                    <a href="">
                    <BsLinkedin className='contact_option-icon'/>
                    </a>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <div className="img">
                        <img src="user-profile.jpg" alt="" />
                    </div>
                    <h3>Name</h3>
                    <p>Position In The club</p>
                    <div className="icons">
                    <a href="#">
                    <BiLogoGmail />
                    </a>
                    <a href="#">
                    <BsInstagram />
                    </a>
                    <a href="#">
                    <BsLinkedin />
                    </a>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <div className="img">
                        <img src="user-profile.jpg" alt="" />
                    </div>
                    <h3>Name</h3>
                    <p>Position In The club</p>
                    <a href="">
                    <BiLogoGmail className='contact_option-icon' />
                    </a>
                    <a href="">
                    <BsInstagram className='contact_option-icon'/>
                    </a>
                    <a href="">
                    <BsLinkedin className='contact_option-icon'/>
                    </a>
                </div>
            </div>

            {/* <div className="column">
                <div className="card">
                    <div className="img">
                        <img src="user-profile.jpg" alt="" />
                    </div>
                    <h3>Name</h3>
                    <p>Position In The club</p>
                    <a href="">
                    <BiLogoGmail className='contact_option-icon' />
                    </a>
                    <a href="">
                    <BsInstagram className='contact_option-icon'/>
                    </a>
                    <a href="">
                    <BsLinkedin className='contact_option-icon'/>
                    </a>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <div className="img">
                        <img src="user-profile.jpg" alt="" />
                    </div>
                    <h3>Name</h3>
                    <p>Position In The club</p>
                    <a href="">
                    <BiLogoGmail className='contact_option-icon' />
                    </a>
                    <a href="">
                    <BsInstagram className='contact_option-icon'/>
                    </a>
                    <a href="">
                    <BsLinkedin className='contact_option-icon'/>
                    </a>
                </div>
            </div> */}


        </div>    

    </section>
    </>
  )
}

export default Team

