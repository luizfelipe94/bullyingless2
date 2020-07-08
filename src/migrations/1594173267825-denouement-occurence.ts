import {MigrationInterface, QueryRunner} from "typeorm";

export class denouementOccurence1594173267825 implements MigrationInterface {
    name = 'denouementOccurence1594173267825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Denouement" ADD "occurenceId" uuid`);
        await queryRunner.query(`ALTER TABLE "Denouement" ADD CONSTRAINT "UQ_001f73591c08f6aa6b01c6af456" UNIQUE ("occurenceId")`);
        await queryRunner.query(`ALTER TABLE "Denouement" ADD CONSTRAINT "FK_001f73591c08f6aa6b01c6af456" FOREIGN KEY ("occurenceId") REFERENCES "Occurence"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Denouement" DROP CONSTRAINT "FK_001f73591c08f6aa6b01c6af456"`);
        await queryRunner.query(`ALTER TABLE "Denouement" DROP CONSTRAINT "UQ_001f73591c08f6aa6b01c6af456"`);
        await queryRunner.query(`ALTER TABLE "Denouement" DROP COLUMN "occurenceId"`);
    }

}
