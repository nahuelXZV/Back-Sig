import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1686496581554 implements MigrationInterface {
    name = 'Init1686496581554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "edificios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fid" integer NOT NULL, "descripcion" character varying NOT NULL, "cod_edif" integer, "latitud" numeric NOT NULL, "longitud" numeric NOT NULL, "grupo" character varying NOT NULL, "sigla" character varying NOT NULL, CONSTRAINT "PK_8e0aa89a1d90e60b4f88771934a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('basic', 'admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_deleted" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "edificios"`);
    }

}
