import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/db";
import bcrypt from "bcryptjs";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  public async comparePassword(enteredPassword: string) {
    return bcrypt.compare(enteredPassword, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      },
    },
  }
);

export default User;