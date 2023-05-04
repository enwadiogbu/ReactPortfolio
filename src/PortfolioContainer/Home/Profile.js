import React from 'react';
import Typical from 'react-typical'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.facebook.com/businessprotechnology/'>
                            <i className='fa fa-facebook-square'>

                            </i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'>

                            </i>
                        </a>
                        <a href='https://www.instagram.com/odumproduction/'>
                            <i className='fa fa-instagram'>

                            </i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCwlyPxKFLymAyfF7HC6zPRw'>
                            <i className='fa fa-youtube-square'>

                            </i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter'>

                            </i>
                        </a>
                    </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Hello, I'M <span className='highlighted-text'>Emmanuel, Jr.</span>
                    </span>
                </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                <Typical
                                loop={Infinity}
                                steps = {[
                                    "Enthusiastic Developer 🔴",
                                    1000,
                                    "Full Stack Developer 💻",
                                    1000,
                                    "MERN Stack Developer 😎",
                                    1000,
                                    "Cross Platform Developer 🌐",
                                    1000,
                                    "React/React Native Developer 📲",
                                    1000,

                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href='#'></a>
                    </div>
                </div>
            </div>
        </div>
    );
}