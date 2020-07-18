import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne, BeforeInsert } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Profile } from '../profile/profile.entity';
import { Device } from '../models/device.entity';
import { School } from '../school/school.entity';

@Entity({ name: 'User' })
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ApiProperty({  })
    @Column({ type: 'varchar', length: '255', nullable: false })
    name: string;

    @Column({ type: 'varchar', length: '255', nullable: false })
    username: string;

    @Column({ type: 'varchar', length: '255', unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: '255', nullable: false })
    password: string;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        console.log("criptografar o password");
    }

    @ManyToOne(() => Profile, { nullable: false })
    profile: Profile;

    @ManyToOne(type => School, school => school.users, { nullable: false })
    school: School;

    @OneToMany(type => Device, device => device.user, { nullable: true })
    devices: Device[];

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}