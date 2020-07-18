import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { User } from './user.entity';
import { Profile } from '../profile/profile.entity';
import { CreateUserDTO } from './dto'

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
        @InjectRepository(Profile) 
        private readonly profileRepository: Repository<Profile>
    ){}

    public async getAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ['profile'] });
    }

    public async create(createUserDTO: CreateUserDTO): Promise<User> {


        const qb = await this.userRepository
        .createQueryBuilder('user')
        .where('user.username = :username', { username: createUserDTO.username })
        .orWhere('user.email = :email', { email: createUserDTO.email });

        const user = await qb.getOne();

        if(user){
            const errors = { username: 'Username and email must be unique.' };
            throw new HttpException({ message: 'Input data validation failed', errors }, HttpStatus.BAD_REQUEST);
        }

        const profile = await this.profileRepository.findOne(createUserDTO.profileId);
        if(!profile){
            const errors = { profile: `Not found profile for uuid ${createUserDTO.profileId}` };
            throw new HttpException({ message: 'Input data validation failed', errors }, HttpStatus.BAD_REQUEST);
        }

        const newUser = new User();
        newUser.name = createUserDTO.name;
        newUser.email = createUserDTO.email;
        newUser.password = createUserDTO.password;
        newUser.profile = profile;

        const erros = await validate(newUser);
        if(erros.length > 0){
            const _errors = {username: 'Userinput is not valid.'};
            throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);
        }else{
            const result = this.userRepository.create(newUser);
            return 
        }        

        return;
        
    }

    public generateJWT(): Promise<void> {
        // TODO: Gerar jwt
        return;
    }
    

}
