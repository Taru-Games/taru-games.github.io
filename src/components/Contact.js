import React from "react";
import '../css/Contact.css';


import emil from '../img/emilPng.jpg'
import arsham from '../img/arshamPng.png'
import logo2 from '../img/Untitled_design_1_-removebg-preview.png'



function Contact() {
    return(
      <section className='ContactInfo'>
        <h1>
          The team
        </h1>
        <div class='contacts'>
          <div class='contact-card'>
            <img src={emil} alt='Emil'/>
            <h3>Emil Bulut CEO</h3>
            <p>Email:</p>
            <a href="mailt:emil.bulut@tarugames.com">emil.bulut@tarugames.com</a>
          </div>
          <div class='contact-card'>
            <img src={arsham} alt='Arsham'/>
            <h3>Arsham Soltani CTO</h3>
            <p>Email:</p>
            <a href="mailto:arsham.soltani@tarugames.com">arsham.soltani@tarugames.com</a>
          </div>
        </div>
      </section>
    )
  }

function Address() {
    return(
        <div className='Addy'>
        <img src={logo2} alt='logo' className='LogoSmall'/>
        <p><b>Taru Games Oy <a href="https://www.linkedin.com/company/taru-games/posts/?feedView=all" target="_blank" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9.04h3.56v11.41zM5.34 7.67c-1.14 0-2.07-.94-2.07-2.09 0-1.15.93-2.09 2.07-2.09 1.14 0 2.07.94 2.07 2.09 0 1.15-.93 2.09-2.07 2.09zm15.11 12.78h-3.56v-5.57c0-1.33-.03-3.05-1.85-3.05-1.85 0-2.13 1.44-2.13 2.93v5.69H9.36V9.04h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v6.21z"/>
    </svg></a> </b></p>
        <p>Haukilahdenkuja 15 C 125, Helsinki</p>
        <p>Finland</p>
      </div>
    )
    
}

export {Contact, Address};