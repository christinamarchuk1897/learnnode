import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

enum RoleTypes {
    user = "USER",
    admin = "ADMIN"
}

@Entity('user')
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column({
        type: 'enum',
        enum: RoleTypes,
        default: RoleTypes.user
    })
    default_role: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}