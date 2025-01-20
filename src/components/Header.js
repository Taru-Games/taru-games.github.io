import React from "react";
import '../css/Header.css'
import logo from '../img/Untitled_design_1_-removebg-preview.png'


export default function Header() {
    return (
      <header className="Header">
        <img src={logo} alt='Logo' className='Logo'/>
      </header>
    );
  }

