import { Request, Response } from "express";
import sequelize from "../../../src/config/sequelize";

import Editor, { EditorInterface } from "../../models/editor_model";




const createEditor = async (req: Request, res: Response) => {


    const { userName } = req.body;

    try {


        const transaction = await sequelize.transaction({});

        try {
            const _editor = await Editor.create({ userName }, { transaction });

            await transaction.commit();
            let response = {
                status: "success",
                message: "Site created successfully",
                response: _editor.get({ plain: true }) as EditorInterface
            }

            res.send(response);

        } catch (e) {
            console.error(e);
            await transaction.rollback();
            throw e;

        }



    } catch (error) {
        console.error('error:', error)


    }
};

export default createEditor;

