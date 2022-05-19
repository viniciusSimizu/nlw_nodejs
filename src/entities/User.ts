import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'
import {Exclude} from "class-transformer";

@Entity('users')
export default class User {

    @PrimaryColumn({ name: 'id_user' })
    readonly id_user: string;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'email' })
    email: string;

    @Exclude()
    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'admin', default: false })
    admin: boolean;

    @CreateDateColumn({ name: 'created_at' })
    readonly created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;

    constructor() {
        if(!this.id_user) {
            this.id_user = uuid();
        }
    }

}