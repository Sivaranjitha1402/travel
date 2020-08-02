import React, { Component } from 'react'
import './Header.scss'
class Header extends Component {
    changeHandle=(e)=>{
                    if (e.target.value !== '') 
                    {
                         e.target.classList.add('active'); 
                    } 
                    else
                    {
                         e.target.classList.remove('active'); 
                    }

    }
    render() {
        return (
            <div className="heads">
           <header className="home-header">
               <div>
                   <img src="https://betterclub.codes/images/e66bda8fe81c2131f9610e5ed496da2e.svg" alt="logo"/>
               </div>
               <div className="head-nav">
                    <span>Travel</span>
                    <span>Nutrition</span>
                    <span>Products</span>
                    <span>About Better</span>
               </div>
               <div className="head-end">
                    <div className="head-search">
                        <input 
                        className="search-bar"
                        placeholder ="Search for City.interest"
                        onChange={this.changeHandle}
                        autoCorrect="false"
                        autoComplete="off"
                        autoCapitalize="sentences"
                        style={{ backgroundImage: `url(${require('../../assets/search.svg')})`, backgroundRepeat:"no-repeat" }}
                        />
                        <span>Bangalore</span>
                        <span>Login</span>
                    </div>
               </div>
            
           </header>
        </div>
        )
    }
}

export default Header
