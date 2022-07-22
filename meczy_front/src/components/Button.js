import {Button} from "antd"
import styled, {css} from "styled-components";
import React from 'react'

const MButton = styled(Button)`
      &&& {
        ${props => props.small ? 
             css`padding: 18px 18px;
                 font-size: 13px;
                 border-radius: 10px;
                 font-family: 'Montserrat Bold';
             ` : 
                 props.large ? 
             css`padding : 28px 25px;
                font-size: 16px;
                width : 100%;
                border-radius: 18px;` :
                props.medium ?
             css`padding : 20px 18px;
                font-size: 16px;
                width : 100%;
                border-radius: 16px;` :        
             css`padding : 15px 15px;
                font-size: 10px;`
       } 
      ${props => props.primary ? 
            css`
              background:  #2E79B7;
              color : #ffffff;      
            ` : 
            props.secondary ? 
            css`
              background: #434142;
              color: #ffffff
            ` : 
            props.tertiary ? 
            css`
              background: #939487;
              color: #ffffff` :   
            props.BOutline ?
            css`
              background: transparent;
              border: 1px solid #434142; 
              color : #434142;`:
            css`
              background: transparent;
              border: none;
              outline: none;
              color : #434142;`    
        };
        font-family: 'Montserrat Medium';
        text-align: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top : 2px;
        margin-bottom : 12px;
      }
`


export default MButton
