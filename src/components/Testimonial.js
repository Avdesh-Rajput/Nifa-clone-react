import React from 'react'
import styled from 'styled-components'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    const Wrapper = styled.section`
        height:auto;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
       ${'' /* padding-right: 15px;
       padding-left: 15px;
       margin-right: auto;
       margin-left: auto; */}
       background: linear-gradient(100deg, rgba(0, 0, 0, 1), rgba(35, 31, 32, 0.6)), url(./images/student-talk.jpg) no-repeat center;
       background-size: cover;
       background-attachment: fixed;
       padding: 90px 15px;
       color: #fff;

       .card{
         margin-top:2rem;
         display:flex;
         justify-content:space-around;
         height:100%;
         width:80%;
       }

       .heading{
        margin-top:2rem;
        margin-bottom:2rem;
       }

       @media(max-width:1500px){
         .card{
            width:100%;
         }
       }

       @media(max-width:1000px){
         .card{
            flex-direction:column;
            align-items:center;
            gap:1rem;
         }
       }
    `

  return (
    <Wrapper>
        <div className='heading'>
        <h1>Student Testimonial</h1>
        </div>
         <div className='card'>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
         </div>
         <div className='card' id='card2'>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
         </div>
    </Wrapper>
  )
}

export default Testimonial