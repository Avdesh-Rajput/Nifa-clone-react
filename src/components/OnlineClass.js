import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const OnlineClass = () => {
   
    const Wrapper = styled.section`
        height:100vh;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
       ${'' /* padding-right: 15px;
       padding-left: 15px;
       margin-right: auto;
       margin-left: auto; */}
       background: linear-gradient(100deg, rgba(0, 0, 0, 1), rgba(35, 31, 32, 0.6)), url(./images/appbg.jpg) no-repeat center;
       background-size: cover;
       background-attachment: fixed;
       padding: 90px 15px;
       color: #fff;

       .content{
           height:90%;
           width:30%;
       }

       .content h2{
         color: #fff !important;
         text-align: left !important;
         margin-bottom: 10px;
       }

       h2{
        margin-top: 0 !important;
        font-family: 'Lexend', sans-serif !important;
        font-weight: bolder !important;
        font-size:30px;
       }

       .content p{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
       }

       p{
        font-family: 'Spartan', sans-serif !important;
        font-size: 18px;
        color: white;
        line-height: 23px;
        font-weight: normal;
        margin: 5px 0px 7px 0px;
       }

       .video{
           display:flex;
           flex-direction:column;
           justify-content:center;
           align-items:center;
           height:90%;
           width:45%;
           margin-left:2rem;    
        }

        .video-card{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:80%;
            width:100%;
            background-color:white;
        }

        .app{
            font-size: 16px;
            color: white;
            margin-bottom: 1rem;
            text-transform: capitalize;
            font-weight: 600;
            margin-top: 5rem;
            font-family: 'Lexend', sans-serif !important;
        }

        .download{
             gap:1rem;
             display:flex;
             height:300px;
             width:300px;
        }

        .ios-store{
             height:100%;
             width:100%;
             background:url('./images/appstore.png');
             background-size:contain;
             background-repeat:no-repeat;
        }

        .app-store{
             height:100%;
             width:100%;
             background:url('./images/gplay.png');
             background-size:contain;
             background-repeat:no-repeat;
        }

        @media(max-width:1200px){
            .video{
                display:none;
                visibility:none;
            }

            .content{
                width:80%;
                height:100%;
            }
        }

        @media(max-width:556px){
            .content{
                width:100%;
                height:50%;
                margin-bottom:100%;
            }
        }
    `

  return (
    <Wrapper>
        <div className='content'>
             <h2>Online Classes</h2>
             <p>
             Dear Students/Parents, Nifa presents its Learning App for your regular art practice in 
             which we have added many amazing features Like: Step-by-step recorded demo videos prepared by 
             your faculty members. Regular assessment of your practise through assignment section. Live class section from same app.
             Attendance, payment invoice, art news, announcements, important information and direct connect with the management
             team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.
             </p>
             <p>
             We wish u Happy Learning. Stay Safe n Healthy.
             </p>
             <Button />
             <p className='app'>Download the app</p>
             <div className='download'>
                 <div className='app-store'> </div>
                 <div className='ios-store'> </div>
             </div>
        </div>
        <div className='video'>
             <div className='video-card'>
               <iframe
                 width='95%'
                 height='90%'
                 src='https://www.youtube.com/embed/-9cJjaLXKqE'
                 title='YouTube video player'
                 frameBorder='0'
                 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></iframe>
             </div>
        </div>
    </Wrapper>
  )
}

export default OnlineClass