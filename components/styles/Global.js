import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        background: ${({ theme }) => theme.colors.body};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    p {
        opacity: 0.6;
        line-height: 1,5;
        letter-space: 0.5;
        max-width: 60ch;
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyles