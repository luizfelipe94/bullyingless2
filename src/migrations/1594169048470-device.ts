import {MigrationInterface, QueryRunner} from "typeorm";

export class device1594169048470 implements MigrationInterface {
    name = 'device1594169048470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Device" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "OS" character varying(255), "macaddress" character varying(255), "phoneNumber" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "userId" uuid, CONSTRAINT "PK_f0a3247774bd4eaad2177055336" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Device" ADD CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Device" DROP CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25"`);
        await queryRunner.query(`DROP TABLE "Device"`);
    }

}
