import sqliteDataSource from "../database";
import Tag from "../entities/Tag";

export const TagRepository = sqliteDataSource.getRepository(Tag).extend({

})