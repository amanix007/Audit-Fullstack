import { Model, DataTypes, } from "sequelize";
import sequelize from "../config/sequelize";
import Site from "./site_model";



export interface EditorInterface {
    id?: number;
    userName: string;
}

class Editor extends Model implements EditorInterface {
    public id?: number;
    public userName!: string;
}

Editor.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    userName: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false,
    }


}, {
    tableName: "editor",
    freezeTableName: true,
    timestamps: false,
    underscored: false,
    sequelize,
    modelName: "editor"
});

Editor.hasMany(Site, { as: "sites" });
Site.belongsTo(Editor, { as: "editor" });

export default Editor;