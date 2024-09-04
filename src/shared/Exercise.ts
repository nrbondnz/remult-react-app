// src/shared/Exercise.ts

import { Entity, Fields } from 'remult';

@Entity('exercises', {
    allowApiCrud: true,
})
export class Exercise {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string()
    name = '';

    @Fields.integer()
    idMachine = 0;

    @Fields.string()
    description = '';
}