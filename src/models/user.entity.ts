import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Profile } from './profile.entity';
import { Device } from './device.entity';
import { School } from './school.entity';

@Entity({ name: 'User' })
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: '255' })
    name: string;

    @Column({ type: 'varchar', length: '255' })
    username: string;

    @Column({ type: 'varchar', length: '255' })
    email: string;

    @Column({ type: 'varchar', length: '255' })
    password: string;

    @ManyToOne(() => Profile)
    profile: Profile;

    @ManyToOne(type => School, school => school.users)
    school: School;

    @OneToMany(type => Device, device => device.user)
    devices: Device[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}