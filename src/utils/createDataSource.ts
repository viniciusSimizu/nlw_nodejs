import {DataSourceOptions} from "typeorm";

export const createDataSource = (): DataSourceOptions => {

    const env = process.env.NODE_ENV;

    if(!env) {
        throw new Error('NODE_ENV Required!!')
    }

    console.log(env)

    if(env == 'test') {
        return {
            name: 'TEST',
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password:  '',
            database: 'test_nlw_node',
            dropSchema: true,
            synchronize: true,
            migrations: ['src/database/migrations/*.ts'],
            entities: ['src/entities/*.ts']
        } as DataSourceOptions;
    } else if(env == 'development') {
        return {
            name: 'DEVELOPMENT',
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password:  '',
            database: 'nlw_node',
            synchronize: true,
            migrations: ['src/database/migrations/*.ts'],
            entities: ['src/entities/*.ts']
        } as DataSourceOptions;
    }

    throw new Error(`NODE_ENV: ${env} does not is valid`);
};