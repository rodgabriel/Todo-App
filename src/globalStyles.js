import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html, body {
        height: 100vh;
    }
    
    

    body {
        background: #Eff3F4;

        font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    /* total width */
    body::-webkit-scrollbar {
        background-color: transparent;
        width:16px
    }

    /* background of the scrollbar except button or resizer */
    body::-webkit-scrollbar-track {
        background-color: transparent;
    }
    body::-webkit-scrollbar-track:hover {
        background-color:#f4f4f4
    }

    /* scrollbar itself */
    body::-webkit-scrollbar-thumb {
        background-color:#131313;
        border-radius: 12px;
        border: 3px solid #333333;
    }
    body::-webkit-scrollbar-thumb:hover {
        background-color:#232323;
        border:4px solid #434343;
    }

    /* set button(top and bottom of the scrollbar) */
    body::-webkit-scrollbar-button {display:none}

`;

export default GlobalStyle;
