// src/shared/User.ts

import { Entity, Fields } from 'remult';

@Entity('users', {
    allowApiCrud: true,
})
export class User {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string()
    name = '';

    @Fields.string()
    email = '';

    @Fields.string()
    number = '';

    @Fields.integer()
    idLocation = 0;
}