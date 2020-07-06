import {MigrationInterface, QueryRunner, TableForeignKey, Table} from "typeorm";

export class createUser1593997907840 implements MigrationInterface {

    private table = new Table({
        name: 'User',
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
                length: '255'
            },
            {
                name: 'username',
                type: 'varchar',
                length: '255',
                isNullable: false,
                isUnique: true
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isNullable: false,
                isUnique: true
            },
            {
                name: 'password',
                type: 'varchar',
                length: '255',
                isNullable: false
            },
            {
                name: 'profileId',
                type: 'INTEGER',
                isNullable: false
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

    private foreignKey = new TableForeignKey({
        columnNames: ['profileId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'Profile'
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey('User', this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
