import React, { FormEvent, useState } from "react";
import styles from './Main.module.css'
import { IoAddCircleOutline } from "react-icons/io5";
import {DataTasks} from "../../data/data"
import { Notaks } from "../Notalks/Notask";
import {Tasks} from "../Tasks/Tasks"

export function Main (){
    const [allTasks, setAllTasks] = useState(DataTasks)
    const [newTasks, setNewTasks] = useState('')

    function handleCrateNewTasks(event: FormEvent) {
        event.preventDefault()
        
        const newTask ={
            id: (allTasks.length + 1),
            task: newTasks,
            inCompleted: false,
        }

        setAllTasks([...allTasks, newTask])
        setNewTasks("")
      }

      function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
       
        setNewTasks(event.target.value);
      }

      const totalTasks = allTasks.length

    return (
        <div className={styles.wrapper}>
           <form className={styles.addTasks} onSubmit={handleCrateNewTasks}>
                <input
                    placeholder="Adicionar uma Tarefa"
                    value={newTasks}
                    onChange={handleNewTaskChange}
                />
                <button type="submit"> Criar <IoAddCircleOutline size={50}/> </button>
           </form>
           <section className={styles.wrapperTasks}>
                <div className={styles.statusTasks}>
                    <span> Tarefas criadas 0</span>
                    <span> Concluídas 0/0</span>
                </div>
                <div className={styles.taskSpace}>
                    {totalTasks > 0? (
                        allTasks
                        .map((item) =>(
                            <Tasks 
                                key={item.id}
                                id={item.id}
                                taks ={item.task}
                                inCompleted={item.inCompleted}
                            />
                        ))
                    )
                         
                        : <Notaks/>
                    }
                </div>
           </section>
        </div>
    )




}