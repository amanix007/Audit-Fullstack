import { Model, DataTypes, } from "sequelize";
import sequelize from "../config/sequelize";
import Editor from "./editor_model";



export interface SiteDTO extends SiteInterface {
    creatorUserName: string;
    editorUserName: string;
    
}

export interface SiteInterface {
    id?: number;
    name: string;
    city: string;
    description: string;
    latitude: number;
    creator_id: number;
    editor_id?: number | null;
    creatorUserName?: string;
    editorUserName?: string;
    longitude: number;
    createdAt: string;
    updatedAt: string;
}

class Site extends Model implements SiteInterface {
    public id?: number;
    public name!: string;
    public city!: string;
    public description!: string;
    public creatorUserName?: string;
    public editorUserName?: string;
    public editor_id?: number;
    public creator_id!: number;
    public latitude!: number;
    public longitude!: number;
    public createdAt!: string;
    public updatedAt!: string;
}

Site.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },

    editor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    name: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
    city: {
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
        type: new DataTypes.BIGINT,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
    longitude: {
        type: new DataTypes.BIGINT,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
    createdAt: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },
    updatedAt: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    },

}, {
    tableName: "site",
    freezeTableName: true,
    timestamps: false,
    underscored: false,
    sequelize,
    modelName: "site"
});





export default Site;