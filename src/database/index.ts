import {DataSource} from "typeorm";
import {createDataSource} from "../utils/createDataSource";

const sqliteDataSource = new DataSource(
    createDataSource()
)

export default sqliteDataSource