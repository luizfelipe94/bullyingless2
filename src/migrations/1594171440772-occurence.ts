import {MigrationInterface, QueryRunner} from "typeorm";

export class occurence1594171440772 implements MigrationInterface {
    name = 'occurence1594171440772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Occurence" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(500) NOT NULL, "local" character varying(500) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "schoolId" uuid, "deviceId" uuid, CONSTRAINT "PK_e97680cb3006eb3c1df2e4ad34d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9"`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "profileId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "REL_654d8b4ea5b99b309ea9d8498a"`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_3ace7d9bdbd19699c741985275d" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_3ace7d9bdbd19699c741985275d"`);
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9"`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "REL_654d8b4ea5b99b309ea9d8498a" UNIQUE ("profileId")`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "profileId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE "Occurence"`);
    }

}
