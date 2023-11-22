import React, { useState } from 'react'
import styled from 'styled-components'

const Student = () => {
    const [file , setFile] = useState(null);
    console.log(file);

    const Wrapper = styled.section`
        height:auto;
        width:100%;
        background-color:white;

        h1{
            text-align:center; 
            font-family: sans-serif !important;
            font-weight: 600 !important;
        }

        .heading h1{
            margin-top:7rem;
            margin-bottom:3rem;
        }

        .container{
            padding:20px;
            margin-top:0.5rem;
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            height:100%;
            width:100%;
            
        }

        .gallary{
            display:flex;
            justify-content:center;
            width:294px;
            height:300px;
            object-fit: cover;
            cursor:pointer;
        }

        .gallary2{
            display:flex;
            justify-content:center;
            width:1120px;
            height:200px;
            object-fit: contain;
            cursor:pointer;
        }

        .gallary2 img{
             width:100%;
             border-radius: 1vmin;
        }

        .gallary img{
            max-height: 100%;
            min-width: 20%;
            object-fit: cover;
            vertical-align: bottom;
            border-radius: 1vmin;
        }

        .gallary3{
            display:flex;
            justify-content:center;
            width:800px;
            height:300px;
            object-fit: contain;
            cursor:pointer;
        }

        .gallary3 img{
             width:100%;
             border-radius: 1vmin;
        }

        .pop-up-media{
             position:fixed;
             top:0;
             left:0;
             z-index:100;
             background: rgba(0,0,0,0.8);
             width:100%;
             height:100%;
        }

        .pop-up-media img{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50% , -50%);
            display:block;
            max-width:95%;
            max-height:95%;
            object-fit: contain;

        }

        .pop-up-media span{
            position:absolute;
            top:5px;
            right:20px;
            font-size:50px;
            font-weight:normal;
            z-index:100;
            cursor:pointer;
            color:grey;
            user-select:none;
        }

    `

    const handleClick = (src) => {
        setFile(src);
    }

  return (
    <Wrapper>
        <div className='heading'>
            <h1> Student work</h1>
        </div>

        <div className='container'>
            <div className='gallary'>
                <img src='./images/img1.jpg' onClick={() => handleClick('./images/img1.jpg')}/>
            </div>
            <div className='gallary'>
                <img src='./images/img2.jpg' onClick={() => handleClick('./images/img2.jpg')}/>
            </div>
            <div className='gallary'>
                <img src="./images/img3.jpg" onClick={() => handleClick('./images/img3.jpg')}/>
            </div>
            <div className='gallary'>
                <img src='./images/img4.jpg' onClick={() => handleClick('./images/img4.jpg')}/>
            </div>
        </div>

        <div className='container'>
           <div className='gallary2'>
              <img src='./images/img5.jfif'  style={{objectFit: 'cover'}} onClick={() => handleClick('./images/img5.jfif')}/>
           </div>
        </div>

        <div className='container'>
           <div className='gallary3'>
           <img src='./images/img6.jfif' onClick={() => handleClick('./images/img6.jfif')}/>
           </div>
           <div className='gallary'>
           <img src='./images/img7.jpg' onClick={() => handleClick('./images/img7.jpg')}/>
           </div>
        </div>

        
        <div className='container'>
            <div className='gallary'>
                <img src='./images/img14.jpeg' onClick={() => handleClick('./images/img14.jpeg')}/>
            </div>
            <div className='gallary'>
                <img src='./images/img15.jpeg' onClick={() => handleClick('./images/img15.jpeg')}/>
            </div>
            <div className='gallary'>
                <img src="./images/img16.jpeg" onClick={() => handleClick('./images/img16.jpeg')}/>
            </div>
            <div className='gallary'>
                <img src='./images/img17.jpg' onClick={() => handleClick('./images/img17.jpg')}/>
            </div>
        </div>


        <div className='container'>
            <div className='gallary'>
                <img src='./images/img18.jpeg' onClick={() => handleClick('./images/img18.jpeg')}/>
            </div>
            <div className='gallary'>
                <img src='./images/img19.jpg' onClick={() => handleClick('./images/img19.jpg')}/>
            </div>
            <div className='gallary'>
                <img src="./images/img20.jpeg" onClick={() => handleClick('./images/img20.jpeg')}/>
            </div>
            <div className='gallary'>
                <img src='./images/img21.jpeg' onClick={() => handleClick('./images/img21.jpeg')}/>
            </div>
        </div>

        <div className='container'>
           <div className='gallary2'>
              <img src='./images/img22.jpg' style={{objectFit: 'cover'}} onClick={() => handleClick('./images/img22.jpg')}/>
           </div>
        </div>


        <div className='pop-up-media' style={{display : file ? "block" : "none"}}>
            <span onClick={() => setFile(null)}>&times;</span>
            <img src={file}/>
        </div>

    </Wrapper>
  )
}

export default Student