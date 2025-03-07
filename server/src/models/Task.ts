import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/db";

class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: string;
    public due_date!: Date;
}

Task.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue:'pending'
        },
        due_date: {
            type: DataTypes.DATE,
        }
    },
    {
        sequelize,
        tableName:"tasks",
    }
);

export default Task;