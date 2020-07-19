import {MigrationInterface, QueryRunner} from "typeorm";

export class rbca1595191526045 implements MigrationInterface {
    name = 'rbca1595191526045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Permission" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_a99587dcc7fa748b044eb5a90e1" UNIQUE ("name"), CONSTRAINT "PK_96c82eedac1e126a1aa90eb0285" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_b852abd9e268a63287bc815aab6" UNIQUE ("name"), CONSTRAINT "PK_9309532197a7397548e341e5536" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_permissions__permission" ("roleId" uuid NOT NULL, "permissionId" uuid NOT NULL, CONSTRAINT "PK_245fb47ffdde80620c90ffdac67" PRIMARY KEY ("roleId", "permissionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fadecaf3483f6b1af0b9780cfa" ON "role_permissions__permission" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_66d2dc53c558fe02caf494c12e" ON "role_permissions__permission" ("permissionId") `);
        await queryRunner.query(`CREATE TABLE "profile_roles__role" ("profileId" uuid NOT NULL, "roleId" uuid NOT NULL, CONSTRAINT "PK_114130cbd24310af73b962c5151" PRIMARY KEY ("profileId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6f108bb2f0b1c4dd92d45fe8b2" ON "profile_roles__role" ("profileId") `);
        await queryRunner.query(`CREATE INDEX "IDX_77e2c922d121ff386e0c80ae62" ON "profile_roles__role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "role_permissions__permission" ADD CONSTRAINT "FK_fadecaf3483f6b1af0b9780cfa2" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_permissions__permission" ADD CONSTRAINT "FK_66d2dc53c558fe02caf494c12ed" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile_roles__role" ADD CONSTRAINT "FK_6f108bb2f0b1c4dd92d45fe8b28" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile_roles__role" ADD CONSTRAINT "FK_77e2c922d121ff386e0c80ae627" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile_roles__role" DROP CONSTRAINT "FK_77e2c922d121ff386e0c80ae627"`);
        await queryRunner.query(`ALTER TABLE "profile_roles__role" DROP CONSTRAINT "FK_6f108bb2f0b1c4dd92d45fe8b28"`);
        await queryRunner.query(`ALTER TABLE "role_permissions__permission" DROP CONSTRAINT "FK_66d2dc53c558fe02caf494c12ed"`);
        await queryRunner.query(`ALTER TABLE "role_permissions__permission" DROP CONSTRAINT "FK_fadecaf3483f6b1af0b9780cfa2"`);
        await queryRunner.query(`DROP INDEX "IDX_77e2c922d121ff386e0c80ae62"`);
        await queryRunner.query(`DROP INDEX "IDX_6f108bb2f0b1c4dd92d45fe8b2"`);
        await queryRunner.query(`DROP TABLE "profile_roles__role"`);
        await queryRunner.query(`DROP INDEX "IDX_66d2dc53c558fe02caf494c12e"`);
        await queryRunner.query(`DROP INDEX "IDX_fadecaf3483f6b1af0b9780cfa"`);
        await queryRunner.query(`DROP TABLE "role_permissions__permission"`);
        await queryRunner.query(`DROP TABLE "Role"`);
        await queryRunner.query(`DROP TABLE "Permission"`);
    }

}
