import React from 'react'
import styled from 'styled-components'


const Navbar = () => {
  const Wrapper = styled.div`
          height:auto;
          width:100%;
          background-color:white;
          padding:18px;
          display:flex;
          justify-content:space-around;
          flex-wrap:wrap;
          overflow:hidden;
          
          .nav{
             display:flex;
             align-items:center;
             font-size:18px;
             font-family: Spartan , sans-serif;
          }

          .nav{
            display:flex;
            gap:2rem;
          }

          .nav li{
            list-style-type: none;
          }

          .logo{
             display:flex;
             align-items:center;
          }

          .logo img{
             height:70px;
          } 
          
          .info{
            display:none;
          }

          .nav div:hover{
              color: #f954a4;
              border-bottom: 1px solid  #f954a4 ;
              border-top: 1px solid  #f954a4 ;
          }
         

        @media (max-width:992px){
            flex-direction:column;
        }

        @media (max-width:600px){

            .nav div{
                display:none;
            }

            .logo{
                justify-content:center;
            }

            .info{
             display:flex;
             width:100%;
             justify-content:center;
             flex-direction:column;
             align-items:center;
             gap:1rem;
          }

           .select{
              width:90%;
              height:1.5rem;
              background-color:rgb(11,32,113);
              color:white;
           }
        }
          
  `

  return (
     <Wrapper>
         <div className='logo'>
            <img src='./images/logo.png' alt='logo'/>
         </div>
         <div className='nav'>
                <div>Home</div>
                <div>About</div>
                <div>Facilities</div>
                <div>Courses</div>
                <div>Activities</div>
                <div>Admission</div>
                <div>Art Gallery</div>
                <div>Franchise</div>
                <div>Online Classes</div>
                <div>Videos</div>
                <div>Pay Fee</div>
                <div>Contact</div>
         </div>
         <div className='info'>
             <p>admission@nifafinearts.com</p>
             <p>+91-9555112200/9810130552</p> 
             
            <select className='select'>
                <option>Home</option>
                <option>Home</option>
                <option>About</option>
                <option>Facioptionties</option>
                <option>Courses</option>
                <option>Activities</option>
                <option>Admission</option>
                <option>Art Gallery</option>
                <option>Franchise</option>
                <option>Online Classes</option>
                <option>Videos</option>
                <option>Pay Fee</option>
                <option>Contact</option>
            </select>
         </div>
     </Wrapper>
  )
}

export default Navbar