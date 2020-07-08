import {MigrationInterface, QueryRunner} from "typeorm";

export class school1594168096349 implements MigrationInterface {
    name = 'school1594168096349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "School" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "tenantId" uuid, CONSTRAINT "UQ_055e54c2eabaa711e752adf99a9" UNIQUE ("name"), CONSTRAINT "REL_883b40a8759ec7abc5ca3fd563" UNIQUE ("tenantId"), CONSTRAINT "PK_9d02131a9366ffdb5f2889ef6b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "School" ADD CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "School" DROP CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631"`);
        await queryRunner.query(`DROP TABLE "School"`);
    }

}
