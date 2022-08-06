import './Construction.css';
import React from 'react'
import construction from '../assets/images/construction.png';

export default function Construction() {
  return (
    <div className='construction'>
        <h3>This page is under construction</h3>
        <img src={construction} alt='construction' className='pulse'/>
    </div>
  )
}
