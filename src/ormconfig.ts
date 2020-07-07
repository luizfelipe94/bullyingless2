import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'bullyingless2',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    autoLoadEntities: true,
    synchronize: true
}

export = ORMConfig;