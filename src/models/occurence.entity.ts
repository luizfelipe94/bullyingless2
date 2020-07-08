import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { School } from './school.entity';
import { Device } from './device.entity';

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

    @ManyToOne(type => School)
    school: School

    @ManyToOne(type => Device)
    device: Device

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}