import {MigrationInterface, QueryRunner} from "typeorm";

export class init1595118536862 implements MigrationInterface {
    name = 'init1595118536862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tenant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_cebe9e163fad8d1d82343a48fba" UNIQUE ("name"), CONSTRAINT "PK_9ba54ddd56ce80e5b2d7523b6be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" "Profile_name_enum" NOT NULL DEFAULT 'Stunded', "description" character varying(255), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_89dff233f744d59758158aca1d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Device" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "OS" character varying(255), "macaddress" character varying(255), "phoneNumber" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "userId" uuid NOT NULL, CONSTRAINT "PK_f0a3247774bd4eaad2177055336" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "username" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "profileId" uuid NOT NULL, "schoolId" uuid NOT NULL, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "School" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "tenantId" uuid NOT NULL, CONSTRAINT "UQ_055e54c2eabaa711e752adf99a9" UNIQUE ("name"), CONSTRAINT "PK_9d02131a9366ffdb5f2889ef6b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Occurence" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(500) NOT NULL, "local" character varying(500) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "schoolId" uuid NOT NULL, "deviceId" uuid NOT NULL, CONSTRAINT "PK_e97680cb3006eb3c1df2e4ad34d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Denouement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(500) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, "occurenceId" uuid, CONSTRAINT "UQ_5464b89cb865c41b421f22e8dd8" UNIQUE ("name"), CONSTRAINT "REL_001f73591c08f6aa6b01c6af45" UNIQUE ("occurenceId"), CONSTRAINT "PK_a3538a649adda4e05bd305eda1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Defendent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255), "email" character varying(255), "registration" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_93b73d8905eed6d38c98783b306" UNIQUE ("name"), CONSTRAINT "UQ_76f40389c6739b879e8ed2e3600" UNIQUE ("email"), CONSTRAINT "UQ_9c28c33ecd26fb8dc0be7633c63" UNIQUE ("registration"), CONSTRAINT "PK_371d306fc7c2c37ed9d5cb7f9da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Punishment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_840a50974939adf833a58c091ed" UNIQUE ("name"), CONSTRAINT "PK_048ebf0bb32639a7ad2efd05ade" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "denouement_defendents__defendent" ("denouementId" uuid NOT NULL, "defendentId" uuid NOT NULL, CONSTRAINT "PK_3e22ae64de392fda051b6cf3ec6" PRIMARY KEY ("denouementId", "defendentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ddc91302a3dde5513f660c659c" ON "denouement_defendents__defendent" ("denouementId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e766e534e40c45ef8540a4dfd4" ON "denouement_defendents__defendent" ("defendentId") `);
        await queryRunner.query(`ALTER TABLE "Device" ADD CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_7e762113850d7126eed1591394f" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "School" ADD CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Occurence" ADD CONSTRAINT "FK_3ace7d9bdbd19699c741985275d" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Denouement" ADD CONSTRAINT "FK_001f73591c08f6aa6b01c6af456" FOREIGN KEY ("occurenceId") REFERENCES "Occurence"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" ADD CONSTRAINT "FK_ddc91302a3dde5513f660c659c1" FOREIGN KEY ("denouementId") REFERENCES "Denouement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" ADD CONSTRAINT "FK_e766e534e40c45ef8540a4dfd43" FOREIGN KEY ("defendentId") REFERENCES "Defendent"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" DROP CONSTRAINT "FK_e766e534e40c45ef8540a4dfd43"`);
        await queryRunner.query(`ALTER TABLE "denouement_defendents__defendent" DROP CONSTRAINT "FK_ddc91302a3dde5513f660c659c1"`);
        await queryRunner.query(`ALTER TABLE "Denouement" DROP CONSTRAINT "FK_001f73591c08f6aa6b01c6af456"`);
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_3ace7d9bdbd19699c741985275d"`);
        await queryRunner.query(`ALTER TABLE "Occurence" DROP CONSTRAINT "FK_9d8d83a7d5878423789ef0531b4"`);
        await queryRunner.query(`ALTER TABLE "School" DROP CONSTRAINT "FK_883b40a8759ec7abc5ca3fd5631"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_7e762113850d7126eed1591394f"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_654d8b4ea5b99b309ea9d8498a9"`);
        await queryRunner.query(`ALTER TABLE "Device" DROP CONSTRAINT "FK_dc1618bce8f5b8a05b1de99bf25"`);
        await queryRunner.query(`DROP INDEX "IDX_e766e534e40c45ef8540a4dfd4"`);
        await queryRunner.query(`DROP INDEX "IDX_ddc91302a3dde5513f660c659c"`);
        await queryRunner.query(`DROP TABLE "denouement_defendents__defendent"`);
        await queryRunner.query(`DROP TABLE "Punishment"`);
        await queryRunner.query(`DROP TABLE "Defendent"`);
        await queryRunner.query(`DROP TABLE "Denouement"`);
        await queryRunner.query(`DROP TABLE "Occurence"`);
        await queryRunner.query(`DROP TABLE "School"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Device"`);
        await queryRunner.query(`DROP TABLE "Profile"`);
        await queryRunner.query(`DROP TABLE "Tenant"`);
    }

}
