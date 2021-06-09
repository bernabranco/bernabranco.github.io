import React from 'react';
import './Footer.css';

import mail from './icons/mail.svg';

export default function Footer() {
   
        return (
            <div className="footer-bar">

                <div className = 'footer-container'>

                    <div className="footer-items">
                        <p className="footer-p">Copyright Release 2021</p>
                    </div>

                    <div className="footer-items">
                        <img className="footer-img" src={mail} alt='mail' key='mail'></img>
                        <p className="footer-p">release@gmail.com</p>
                    </div>

                    <div className="footer-items">
                        <p className="footer-p">item 2</p>
                    </div>

                    <div className="footer-items">
                        <p className="footer-p">Made in Porto, Portugal</p>
                    </div>

                </div>

            </div>  
        )
    
}
