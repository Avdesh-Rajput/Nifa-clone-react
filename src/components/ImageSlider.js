import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ImageSlider = ({slides}) => {
    const[currEle , setEle] = useState(1);

   const Wrapper = styled.section`
        height:100%;
        width:auto;
       
       .slides{
         height:100%;
         width:100%;
         background:url('${slides[currEle].url}');
         background-size:100%;
         background-repeat:no-repeat;
         
       }

       .slider{
         height:100%;
         width:100%;
         position:relative;
       }

       .left-arrow{
           height:auto;
           width:30px;
           background-color:rgba(0,0,0,0.5);
           position:absolute;
           font-size:45px;
           top:40%;
           color:white;
           left:2%;
       }

       .right-arrow{
           height:auto;
           width:30px;
           background-color:rgba(0,0,0,0.5);
           position:absolute;
           right:2%;
           top:40%;
           font-size:45px;
           color:white;
       }
   `
   const handleLeftClick = () => {
      const isFirstSlide = currEle === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currEle -1;
      setEle(newIndex);
   }

   const handleRightClick = () => {
      const isLastSlide = currEle === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currEle + 1;
      setEle(newIndex);
   }

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleRightClick();
  //  }, 10000);
  // },)

  return (
  <Wrapper>
    <div className='slider'>
        <div className='left-arrow' onClick={handleLeftClick}>{"<"}</div>
        <div className='right-arrow' onClick={handleRightClick}>{">"}</div>
        <div className='slides'> </div>
    </div>
  </Wrapper>
  )
}

export default ImageSlider