import {createGlobalStyle} from "styled-components";
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
`

export default GlobalStyles
