import { Request, Response } from "express";
import site_service from "../../../src/service/site_service";
const momentTz = require("moment-timezone");
import { SiteInterface } from "../../models/site_model";




const createSite = async (req: Request, res: Response) => {


    const { name, city, description, address, latitude, longitude } = req.body;

    try {
        const siteData = {
            name, city, description, address, latitude, longitude,
            createdAt: momentTz().tz("Asia/Dhaka").format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: momentTz().tz("Asia/Dhaka").format('YYYY-MM-DD HH:mm:ss'),
        };


        const { site } = await site_service.createSite(siteData as SiteInterface);
        if (site) {
            console.log('site:', site)

            let response = {
                status: "success",
                message: "Site created successfully",
                response: site
            }
            res.send(response);
        }

    } catch (error) {
        console.error('error:', error)


    }
};

export default createSite;

