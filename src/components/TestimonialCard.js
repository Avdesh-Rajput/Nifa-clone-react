import React from 'react'
import styled from 'styled-components'

const TestimonialCard = () => {
   const Wrapper = styled.section`
       height:250px;
       width:400px;
       display: flex;
       justify-content: center;

        .video-card{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:100%;
            width:100%;
            background-color:white;
        }

        @media(max-width:1000px){
            height:450px;
            width:750px;
        }

        @media (max-width: 750px){
            height:300px;
            width:500px;
        }

        @media (max-width: 520px){
             height:150px;
             width:300px;
        }
   `

  return (
    <Wrapper>
           
             <div className='video-card'>
               <iframe
                 width='98%'
                 height='95%'
                 src='https://www.youtube.com/embed/-9cJjaLXKqE'
                 title='YouTube video player'
                 frameBorder='0'
                 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></iframe>
             </div>
        
    </Wrapper>
  )
}

export default TestimonialCard