import sqliteDataSource from "../database";
import Compliment from "../entities/Compliment";

export const ComplimentRepository = sqliteDataSource.getRepository(Compliment).extend({

})