import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid'
import Tag from "./Tag";
import User from "./User";

@Entity('compliments')
export default class Compliment {

    @PrimaryColumn({ name: 'id_compliment' })
    readonly id_compliment: string

    @Column({ name: 'user_sender' })
    user_sender: string

    @Column({ name: 'user_receiver' })
    user_receiver: string

    @Column({ name: 'id_tag' })
    id_tag: string

    @Column({ name: 'message' })
    message: string

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date


    @JoinColumn({ name: 'id_tag' })
    @ManyToOne(() => Tag)
    tag: Tag

    @JoinColumn({ name: 'user_receiver' })
    @ManyToOne(() => User)
    userReceiver: User

    @JoinColumn({ name: 'user_sender' })
    @ManyToOne(() => User)
    userSender: User

    constructor() {
        if(!this.id_compliment) {
            this.id_compliment = uuid()
        }
    }


}