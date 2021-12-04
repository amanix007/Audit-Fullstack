import { Model, DataTypes, } from "sequelize";
import sequelize from "../config/sequelize";



export interface SiteInterface {
    id?: number;
    name: string;
    age: number;
    email: string;
    fileName: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class Site extends Model implements SiteInterface {
    public id?: number;
    public name!: string;
    public age!: number;
    public email!: string;
    public fileName!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Site.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
    address: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
  
    
    description: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
  
    
    latitude: {
        type: new DataTypes.INTEGER,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
    longitude: {
        type: new DataTypes.INTEGER,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
  
  
    

}, {
    tableName: "site",
    freezeTableName: true,
    timestamps: true,
    underscored: false,
    sequelize,
    modelName: "site"
});


export default Site;