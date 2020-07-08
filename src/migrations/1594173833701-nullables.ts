import {MigrationInterface, QueryRunner} from "typeorm";

export class nullables1594173833701 implements MigrationInterface {
    name = 'nullables1594173833701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Profile" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Device" DROP CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25"`);
        await queryRunner.query(`ALTER TABLE "Device" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_7e762113850d7126eed1591394f"`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "profileId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "schoolId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "School" DROP CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631"`);
        await queryRunner.query(`ALTER TABLE "School" ALTER COLUMN "tenantId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4"`);
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_3ace7d9bdbd19699c741985275d"`);
        await queryRunner.query(`ALTER TABLE "Occurence" ALTER COLUMN "schoolId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Occurence" ALTER COLUMN "deviceId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Device" ADD CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_7e762113850d7126eed1591394f" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "School" ADD CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_3ace7d9bdbd19699c741985275d" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_3ace7d9bdbd19699c741985275d"`);
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4"`);
        await queryRunner.query(`ALTER TABLE "School" DROP CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_7e762113850d7126eed1591394f"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9"`);
        await queryRunner.query(`ALTER TABLE "Device" DROP CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25"`);
        await queryRunner.query(`ALTER TABLE "Occurence" ALTER COLUMN "deviceId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Occurence" ALTER COLUMN "schoolId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_3ace7d9bdbd19699c741985275d" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "School" ALTER COLUMN "tenantId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "School" ADD CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "schoolId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "profileId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e"`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_7e762113850d7126eed1591394f" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Device" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Device" ADD CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Profile" ALTER COLUMN "description" SET NOT NULL`);
    }

}
