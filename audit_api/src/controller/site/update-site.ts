import { Request, Response } from "express";
import path from "path";
import { MemberInterface } from "../../models/member_model";
import member_service from "../../service/member_service";


type Member = {
    id: number,
    name: string,
    age: number,
    email: string,
    fileName: string
}
const updateMember = async (req: Request, res: Response) => {


    try {
        const { id, name, email, age } = req.body;

        
    } catch (error) {
        console.log('error:', error)


    }
};

export default updateMember;

