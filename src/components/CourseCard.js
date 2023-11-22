import React from 'react'
import styled from 'styled-components'
import ButtonKnow from './ButtonKnow'

const CourseCard = () => {
  
     const Wrapper = styled.section`
       height:400px;
       width:auto;
       display: flex;
       justify-content: center;
       

      .card{
        display:flex;
        flex-direction:column;
        height:88%;
        width:80%;
        background-color:lightgrey;
        border-radius:2%;
        transition: transform 0.3s ease-in;
      }

      .img{
         height:60%;
         width:100%;
         background:url('./images/courses.jpg');
         background-size:cover;
         background-repeat:no-repeat;
         box-shadow: 0 25px 60px 0 rgba(0, 0, 0, 0.2);
      }

      .details{
        height:40%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
      }

      .card:hover{
         transform:translate(0 , -10px);
         box-shadow: 0 25px 70px 0 rgba(0, 0, 0, 0.5);
      }

      @media(max-width:1000px){
        height:700px;

        .img{
            height:80%;
        }

        .details{
            height:20%;
        }

        .card{
            height: 82%;
            width: 67%;
        }
      }

      @media(max-width:556px){
          height:400px;

          .details{
             height:50%;
          }

          .card{
            height: 83%;
            width: 72%;
          }
       }

       @media(max-width:830px){
          .card{
            height: 70%;
            width: 71%;
          }
       }
      
     `

  return (
    <Wrapper>
       <div className='card'>
          <div className='img'>

          </div>
          <div className='details'>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <ButtonKnow />
          </div>
       </div>
    </Wrapper>
  )
}

export default CourseCard