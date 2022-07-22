import React from "react";
import {Input} from "antd"
import styled, {css} from "styled-components"

const TextField = styled(Input)`
  &&&{
    background: #FFFFFF;
    font-family: 'Montserrat Regular';
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    ${props => props.small ?
            css`border-radius:  10px;
              padding : 8px 20px;
              font-size : 14px`:
            props.large ?
            css`border-radius:  16px;
              padding : 14px 20px;
              font-size : 18px;
              width: 100%;`:
            css`border-radius:  6px;
              padding : 5px 10px;
              font-size : 8px`};
    margin-top: 2px;
    margin-bottom: 12px;
    font-weight: normal;
  }
`

export default TextField

