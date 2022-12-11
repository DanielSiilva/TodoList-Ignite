
export interface Task {
    id: string;
    task: string,
    isComplete: boolean,
}

export const MockTasks: Task[] = [
    {
        id:'1',
        task: 'Estudar Logica',
        isComplete: true
    },
    {
        id:'2',
        task: 'Estudar Laços de repetições',
        isComplete: false
    } ,
    {
        id: '3',
        task: 'Codar mais e mais',
        isComplete: false
    }
]