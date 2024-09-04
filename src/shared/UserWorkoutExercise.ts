// src/shared/UserWorkoutExercise.ts

import { Entity, Fields } from 'remult';

@Entity('userWorkoutExercises', {
    allowApiCrud: true,
})
export class UserWorkoutExercise {
    @Fields.autoIncrement()
    id = 0;

    @Fields.integer()
    idUser = 0;

    @Fields.string()
    name = '';

    @Fields.integer()
    idWorkout = 0;

    @Fields.integer()
    idExercise = 0;

    @Fields.object()
    settings = {};

    @Fields.string()
    max = '';
}