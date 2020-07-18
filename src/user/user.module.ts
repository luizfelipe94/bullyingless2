import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Profile } from '../profile/profile.entity';
import { School } from '../school/school.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Profile, School])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule { 
    // TODO: middleware auth
}