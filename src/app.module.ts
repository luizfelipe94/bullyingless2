import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./user/user.module";
import { TenantModule } from './tenant/tenant.module';
import { ProfileModule } from './profile/profile.module';
import { SchoolModule } from './school/school.module';
import * as ORMConfig from './ormconfig';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(ORMConfig),
    UserModule,
    TenantModule,
    ProfileModule,
    SchoolModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
