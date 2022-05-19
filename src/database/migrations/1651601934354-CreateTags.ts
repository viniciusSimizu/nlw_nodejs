import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateTags1651601934354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

            await queryRunner.createTable(
                new Table({
                    name: 'tags',
                    columns: [
                        {
                            name: 'id_tag',
                            type: 'varchar',
                            isPrimary: true
                        },
                        {
                            name: 'name',
                            type: 'varchar'
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()'
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp',
                            default: 'now()'
                        },
                    ]
                })
            )

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE book drop column price`)
    }

}
