import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany } from 'typeorm';
import { Denouement } from './denouement.entity';

@Entity({ name: 'Defendent' })
export class Defendent extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255', unique: true, nullable: true })
    name: string;

    @Column({ type: 'varchar', length: '255', unique: true, nullable: true })
    email: string;

    @Column({ type: 'varchar', length: '255', unique: true, nullable: false })
    registration: string;

    @ManyToMany(type => Denouement, denouement => denouement.defendents)
    denouements: Denouement[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}