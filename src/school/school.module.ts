import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { School } from './school.entity';
import { Tenant } from '../tenant/tenant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([School, Tenant])],
  providers: [SchoolService],
  controllers: [SchoolController]
})
export class SchoolModule {}
