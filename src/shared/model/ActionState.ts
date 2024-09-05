// src/shared/State.ts

import { Entity, Fields, IdEntity } from 'remult';

@Entity('actionState', {
    allowApiCrud: true,
})
export class ActionState extends IdEntity {
    @Fields.string()
    appstate = '';

    @Fields.integer()
    primId = -1;

    @Fields.string()
    primObj = '';

    @Fields.string()
    primName = '';

    @Fields.string()
    secId = '';

    @Fields.string()
    secName = '';

    @Fields.string()
    secObj = '';
}