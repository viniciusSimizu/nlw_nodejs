import sqliteDataSource from "../database";
import User from "../entities/User";

export const UserRepository = sqliteDataSource.getRepository(User).extend({
    
})