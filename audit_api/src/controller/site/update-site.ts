import { Request, Response } from "express";
import { SiteInterface } from "../../models/site_model";
import site_service from "../../service/site_service";

const momentTz = require("moment-timezone");

const updateSite = async (req: Request, res: Response) => {


    try {
        const {
            id,
            name,
            city,
            description,
            latitude,
            longitude,
            address,
            editor_id,

        } = req.body;
        let siteData = {
            id,
            name,
            city,
            description,
            latitude,
            longitude,
            address,
            editor_id,
            updatedAt: momentTz().tz("Asia/Dhaka").format('YYYY-MM-DD HH:mm:ss'),
        } as unknown as SiteInterface;

        await site_service.updateSite(siteData as SiteInterface);

        let response = {
            status: "success",
            response: {}
        }
        res.send(response);
    } catch (error) {
        console.log('error:', error)


    }
};

export default updateSite;

