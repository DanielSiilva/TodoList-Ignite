import Clipboard from "../../assets/Clipboard.svg"
import { NotaskContainer } from "./styled"



export function Notask(){



    return (
        <NotaskContainer>
            <img src={Clipboard}  title="Clipboard"/>
            
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            
        </NotaskContainer>
    )
}