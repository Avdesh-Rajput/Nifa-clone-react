import React from 'react'
import styled from 'styled-components'
import CourseCard from './CourseCard'

const Courses = () => {
  
    const Wrapper = styled.div`
       display:flex;
       flex-direction:column;
       align-items:center;
       height:auto;
       width:100%;
       background:url('./images/artboard2.png');
       background-size:contain;

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
         }  
       }

    `

  return (
    <>
    <Wrapper>
         <div className='heading'>
          <h1>Our Courses</h1>
        </div>
         <div className='card'>
         <CourseCard />
         <CourseCard />
         <CourseCard />
         <CourseCard />
         </div>
         <div className='card' id='card2'>
         <CourseCard />
         <CourseCard />
         <CourseCard />
         <CourseCard />
         </div>
  </Wrapper>

</>
         
  
  )
}

export default Courses