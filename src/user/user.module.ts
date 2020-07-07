import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../models/user.entity';
import { Profile } from '../models/profile.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Profile])],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {  }