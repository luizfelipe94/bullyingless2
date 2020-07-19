import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { User } from '../user/user.entity';

@Entity({ name: 'School' })
export class School extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255', unique: true, nullable: false })
    name: string;

    @ManyToOne(() => Tenant, { nullable: false })
    tenant: Tenant;

    @OneToMany(type => User, user => user.school, { nullable: true })
    users: User[]

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}