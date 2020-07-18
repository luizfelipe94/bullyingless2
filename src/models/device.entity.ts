import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'Device' })
export class Device extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255', unique: false, nullable: true })
    OS: string;

    @Column({ type: 'varchar', length: '255', unique: false, nullable: true })
    macaddress: string;

    @Column({ type: 'varchar', length: '255', unique: false, nullable: false })
    phoneNumber: string;

    @ManyToOne(type => User, user => user.devices, { nullable: false })
    user: User;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}