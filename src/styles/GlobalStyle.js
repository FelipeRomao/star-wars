import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    padding: 0;
    margin: 0;
    background-image: url('start-background.png');
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    
    a {
    color: inherit;
    text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    input,
    span,
    label,
    fieldset,
    p {
        color: #f5f5f5 !important;
        border-color: #f5f5f5 !important;
    }

    ul {
        background-color: transparent !important;
    }

    @media(max-width: 500px) {
        div {
            width: 80vw;
        }
    }
`;
