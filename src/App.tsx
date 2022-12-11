
import {Wrapper, HomeContainer, UpdatedTask,NewTaskContainer} from "./styles/AppStyled"
import { Header } from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from "./styles/themes/default"
import { GlobalStyle } from './styles/global';
import { Notask } from "./components/NoTask/Notask";
import { Task } from "./components/Task/Task";
indexedDB
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { MockTasks } from "./MockDados/MockDados";
import {PlusCircle } from "phosphor-react";




export interface NewTasks {
  id: string;
  task: string,
  isComplete: boolean,
}

export function App() {
  const [tasks, setTasks] = useState(MockTasks);
  const [newTasks, setNewTasks] = useState('')
  

  function handleCrateNewTasks(event: FormEvent){
      event.preventDefault()

      const newTask:NewTasks ={
        id: (tasks.length + 1).toString(),
        task: newTasks,
        isComplete: false,
      }


      setTasks([...tasks, newTask])
      setNewTasks("")
  }

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
      event.target.setCustomValidity('');
      setNewTasks(event.target.value)
  }

  function handleCrateNewTasksINvalid (event:InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório")
  }


  function deleteTask (task: string) {
      const taskWithoutDeletedOne = tasks.filter(item => {
        return item.id !== task
      })

      setTasks(taskWithoutDeletedOne)
  }

  const taskMarkComplete = (markComplete: string) => {
    let taskMapped = tasks.map((item) =>
       item.id === markComplete
          ? { ...item, isComplete: !item.isComplete }
          : { ...item }
    );
    setTasks(taskMapped);
 };


  let completedTasksCounter = 0
  for( const completed of tasks){
      if(completed.isComplete){
        completedTasksCounter ++
      }
  }

  const isTask = tasks.length
  const isNewTaskEmpty = newTasks.length === 0
  
  
  return (
    <ThemeProvider theme={defaultTheme}>

      <Wrapper>
          <Header/>
          <NewTaskContainer>
            <form onSubmit={handleCrateNewTasks}>
              <input
                  placeholder="Adicione uma nova tarefa"
                  value={newTasks}
                  onChange={handleNewTaskChange}
                  onInvalid={handleCrateNewTasksINvalid}
                  required
              />

              <button disabled={isNewTaskEmpty}>
                  Criar
                  <PlusCircle size={20}/>
              </button>
            </form>
          </NewTaskContainer>
          
          <HomeContainer>
            <UpdatedTask>
              <div>
                <p>Tarefas criadas</p>
                <span>{isTask}</span>
              </div>

              <div>
                <p>Concluídas</p>
                <span>{completedTasksCounter} de {isTask}</span>
              </div>
            </UpdatedTask>
            
            {isTask > 0? 
              tasks.map((item) =>(
                <Task 
                  key={item.id}
                  id={item.id}
                  task ={item.task}
                  isComplete ={item.isComplete}
                  deleteTask = {deleteTask}
                  taskMarkComplete = {taskMarkComplete}
                  
                />
              ))
                : 
              <Notask/>
            }
          
          </HomeContainer>
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  )
}


