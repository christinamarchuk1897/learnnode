import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('categories')
export default class Categories extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string;

    @Column()
    category_name: string;

    @Column()
    category_descr: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}