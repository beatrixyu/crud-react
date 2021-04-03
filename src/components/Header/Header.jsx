import React from 'react'
import logo from '../../assets/logo2.png'
import './Header.css'

const Header =()=> {
     return(
         <div>
            <header className="landingpageHeader">
                    <a href="/" className="image__container"><img src={logo} alt="logo"/></a>
                    <nav>
                      <ul>
                      <li><a to="/aboutus" className='headerHome'>About</a></li>                       
                        <li>
                        <a to="/portfolio" className='headerPosts'>Portfolio</a>
                        </li>
                        <li><a to="/login" className='headerLogin'>Login</a></li>
                        <li className="signup">
                        <a to="/signup" className="signupLink">Jobs</a></li>
                    </ul>
                </nav>
            </header> 
         </div>
     )
 }

 export default Header