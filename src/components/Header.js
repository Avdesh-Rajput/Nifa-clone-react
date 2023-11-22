import React from 'react'
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar from './Navbar';

const Header = () => {
  
  const Wrapper = styled.section`
      .container{
         display:flex;
         justify-content:space-around;
         flex-wrap:wrap;
         height:auto;
         width: 100%;
         background:linear-gradient(90deg, #812868 0%, #f954a4 100%);
         color:white;
         padding:20px;
      }
      
      .title{
          display:flex;
          align-items:center;
      }

      .title h3{
        font-family:Spartan, sans-serif
      }

      .contact-details{
        width:30%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;
      }

      @media (max-width : 443px){
        .title h3{
        width: min-content;
      }
      }
      
  `

  return (
    <>
    <Wrapper>
         <div className='container'>
             <div className='title'>
                <h3>Welcome to the National Institute of Fine Arts</h3>
             </div>
             <div className='contact-details'>
                <p>9555112200</p>
                <p>9810130552</p>
                <p>admission@nifafinearts.com</p>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
             </div>
         </div>
    </Wrapper>
    <Navbar />
    </>
  )
}

export default Header