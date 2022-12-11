import logo from "../../assets/Logo.svg"
import {HeaderContainer} from "./styled"

export function Header(){

    return(
        <HeaderContainer>
            <img src={logo} title="Logo ToDo List"/>
        </HeaderContainer>
    )
}