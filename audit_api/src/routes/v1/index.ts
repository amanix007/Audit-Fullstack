import { Router } from "express";
import commonRouter from "./common";
import SiteRouter from "./site/site_router";

const v1 = Router();

v1.use((req, res, next) => {
    console.log("Time:", Date.now(), "==>", req.originalUrl);
    next();
});

v1.use("/v1", commonRouter);
v1.use("/v1/site", SiteRouter);

v1.use("*", (req, res) => {
    res.status(404).send({
        code: "PAGE_NOT_FOUND",
        message: "please be sane and hit correct endpoints",
        response: null,
        error: null
    });
});

export default v1;