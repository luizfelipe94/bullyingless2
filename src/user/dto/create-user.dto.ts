import { IsNotEmpty, Length, IsEmail, IsUUID } from 'class-validator';

export class CreateUserDTO {

    @IsNotEmpty({ message: 'name cannot be empty.' })
    readonly name: string;

    @Length(8, 30, { message: 'username must be 8 to 20 characters long.' })
    @IsNotEmpty({ message: 'username cannot be empty.' })
    readonly username: string;

    @IsEmail()
    @IsNotEmpty({ message: 'email cannot be empty.' })
    readonly email: string;

    @Length(8, 30, { message: 'password must be 8 to 20 characters long.' })
    @IsNotEmpty({ message: 'password cannot be empty.' })
    readonly password: string;

    @IsUUID(4, { message: 'invalid uuid' })
    @IsNotEmpty({ message: 'profileId cannot be empty.' })
    readonly profileId: string;

    @IsUUID(4, { message: 'invalid uuid' })
    @IsNotEmpty({ message: 'schoolId cannot be empty.' })
    readonly schoolId: string;
    
}