import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-Serif;
        background-color: #f2f2f2;
    }

    .without-total {
        display: block;
        align-items: center;
        margin-top: 12px;
        color:  #f2f2f2;
        background-color: teal;
        width: 65%;
        border-radius: 7px;
        padding-left: 10px;
    }

    @media (max-width: 750px) {
        .without-total {
            font-size: 10px;
            width: 100%;
        };
    }
`;



export default GlobalStyle;