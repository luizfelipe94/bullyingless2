import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/user/user.entity';
import { CreateUserDTO } from './dto';
import { ValidationPipe } from '../shared/pipes/validation.pipe';

@Controller('user')
export class UserController {
    constructor(private service: UserService){}

    @Get()
    public async getAll(): Promise<User[]> {
        return await this.service.findAll();
    }

    @Post()
    public async create(@Body(new ValidationPipe()) createUserDTO: CreateUserDTO): Promise<User>{
        return this.service.create(createUserDTO);
    }
}
