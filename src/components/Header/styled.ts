import styled from "styled-components";

export const HeaderContainer = styled.header `
    width:100%;
    height:20vh;
    padding: 1rem;
    background: ${(props)=> props.theme['--gray-700']};

    display:flex;
    justify-content: center;

    @media (max-width: 375px) {
        width: 100vw;
        height: 30vw;
    }
    
`