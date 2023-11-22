import React from 'react'
import styled from 'styled-components'



const Footer = () => {
   const Wrapper = styled.section`
      .footer{
        height:70vh;
        width: 100%;
        background:url('./images/fotbg2.jpeg');
        background-repeat:no-repeat;
        background-size: cover;
        display: flex;
        flex-wrap: wrap;
       overflow: hidden;
      }

      .list{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 50%;
        width: 100vw;
      }

      .company ul,
      .activity ul,
      .course ul,
      .location ul {
         display: flex;
         flex-direction: column;
         align-items: center; /* Center the items vertically */
         flex: 1;
         padding: 0 20px; /* Add horizontal spacing between items */
        }

/* Additional styles for the ul elements */
.company ul,
.activity ul,
.course ul,
.location ul {
  list-style: none;
  text-align: center;
  margin: 0; /* Remove default list margin */
  padding: 0; /* Remove default list padding */
}

/* Style the h3 elements */
.company h3,
.activity h3,
.course h3,
.location h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.menu{
    display: flex;
    width: 90vw;
    justify-content: space-between;
    margin: auto;
}

    .icon img{
        height:60%;
        width:40%;
    }

    .icon{
        display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    }
   `

  return (
    <>
     <Wrapper>
      <div className='footer'>
         <div className='list'>
             <div className='company'> 
                 <ul>
                    <li>
                       <h3>Company</h3>
                    </li>
                   <li>About</li> 
                  <li>Facilities</li> 
                    <li>
                        Career
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Refund Policy
                    </li>
                     <li>
                        Privacy Policy
                     </li>
                   
                 </ul>
             </div>
             <div className='activity'>
             <ul>
                    <li>
                       <h3>Company</h3>
                    </li>
                   <li>About</li> 
                  <li>Facilities</li> 
                    <li>
                        Career
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Refund Policy
                    </li>
                     <li>
                        Privacy Policy
                     </li>
                   
                 </ul>
             </div>
             <div className='course'>
             <ul>
                    <li>
                       <h3>Company</h3>
                    </li>
                   <li>About</li> 
                  <li>Facilities</li> 
                    <li>
                        Career
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Refund Policy
                    </li>
                     <li>
                        Privacy Policy
                     </li>
                   
                 </ul>
             </div>
             <div className='location'>
             <ul>
                    <li>
                       <h3>Company</h3>
                    </li>
                   <li>About</li> 
                  <li>Facilities</li> 
                    <li>
                        Career
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Refund Policy
                    </li>
                     <li>
                        Privacy Policy
                     </li>
                   
                 </ul>
             </div>
         </div>
         <div className='menu'>
             <div className='info'>
             <h3>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</h3>

            <p>Connect With Us</p> 

            <p>9555112200,9810130552</p>

            <p>admission@nifafinearts.com</p>
             </div>
             <div className='icon'>
                <img src='./images/gplay.png'/>
                <p>Download the app</p>
             </div>
         </div>
     </div> 
    </Wrapper>
    </>
  )
}

export default Footer