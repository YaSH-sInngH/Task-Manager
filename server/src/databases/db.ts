import {Sequelize} from "sequelize";
import dotenv from 'dotenv'
import exp from "constants";

dotenv.config();

const requiredVariable = ["DB_NAME", "DB_USER", "DB_PASS", "DB_HOST"];

requiredVariable.forEach((key) => {
    if(!process.env[key]){
        throw new Error(`Missing environment variable: ${key}`);
    }
});

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false,
    }
);

export default sequelize;