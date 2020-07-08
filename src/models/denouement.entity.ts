import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinTable, OneToOne, ManyToMany, JoinColumn } from 'typeorm';
import { Occurence } from './occurence.entity';
import { Defendent } from './defendent.entity';

@Entity({ name: 'Denouement' })
export class Denouement extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255', unique: true })
    name: string;

    @Column({ type: 'varchar', length: '500', unique: false, nullable: false })
    description: string;

    @OneToOne(type => Occurence, occurence => occurence.denouement)
    @JoinColumn()
    occurence: Occurence;

    @ManyToMany(type => Defendent, defendent => defendent.denouements)
    @JoinTable()
    defendents: Defendent[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}