import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

enum ProfileType {
    STUDENT = 'Stunded',
    ADMINISTRATOR = 'Administrator',
    ROOT = 'Root'
}

@Entity({ name: 'Profile' })
export class Profile extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'enum', enum: ProfileType, default: ProfileType.STUDENT, nullable: false })
    name: ProfileType;

    @Column({ type: 'varchar', length: '255', nullable: true })
    description: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt: Date;

}