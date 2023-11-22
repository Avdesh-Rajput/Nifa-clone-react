import React from 'react'
import ImageSlider from './ImageSlider'
import styled from 'styled-components'
import Info from './Info'
import OnlineClass from './OnlineClass'
import Courses from './Courses'
import Student from './Student'
import Testimonial from './Testimonial'

const slides = [
   {url: './coarsuel-img/Pic1.jpg' , title: 'pic1' },
   {url: './coarsuel-img/Pic2.jpg' , title: 'pic2' },
   {url: './coarsuel-img/Pic3.jpg' , title: 'pic3' },
   {url: './coarsuel-img/Pic4.jpg' , title: 'pic4' },
   {url: './coarsuel-img/Pic5.jpg' , title: 'pic5' },
]

const Home = () => {
   const Wrapper = styled.section`
      height:80vh;
      width:auto;

     .slider{
        height:100%;
        width:100%;
     }

     @media(max-width:1450px){
            height:70vh;
        }

     @media(max-width:1350px){
         
            height:65vh;
         
     }

     @media(max-width:1150px){
         
            height:55vh;
         
     }

     @media(max-width:1050px){
         
            height:45vh;
         
     }

     @media(max-width:900px){
         
            height:22vh;
         
     }
   `

  return (
    <>
   <Wrapper>
    <div className='slider'>
       <ImageSlider slides={slides}/>
    </div> 
   
   </Wrapper>
    <div> <Info /></div>
    <div> <OnlineClass /> </div>
    <div> <Courses /> </div>
    <div> <Student /> </div>
    <div> <Testimonial/> </div>
    </>
  )
}

export default Home