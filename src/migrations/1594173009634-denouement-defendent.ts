import {MigrationInterface, QueryRunner} from "typeorm";

export class denouementDefendent1594173009634 implements MigrationInterface {
    name = 'denouementDefendent1594173009634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Denouement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(500) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_5464b89cb865c41b421f22e8dd8" UNIQUE ("name"), CONSTRAINT "PK_a3538a649adda4e05bd305eda1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Defendent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255), "email" character varying(255), "registration" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_93b73d8905eed6d38c98783b306" UNIQUE ("name"), CONSTRAINT "UQ_76f40389c6739b879e8ed2e3600" UNIQUE ("email"), CONSTRAINT "UQ_9c28c33ecd26fb8dc0be7633c63" UNIQUE ("registration"), CONSTRAINT "PK_371d306fc7c2c37ed9d5cb7f9da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "denouement_defendents__defendent" ("denouementId" uuid NOT NULL, "defendentId" uuid NOT NULL, CONSTRAINT "PK_3e22ae64de392fda051b6cf3ec6" PRIMARY KEY ("denouementId", "defendentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ddc91302a3dde5513f660c659c" ON "denouement_defendents__defendent" ("denouementId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e766e534e40c45ef8540a4dfd4" ON "denouement_defendents__defendent" ("defendentId") `);
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" ADD CONSTRAINT "FK_ddc91302a3dde5513f660c659c1" FOREIGN KEY ("denouementId") REFERENCES "Denouement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" ADD CONSTRAINT "FK_e766e534e40c45ef8540a4dfd43" FOREIGN KEY ("defendentId") REFERENCES "Defendent"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" DROP CONSTRAINT "FK_e766e534e40c45ef8540a4dfd43"`);
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" DROP CONSTRAINT "FK_ddc91302a3dde5513f660c659c1"`);
        await queryRunner.query(`DROP INDEX "IDX_e766e534e40c45ef8540a4dfd4"`);
        await queryRunner.query(`DROP INDEX "IDX_ddc91302a3dde5513f660c659c"`);
        await queryRunner.query(`DROP TABLE "denouement_defendents__defendent"`);
        await queryRunner.query(`DROP TABLE "Defendent"`);
        await queryRunner.query(`DROP TABLE "Denouement"`);
    }

}
