import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user.entity';

@Controller('user')
export class UserController {
    constructor(private service: UserService){}

    @Get()
    public async getAll(): Promise<User[]> {
        return await this.service.getAll();
    }
}
