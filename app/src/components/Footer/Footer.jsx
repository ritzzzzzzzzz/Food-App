import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                     <img src={assets.logo}></img>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, accusamus?</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon}></img>
                        <img src={assets.twitter_icon}></img>
                        <img src={assets.linkedin_icon}></img>
                     </div>
                </div>
                <div className="footer-content-center">
                   <h2>Company</h2>
                   <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                   </ul>
                </div>
                <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+830348428</li>
                    <li>abcde@gmail.com</li>
                  </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright@abcdgmail.com-Reversed</p>
        </div>
    )
}
