// src/App.tsx

import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { Task } from './shared/model/Task.ts';
import { TasksController } from './shared/TasksController.ts';
//import { State } from './shared/State';
//import { Machine } from './shared/Machine';
import {Muscle} from "./shared/model/Muscle.ts";
//import { User } from './shared/User.ts';
//import { UserExercise } from './shared/UserExercise.ts';
//import { UserWorkoutExercise } from './shared/UserWorkoutExercise.ts';
//import { Workout } from './shared/Workout.ts';
//import { Location } from './shared/Location.ts'; // Added missing import

const taskRepo = remult.repo(Task);
//const stateRepo = remult.repo(State);
//const machineRepo = remult.repo(Machine);
//const userRepo = remult.repo(User);
//const userExerciseRepo = remult.repo(UserExercise);
//const userWorkoutExerciseRepo = remult.repo(UserWorkoutExercise);
//const locationRepo = remult.repo(Location);
const muscleRepo = remult.repo(Muscle);
//const workoutRepo = remult.repo(Workout);

const setAllCompleted = async (completed: boolean) => {
    await TasksController.setAllCompleted(completed);
}

/*async function getAppState() {
    const stateRepo = remult.repo(State);
    let state = await stateRepo.findFirst();
    if (!state) {
        state = stateRepo.create();
        state.appstate = '';
        state.primId = -1;
        state.primObj = '';
        state.primName = '';
        state.secId = '';
        state.secName = '';
        state.secObj = '';
        await stateRepo.save(state);
    }
    return state;
}*/

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [muscles, setMuscles] = useState<Muscle[]>([]);
    //const [state, setState] = useState<State | null>(null); // Initialized correctly

    useEffect(() => {
        taskRepo.find().then(setTasks);
        muscleRepo.find().then(setMuscles);
        //getAppState().then(setState); // Added state retrieval
    }, []);

    // Log muscles if it is not null
    if (muscles !== null) {
        muscles.map((muscle, index) => {
            console.log(muscle, index);
        });
    } else {
        console.log("no muscles found");
    }
    console.log(tasks);
    return (
        <div>
            <h1>Todos</h1>
            <main>
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <input type="checkbox" checked={task.completed} readOnly/>
                            {task.title}
                        </div>
                    )
                })}
            </main>
            <div>
                <button onClick={() => setAllCompleted(true)}>Set All Completed</button>
                <button onClick={() => setAllCompleted(false)}>Set All Uncompleted</button>
            </div>
            <div>
                {muscles? muscles.map((muscle) => (
                    <div key={muscle.id}>
                        {muscle.name}
                    </div>
                )) : ""}
            </div>
        </div>
    )
}