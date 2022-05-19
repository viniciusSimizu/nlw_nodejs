import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'
import {Expose} from "class-transformer";

@Entity('tags')
export default class Tag {

    @PrimaryColumn({ name: 'id_tag' })
    readonly id_tag: string;

    @Column({ name: 'name' })
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    readonly created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

    @Expose({ name: 'name_custom' })
    nameCustom(): string {
        return `#${this.name}`
    }

    constructor() {
        if(!this.id_tag) {
            this.id_tag = uuid();
        }
    }

}