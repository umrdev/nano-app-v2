import { createGlobalStyle } from "styled-components";
import MontserratBold from "./Montserrat/Montserrat-Bold.ttf";
import MontserratMedium from "./Montserrat/Montserrat-Medium.ttf";
import MontserratRegular from "./Montserrat/Montserrat-Regular.ttf";
import MontserratSemiBold from "./Montserrat/Montserrat-SemiBold.ttf";

import "antd/dist/antd.css";


const GlobalStyles = createGlobalStyle`

      * {
        margin : 0;
        padding: 0;
        box-sizing: border-box;
      },
      body {
        font-size: 0.85rem;
        background: blue;
        margin: 0;
        letter-spacing: 0.07em;
      },
    
    
      ::-webkit-scrollbar {
        width: 6px;
        height: 5px;
      }
    
      ::-webkit-scrollbar-corner {
        height: 0;
      }
    
      ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 25px;
      }
    
      ::-webkit-scrollbar-thumb {
        background-color: lightblue;
        border-radius: 25px;
      }
  
        @font-face {
            font-family: 'Montserrat Medium';
            src: url(${MontserratMedium});
        }
        
        @font-face {
          font-family: 'Montserrat Bold';
          src: url(${MontserratBold});
        }
        
        @font-face {
          font-family: 'Montserrat Regular';
          src: url(${MontserratRegular});
        }
        
        @font-face {
          font-family: 'Montserrat SemiBold';
          src: url(${MontserratSemiBold});
        }
        
        
`

export default GlobalStyles;