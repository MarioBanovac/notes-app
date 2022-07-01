import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // CSS RESET
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        height:100vh;
        font-family:sans-serif;
        display:flex;
        justify-content:center;
    }

    a{
        text-decoration:none;
    }
    ul{
        list-style-type:none;
    }
`;
