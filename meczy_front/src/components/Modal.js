import React from "react"
import styled,{css} from "styled-components"
import {Modal} from "antd";

const MModal = styled(Modal)`
       &&&{
         .ant-modal, .ant-modal-content {
           /*height: 100vh;
           width: 100vw;*/
           margin: 0;
           top: 0;
           overflow-x: hidden;
           overflow-y: visible !important;
         }
         .ant-modal-body {
           height: calc(100vh - 110px);
         }
       }
    `

export default MModal