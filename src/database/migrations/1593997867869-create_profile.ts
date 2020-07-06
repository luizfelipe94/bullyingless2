import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProfile1593997867869 implements MigrationInterface {

    private table = new Table({
        name: 'Profile',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'name',
                type: 'varchar',
                length: '255',
                isNullable: false,
                isUnique: true,
                enum: ['Student', 'Administrator', 'Root']
            },
            {
                name: 'description',
                type: 'varchar',
                length: '255'
            },
            {
                name: 'createdAt',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()'
            },
            {
                name: 'updatedAt',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()'
            },
            {
                name: 'deletedAt',
                type: 'timestamptz'
            }
        ]
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
