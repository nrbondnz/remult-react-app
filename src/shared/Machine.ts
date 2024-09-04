// src/shared/Machine.ts

import { Entity, Fields } from 'remult';

@Entity('machines', {
    allowApiCrud: true,
})
export class Machine {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string()
    name = '';

    @Fields.integer()
    numOfMachine = 0;

    @Fields.integer()
    idLocation = 0;

    @Fields.object()
    settings = {};
}