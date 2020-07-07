import { Entity, Column, OneToOne, JoinColumn, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Profile } from './profile.entity';

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

    @Column({ nullable: false })
    profileId: number;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}