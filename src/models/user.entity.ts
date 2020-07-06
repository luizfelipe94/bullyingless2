import { Entity, Column, OneToOne, JoinColumn, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'User' })
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    profileId: number;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

}