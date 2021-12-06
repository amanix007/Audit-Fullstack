import Site, { SiteInterface } from "../models/site_model";

import sequelize from "../config/sequelize";
import { Op } from "sequelize";


export const get = async (userID: number): Promise<SiteInterface | null> => {
    return Site.findByPk(userID);
};

export const getSiteList = async (): Promise<SiteInterface[]> => {
    return Site.findAll({
        offset: 0, limit: 100,
        // order: [["id" ] ],
    });
};

export const getSiteDetails = async (id: number): Promise<SiteInterface | null> => {
    return Site.findOne({
        where: {
            id: id
        }
    });
};
export const deleteSite = async (id: number): Promise<number> => {
    return Site.destroy({
        where: {
            id: id
        }
    });
};

export const createSite = async (site: SiteInterface): Promise<{ site: SiteInterface; }> => {

    const transaction = await sequelize.transaction({});
    try {
        const _site = await Site.create(site, { transaction });
        console.log('_site:', _site)
        await transaction.commit();

        return {
            site: _site.get({ plain: true }) as SiteInterface,

        };
    } catch (e) {
        await transaction.rollback();
        throw e;
    }
};
export const updateSite = async (site: SiteInterface): Promise<void> => {

    try {
        await Site.update({ ...site }, {
            where: {
                id: site.id
            }
        });




    } catch (e) {

        throw e;
    }
};





export const verifyEmailAddress = async (token: string): Promise<any> => {
    return Site.update({
        isVerified: true
    },
        {
            where: {
                verificationToken: token
            }
        }
    );
};




export default {
    createSite,
    getSiteList,
    getSiteDetails,
    verifyEmailAddress,
    deleteSite,
    updateSite
};