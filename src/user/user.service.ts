import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { User } from './user.entity';
import { Profile } from '../profile/profile.entity';
import { School } from '../school/school.entity';

import { CreateUserDTO } from './dto'

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
        @InjectRepository(Profile) 
        private readonly profileRepository: Repository<Profile>,
        @InjectRepository(School) 
        private readonly schoolRepository: Repository<School>
    ){}

    public async findAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ['profile', 'profile.roles', 'profile.roles.permissions'] });
    }

    public async create(createUserDTO: CreateUserDTO): Promise<User> {

        const qb = await this.userRepository
        .createQueryBuilder('user')
        .where('user.username = :username', { username: createUserDTO.username })
        .orWhere('user.email = :email', { email: createUserDTO.email });

        const user = await qb.getOne();

        if(user){
            throw new HttpException({ message: 'Username and email must be unique.' }, HttpStatus.BAD_REQUEST);
        }

        const profile = await this.profileRepository.findOne(createUserDTO.profileId);
        if(!profile){
            throw new HttpException({ message: `Not found profile for uuid ${createUserDTO.profileId}` }, HttpStatus.NOT_FOUND);
        }

        const school = await this.schoolRepository.findOne(createUserDTO.schoolId);
        if(!school){
            throw new HttpException({ message: `Not found school for uuid ${createUserDTO.schoolId}` }, HttpStatus.NOT_FOUND);
        }

        const newUser = new User();
        newUser.name = createUserDTO.name;
        newUser.username = createUserDTO.username;
        newUser.email = createUserDTO.email;
        newUser.password = createUserDTO.password;
        newUser.profile = profile;
        newUser.school = school;

        return await this.userRepository.save(newUser);

    }

    public generateJWT(): Promise<void> {
        // TODO: Gerar jwt
        return;
    }
    

}
