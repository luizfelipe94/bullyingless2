import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const databaseOptions: TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: process.env.POSTGRES_HOST,
//     port: parseInt(process.env.POSTGRES_PORT),
//     username: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DATABASE,
//     entities: ['**/*.entity{.ts,.js}'],
//     migrationsTableName: 'migration',
//     migrations: ['src/database/migrations/*.ts'],
//     cli: {
//       migrationsDir: 'src/database/migrations',
//     },
//     autoLoadEntities: true
// }

export const databaseOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'bullyingless2',
    entities: ['**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
    autoLoadEntities: true
}

console.log(databaseOptions);