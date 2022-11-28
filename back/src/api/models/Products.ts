import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('products')
export default class Products extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_name: string;

    @Column()
    product_descr: string;

    @Column()
    product_category: number;

    @Column()
    product_price: number;

    @Column()
    product_currency: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}