import { IoNewspaperOutline } from "react-icons/io5";
import styles from './Notaks.module.css'



export function Notaks (){
    return (

        <div className={styles.wrapper}>
            <IoNewspaperOutline size={100}/>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}