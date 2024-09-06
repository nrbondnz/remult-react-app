import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { Task } from './shared/model/Task';
import { TasksController } from './shared/TasksController';
import { Muscle } from './shared/model/Muscle';

const taskRepo = remult.repo(Task);
const muscleRepo = remult.repo(Muscle);

const setAllCompleted = async (completed: boolean) => {
    await TasksController.setAllCompleted(completed);
};

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [muscles, setMuscles] = useState<Muscle[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedTasks = await taskRepo.find();
                setTasks(fetchedTasks);

                const fetchedMuscles = await muscleRepo.find();
                setMuscles(fetchedMuscles);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            <main>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <input type="checkbox" checked={task.completed} readOnly />
                        {task.title}
                    </div>
                ))}
            </main>
            <div>
                <button onClick={() => setAllCompleted(true)}>Set All Completed</button>
                <button onClick={() => setAllCompleted(false)}>Set All Uncompleted</button>
            </div>
            <div>
                {muscles.map(muscle => (
                    <div key={muscle.id}>
                        {muscle.name}
                    </div>
                ))}
            </div>
        </div>
    );
}