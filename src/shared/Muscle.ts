// src/shared/Muscle.ts

import { Entity, Fields } from 'remult';

@Entity('muscles', {
    allowApiCrud: true,
})
export class Muscle {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string()
    name = '';

    @Fields.string()
    description = '';

    @Fields.integer()
    parent?: number | undefined = undefined;
}