// src/shared/UserExercise.ts

import { Entity, Fields } from 'remult';

@Entity('userExercises', {
    allowApiCrud: true,
})
export class UserExercise {
    @Fields.integer()
    idUser = 0;

    @Fields.integer()
    idExercise = 0;
}