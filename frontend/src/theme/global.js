import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    html {
        font-size: 62.5%;
    }

    * {
        font-family: "Roboto", "sans-serif";
        font-size: 1.6rem;
    }

    *:focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }
`;
