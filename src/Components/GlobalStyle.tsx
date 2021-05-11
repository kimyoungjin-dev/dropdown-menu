import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};

    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    .home,
    .reports,
    .products,
    .team,
    .reports,
    .home {
        display:flex;
        height:90vh;
        align-items:center;
        justify-content:center;
        font-size:100px;
    }

    a{
        text-decoration:none;
        color:inherit;
    }
    
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:white;
        color:black;
    }

    input{
        all:unset;
    }
`;

export default globalStyles;
