import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToOne } from 'typeorm';
import { School } from './school.entity';
import { Device } from './device.entity';
import { Denouement } from './denouement.entity';

@Entity({ name: 'Occurence' })
export class Occurence extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255', unique: false, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: '500', unique: false, nullable: false })
    description: string;

    @Column({ type: 'varchar', length: '500', unique: false, nullable: false })
    local: string;

    @ManyToOne(type => School, { nullable: false })
    school: School

    @ManyToOne(type => Device, { nullable: false })
    device: Device

    @OneToOne(type => Denouement, denoeument => denoeument.occurence, { nullable: true })
    denouement: Denouement;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}