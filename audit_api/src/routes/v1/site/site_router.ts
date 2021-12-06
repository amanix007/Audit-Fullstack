
import { Router } from "express";
import createSite from "../../../controller/site/create-site";
import updateSite from "../../../controller/site/update-site";
import getSites from "../../../controller/site/get-sites";
import deleteSite from "../../../controller/site/delete-site";
import { upload } from "../../../misc/common";
import getSiteDetails from "../../../controller/site/get-site-details";
import createEditor from "../../../controller/site/create-editor";


const SiteRouter = Router();



SiteRouter.post("/create-editor", createEditor);
SiteRouter.post("/create-site", createSite);
SiteRouter.put("/update-site", updateSite);
SiteRouter.get("/get-members", getSites);
SiteRouter.get("/get-member-details/:id", getSiteDetails);
SiteRouter.delete("/delete-member/:id", deleteSite);


export default SiteRouter;