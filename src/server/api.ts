// src/server/api.ts

import { remultExpress } from "remult/remult-express"
//import { Task } from "../shared/Task.ts"
import {TasksController} from "../shared/TasksController"
import {UserExercise} from "../shared/model/UserExercise.ts";
import {User} from "../shared/model/User.ts";
import {UserWorkoutExercise} from "../shared/model/UserWorkoutExercise.ts";
import {Muscle} from "../shared/model/Muscle.ts";
import {Exercise} from "../shared/model/Exercise.ts";
import {Workout} from "../shared/model/Workout.ts";
import {Machine} from "../shared/model/Machine.ts";
import {Location} from "../shared/model/Location.ts";

export const api = remultExpress({
    entities: [User, UserExercise, UserWorkoutExercise, Location, Exercise,Muscle,Workout, Machine],
    controllers: [TasksController],
    admin: true,
})