import styled, {css} from "styled-components";

interface TaskProps {
    variant?: boolean
}

export const TaskContainer = styled.div `
    border: 1px solid ${(props) => props.theme['--gray-400']};
    background: ${(props)=> props.theme['--gray-500']};
    border-radius: 8px;
    font-size: 1rem;
    padding: 0.8rem;
    margin-top: 1rem;

    display: flex;
    justify-content:space-between;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
    }
    
    button{
        width:2rem;
        background: ${(props) => props.theme['--gray-500']};
        color: ${(props) =>props.theme['--gray-300']};
        border: 0px;

       
    }

   
`

export const ButtonCheck = styled.button`
  border: 2px solid red;

`

export const CheckTask = styled.span<TaskProps> `

     ${(props) =>
        props.variant === true ?

        css`
            color: #808080; 
            text-decoration: line-through
        
        ` : 

        css`
            text-decoration:none;
        `
    
    }
`







