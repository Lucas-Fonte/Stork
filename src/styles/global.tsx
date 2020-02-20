import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #root {
        height: 100%;
        overflow: hidden;
    }
    ::-webkit-scrollbar {
        width: 0px;  
        background: transparent; 
    }
    body {
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
    }
    body, input, button, select, label {
        font: 12px 'Montserrat', sans-serif;
    }
    a{
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
