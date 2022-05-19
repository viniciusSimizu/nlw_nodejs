import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm"

export class CreateCompliments1651664165338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                    name: 'compliments',
                    columns: [
                        {
                            name: 'id_compliment',
                            type: 'varchar',
                            isPrimary: true
                        },
                        {
                            name: 'user_sender',
                            type: 'varchar'
                        },
                        {
                            name: 'user_receiver',
                            type: 'varchar'
                        },
                        {
                            name: 'id_tag',
                            type: 'varchar'
                        },
                        {
                            name: 'message',
                            type: 'varchar'
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()'
                        }
                    ],
                foreignKeys: [
                    {
                        name: 'fk_user_sender_compliments',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id_user'],
                        columnNames: ['user_sender'],
                        onDelete: 'SET NULL'
                    },
                    {
                        name: 'fk_user_receiver_compliments',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id_user'],
                        columnNames: ['user_receiver'],
                        onDelete: 'SET NULL'
                    },
                    {
                        name: 'fk_tag_compliments',
                        referencedTableName: 'tags',
                        referencedColumnNames: ['id_tag'],
                        columnNames: ['id_tag'],
                        onDelete: 'SET NULL'
                    }
                ]
                })
        )

        await queryRunner.createForeignKey(
            'compliments',
            new TableForeignKey({
                name: 'fk_user_sender_compliments',
                referencedTableName: 'users',
                referencedColumnNames: ['id_user'],
                columnNames: ['user_sender'],
                onDelete: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compliments')
    }

}
