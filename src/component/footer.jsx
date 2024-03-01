import React from 'react'
import{BsFacebook} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
import{FaSquarespace} from 'react-icons/fa'

function Footer() {
  return (
    <div style={{backgroundColor:'orange'}}>
      <div>
        <ul style={{display:'flex',gap:'20px',listStyle:'none',justifyContent:'center'}}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Tours</li>

        </ul>
      </div>
      <div style={{display:'flex',gap:'20px',justifyContent:'center'}}>
      <BsFacebook/>
      <BsTwitter/>
      <FaSquarespace/>
      </div>
      <p style={{textAlign:'center'}}>cpoy right Backroads travel tours company 2023.all rights reserved</p>
    </div>
  )
}

export default Footer