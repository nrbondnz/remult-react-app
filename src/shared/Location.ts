// src/shared/Location.ts

import { Entity, Fields } from 'remult';

@Entity('locations', {
    allowApiCrud: true,
})
export class Location {
    @Fields.autoIncrement()
    id = 0;

    @Fields.string()
    name = '';
}