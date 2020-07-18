import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/user/user.entity';
import { CreateUserDTO } from './dto';

@Controller('user')
export class UserController {
    constructor(private service: UserService){}

    @Get()
    public async getAll(): Promise<User[]> {
        return await this.service.getAll();
    }

    @Post()
    public async create(@Body() createUserDTO: CreateUserDTO): Promise<User>{
        return this.service.create(createUserDTO);
    }
}
