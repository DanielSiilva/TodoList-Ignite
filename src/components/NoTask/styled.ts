import styled from "styled-components";


export const NotaskContainer = styled.div`
    padding:0.4rem;
    height: 100%;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img{
        width: 4rem;
    }

    p:nth-child(1){
        color: ${(props) => props.theme['--gray-200']};
        margin-bottom: 3px;
    }

    p:nth-child(2){
        color: ${(props) => props.theme['--gray-300']};
    }

`