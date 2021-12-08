import { Request, Response } from "express";
import { SiteInterface } from "../../models/site_model";
import site_service from "../../service/site_service";


const getSiteDetails = async (req: Request, res: Response) => {

    let { id } = req.params;
    let site: SiteInterface | null;

    try {
        site = await site_service.getSiteDetails(parseInt(id));
        if (site) {
            console.log('site:', site)
            res.status(200).send({
                status: "success",
                response: site,
                message: "Successs"
            });


        } else {
            res.status(400).send({
                status: "failed",
                response: {},
                message: "Not Found"
            });
        }


    } catch (error) {
        console.log('error:', error)


    }
};

export default getSiteDetails;