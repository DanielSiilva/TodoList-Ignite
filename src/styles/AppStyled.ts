import styled from "styled-components";



export const Wrapper = styled.div ` 
    width: 100vw;

    display: flex;
    flex-direction: column;
       
`


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin: 4rem  auto;
    width: 50vw;
    height:50vh;
    padding: 1rem;

    @media (max-width: 375px) {
         width: 100vw;
  
    }

`

export const UpdatedTask = styled.div`
    width: 100%;
    height:2rem;
    border-bottom: 1px solid ${(props)=> props.theme['--gray-400']};


    display: flex;
    justify-content:space-between;

    p:nth-child(1){
      color: ${(props)=>props.theme['--blue']} ;
    }

    p:nth-child(2){
      color: ${(props)=>props.theme['--purple']} ;
    }

    span{
        border-radius: 10%;
        background: ${(props) => props.theme['--gray-400']};
        color: ${(props) => props.theme['--gray-200']};
        padding: 0.2rem;
        border-radius: 10px;
        font-size:0.8rem;
        font-weight:bold;

          
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 0.5rem;
    }

`



export const NewTaskContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin: -1.5rem 0rem;


    form{
        display: flex;
        justify-content: center;
        align-items: center;
        
        gap: 0.5rem;
        width:60%;
        
    }


    input{
        display: flex;
        width:70%;
        height:3rem;
        padding:1rem;

        background: ${(props)=> props.theme['--gray-500']};
        color: ${(props)=> props.theme['--gray-200']};
        border-radius: 8px;
    }

    button{
        height:3rem;
        width: 5rem;
        border-radius: 8px;
        gap: 0.5rem;

        background: ${(props) => props.theme['--blue-dark']};
        color:${(props) => props.theme['white']} ;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    @media (max-width: 375px) {
        display: flex;
        justify-content:center;
        align-items:center;
        margin: -1.2rem 0rem;

        input{
            width: 80vw;
            height:5vh;
        }

        button{
            width: 20vw;
            height:5vh;
            padding: 0.2rem;
        }
    }

`
