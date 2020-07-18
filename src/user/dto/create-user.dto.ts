import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly profileId: string;

    @IsNotEmpty()
    readonly schoolId: string;
    
}