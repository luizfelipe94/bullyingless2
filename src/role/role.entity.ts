import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Profile } from '../profile/profile.entity';
import { Permission } from '../permission/permission.entity';

@Entity({ name: 'Role' })
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255', unique: true, nullable: false })
    name: string;

    @ManyToMany(type => Profile, profile => profile.roles)
    profiles: Profile[];
    
    @ManyToMany(type => Permission, permission => permission.roles)
    @JoinTable()
    permissions: Permission[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}