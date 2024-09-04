// src/App.tsx

import { useEffect, useState } from 'react'
import { remult } from 'remult'
import { Task } from './shared/Task'
import {TasksController} from "./shared/TasksController.ts";

const taskRepo = remult.repo(Task)

// src/App.tsx

const setAllCompleted = async (completed: boolean) => {
    await TasksController.setAllCompleted(completed)
}

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        taskRepo.find().then(setTasks)
    }, [])
    return (
        <div>
            <h1>Todos</h1>
            <main>
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <input type="checkbox" checked={task.completed}/>
                            {task.title}
                        </div>
                    )
                })}
            </main>
            <div>
                <button onClick={() => setAllCompleted(true)}>Set All Completed</button>
                <button onClick={() => setAllCompleted(false)}>Set All Uncompleted</button>
            </div>
        </div>

    )
}