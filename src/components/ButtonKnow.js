import React from 'react'
import styled from 'styled-components'

const Button = () => {
   const Button = styled.div`
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
     user-select: none;
     background: linear-gradient( 90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%) !important;
    border: 2px solid #fff !important;
    margin-top: 1rem;
    font-size: 18px !important;
    padding: 8px 17px !important;
    border-radius: 30px !important;
    color: #fff !important;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
   `

  return (
    <Button>
        Know More
    </Button>
  )
}

export default Button