import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany } from 'typeorm';
import { Role } from '../role/role.entity';

@Entity({ name: 'Permission' })
export class Permission extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255', unique: true, nullable: false })
    name: string;

    @ManyToMany(tpe => Role, role => role.permissions)
    roles: Role[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}