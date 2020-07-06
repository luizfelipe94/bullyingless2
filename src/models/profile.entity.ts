import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

enum ProfileType {
    STUDENT = 'Stunded',
    ADMINISTRATOR = 'Administrator',
    ROOT = 'Root'
}

@Entity({ name: 'Profile' })
export class Profile extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: ProfileType,
        default: ProfileType.STUDENT
    })
    name: ProfileType;

    @Column({ type: 'varchar', length: '255' })
    description: string;

}