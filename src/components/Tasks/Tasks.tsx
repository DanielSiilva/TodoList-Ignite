import styles from './Taks.module.css'
import { Check, Circle, Trash } from 'phosphor-react';

interface TasksProps {
    id: string;
    taks:string;
    isCompleted: boolean;
    // onDeleteTask: (id:string) => void;
    // onTaskCompletion: (id:string) => void;
}



export function Tasks ({id, isCompleted,taks}:TasksProps){



    return (

        <div className={styles.wrapper}>
                <section>
                    <button> 
                        {isCompleted ? <Check size={25}  /> : <Circle size={25} color='blue' />}
                    
                    </button>
                    <div>
                        <p>{taks}</p>
                    </div>
                    
                </section>
                <button>
                    <Trash size={25}  />
                </button> 
        </div>
    )
}