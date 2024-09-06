// src/server/api.ts

import { remultExpress } from "remult/remult-express"
//import { Task } from "../shared/Task.ts"
import {TasksController} from "../shared/TasksController"
import {UserExercise} from "../shared/model/UserExercise";
import {User} from "../shared/model/User";
import {UserWorkoutExercise} from "../shared/model/UserWorkoutExercise";
import {Muscle} from "../shared/model/Muscle";
import {Exercise} from "../shared/model/Exercise";
import {Workout} from "../shared/model/Workout";
import {Machine} from "../shared/model/Machine";
import {Location} from "../shared/model/Location";
import {Task} from "../shared/model/Task";

export const api = remultExpress({
    entities: [Task, User, UserExercise, UserWorkoutExercise, Location, Exercise,Muscle,Workout, Machine],
    controllers: [TasksController],
    admin: true,
})