import { DataTypes } from "sequelize";
import sequelize from "../utils/database";

const AuthModel = sequelize.define('Auth', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cmail_users',
    schema: 'wysiwig',
    timestamps: false 
});

export default AuthModel;
