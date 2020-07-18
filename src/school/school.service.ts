import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { School } from './school.entity';

@Injectable()
export class SchoolService {

    constructor(
        @InjectRepository(School) 
        private readonly schoolRepository: Repository<School>
    ){}

    public async findAll(): Promise<School[]> {
        return await this.schoolRepository.find({ relations: ['tenant'] });
    }

    public async findByUuid(@Param('id') id: string): Promise<School> {
        return await this.schoolRepository.findOne({ where: id, relations: ['tenant'] });
    }

}
