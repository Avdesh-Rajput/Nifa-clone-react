import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Info = () => {
  const Wrapper = styled.div`
       height:auto;
       width:100%;
       display:flex;
       justify-content:center;
       align-items:center;
      
      .info{
         margin-top:7rem;
         margin-bottom:7rem;
         display:flex;
         flex-direction:column;
         justify-content:center;
         align-items:center;
         height:100%;
         width:80%;
      }

      p{
        margin: 0 0 10px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }

      .info p{
         font-family: Spartan, sans-serif;
         font-size:normal;
         color:grey;
         line-height:23px;
         text-align:center;
      }

      .heading{
        color: #000 !important;
        margin-top: 0 !important;
        font-family: 'Lexend', sans-serif !important;
        font-weight: 600 !important;
        margin: 0.67em 0;
      }

      @media(max-width:556px){
         height:auto;
      }
  `

  return (
    <Wrapper>
      <div className='info'>
        <div className='heading'>
        <h1>Welcome To National Institute of Fine Arts</h1>
        </div>
        <br/>
        <p>National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists 
        and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA 
        in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and 
        Arts University (Gwalior). Its 
        aim is to provide education and training to students on a wide spectrum of Fine Arts.</p>
        <br/>
        <p>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.
         We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals
         while recognizing that the Art is one of the foundations of a healthy and creative society. This is a place where national and international leaders 
         in the arts gather, teach, show and perform their work. The institute prides itself on its openness and on creating an environment that is safe,
         welcoming, and built on mutual respect.</p>
         <p style={{color:'black'}}>
           <strong>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes. </strong>
         </p>
         <Button>Read more</Button>
      </div>
    </Wrapper>
  )
}

export default Info

