import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
}
:root{
    --color-main:#d00000;
    --color-secundary:#ffba08
}

html{
    overflow: unset;
}
body, input, button, textarea{
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    color: var(--color-text)
}
h1, h2, h3, h4, h5, h6{
    font-family: 'Bangers', cursive;
    font-weight: 700;
    color: var(--color-title)
}
button{
    cursor: pointer;
}`;
