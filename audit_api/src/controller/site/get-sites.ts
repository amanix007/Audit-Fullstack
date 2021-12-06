import { Request, Response } from "express";
import site_service from "../../service/site_service";
import { SiteInterface } from "../../models/site_model";




type Member = {
    id: string,
    name: string,
    age: number,
    email: string,
    fileName: string
}
const getMembers = async (req: Request, res: Response) => {


    let members: Array<SiteInterface> = [];



    



    try {
        members = await site_service.getSiteList();
        res.send(members);

    } catch (error) {
        console.log('error:', error)


    }
};

export default getMembers;