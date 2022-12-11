import {TaskContainer,CheckTask} from  "./styled"

import {Trash,Circle, CheckCircle,} from "phosphor-react"

export interface TaskProps {
    id: string;
    task: string,
    isComplete: boolean,
    deleteTask: (task: string) => void,
    taskMarkComplete: (taskCompleted: string) => void,
}


export function Task({id,task,isComplete, deleteTask, taskMarkComplete, }:TaskProps){

    function handleDeleteTask(){
        deleteTask(id)
    }

    return(

        <TaskContainer>
            <div >
               <button onClick={()=> taskMarkComplete(id)}>
                    {isComplete ?
                        <CheckCircle size={18} color="#5E60CE"/> 
                            :
                        <Circle size={18} color={'#4EA8DE'}/>
                    }   
               </button>

                <CheckTask  variant={isComplete}>
                    {task}
                </CheckTask>
            </div>
          
            <button onClick={handleDeleteTask}>
                <Trash size={18} color={'#808080'} />
            </button>
        </TaskContainer>
    )
}