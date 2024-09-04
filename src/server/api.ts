// src/server/api.ts

import { remultExpress } from "remult/remult-express"
import { Task } from "../shared/Task.ts"

export const api = remultExpress({
    entities: [Task],
    admin: true,
})