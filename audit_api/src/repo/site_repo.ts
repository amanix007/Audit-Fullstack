import Site, { SiteInterface } from "../models/site_model";
import sequelize from "../config/sequelize";
import Editor, { EditorInterface } from "../models/editor_model";



export const get = async (userID: number): Promise<SiteInterface | null> => {
    return Site.findByPk(userID);
};

export const getSiteList = async (): Promise<SiteInterface[]> => {
    return Site.findAll({
        offset: 0, limit: 100,
        // order: [["id" ] ],
    });
};

export const getSiteDetails = async (id: number): Promise<any> => {
    const transaction = await sequelize.transaction({});
    let site: Site | null;
    site = await Site.findOne({
        where: {
            id: id
        },
        plain: true,
        raw: true,
        transaction
    });
    if (!site) {
        console.error("Site not found");
    } else {
        let editorUser: Editor | null = await Editor.findOne({
            where: {
                id: site.editor_id
            },
            
            raw: true,
            transaction
        });

        if (!editorUser) {
            console.error("Editor not found");
        } else {



            site.editorUserName = editorUser.userName;

        }

        let creatorUser: Editor | null = await Editor.findOne({
            where: {
                id: site.creator_id
            },
            raw: true,
            transaction
        });

        if (!creatorUser) {
            console.error("Creator not found");
        } else {
            site.creatorUserName = creatorUser.userName;
            

        }

        await transaction.commit();

        // console.log('site:', site)
        return site;

    }



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