import {MigrationInterface, QueryRunner} from "typeorm";

export class userSchool1594169860397 implements MigrationInterface {
    name = 'userSchool1594169860397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD "schoolId" uuid`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_7e762113850d7126eed1591394f" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_7e762113850d7126eed1591394f"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "schoolId"`);
    }

}
