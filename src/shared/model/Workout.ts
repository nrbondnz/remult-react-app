// src/shared/Workout.ts

import { Entity, Fields } from 'remult';

@Entity('workouts', {
    allowApiCrud: true,
})
export class Workout {
    @Fields.autoIncrement()
    id = 0;

    @Fields.integer()
    idUser = 0;

    @Fields.string()
    name = '';
}