import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus{
        outline: 0;
        box-shadow: ${props=> props.theme['yellow-dark']};
    }
    body{
        background: ${props => props.theme['background']};
        /* color: ${props=> props.theme['']} */
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, text-area, button{
        font: 400 1rem "Baloo 2", sans-serif;
    }
    button{
        outline: 0;
        border: none;
        background: transparent;
    }
}

`