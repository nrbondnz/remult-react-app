// src/server/api.ts

import { remultExpress } from "remult/remult-express"
import { Task } from "../shared/Task.ts"
import {TasksController} from "../shared/TasksController"

export const api = remultExpress({
    entities: [Task],
    controllers: [TasksController],
    admin: true,
})