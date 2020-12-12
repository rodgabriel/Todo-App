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
        box-sizing: border-box;
    }
    
    

    body {
        background: #Eff3F4;

        font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    /* total width */
    body::-webkit-scrollbar {
        background-color: transparent;
        width:12px
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
        background-color: #0808f8aa;	
        background-image: -webkit-linear-gradient(45deg,
	                                          rgba(255, 255, 255, .2) 25%,
											  transparent 25%,
											  transparent 50%,
											  rgba(255, 255, 255, .2) 50%,
											  rgba(255, 255, 255, .2) 75%,
											  transparent 75%,
											  transparent);
        border-radius: 0;
        border: 1px solid #33336666;
    }
    body::-webkit-scrollbar-thumb:hover {
        filter: brightness(60%);
    }

    /* set button(top and bottom of the scrollbar) */
    body::-webkit-scrollbar-button {display:none}

`;

export default GlobalStyle;
