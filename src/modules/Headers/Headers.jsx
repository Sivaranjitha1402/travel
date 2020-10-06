import React from 'react'
import './Headers.scss'
import Logo from '../../assets/logo.svg'
function Headers() {
    return (

        <div className="heads">
            <div className="img">
                <a href="/">
                <img src={Logo} alt="images" />
                </a>
            </div>
            <div className="head-links">

                <div className="wrapper">
                    <a className="link" href="/book">Bookings</a>
                    <a className="link" href="/kids">Kids</a>
                    <a className="link" href="/places#top">Recent Hits</a>
                    <a className="link" href="/places#suggest">Easy Go</a>
                </div>
                <div className="city">
                    <div className="search">
                        <input className="search-input" placeholder="Search for City, Interest" />
                    </div>
                    <div className="city-nav">
                        <select>
                            <option>Bangalore</option>
                            <option>Chennai</option>
                            <option>Mumbai</option>
                        </select>
                        <a className="link">Login</a>
                    </div>

                </div>
            </div>
            <div className="menu-bar" onClick={(e) => {

                if (!document.querySelector(".menu-bar").classList.contains('open')) {
                    document.querySelector(".menu-bar").classList.add('open');
                    document.querySelector("body").classList.add('head-open');
                }
                else {
                    document.querySelector(".menu-bar").classList.remove('open');
                    document.querySelector("body").classList.remove('head-open');
                }
            }}>
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
            </div>
        </div>


    )
}
export default Headers;