import {randomUUID} from "crypto";

export default class Tag {
    id_tag: string
    name: string
    created_at: Date
    updated_at: Date

    constructor() {
        if(!this.id_tag) {
            this.id_tag = randomUUID()
        }
        if(!this.created_at) {
            const timestamp = new Date().getTime();
            this.created_at = new Date(timestamp);
            this.updated_at = new Date(timestamp);
        }
    }
}