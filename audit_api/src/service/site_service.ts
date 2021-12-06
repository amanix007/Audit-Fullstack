import siteRepo from "../repo/site_repo";
import Site, { SiteInterface } from "../models/site_model";






export const createSite = async (site: SiteInterface): Promise<{ site: SiteInterface; }> => {
    let data = siteRepo.createSite({
        ...site,
    });
    return data;
};
export const updateSite = async (site: SiteInterface): Promise<void> => {
    return siteRepo.updateSite({
        ...site,
    });
};


export const getSiteList = async (): Promise<SiteInterface[]> => {
    return siteRepo.getSiteList();
};
export const getSiteDetails = async (id: number): Promise<SiteInterface | null> => {
    return siteRepo.getSiteDetails(id);
};
export const deleteSite = async (id: number): Promise<boolean> => {
    if (await siteRepo.deleteSite(id) > 0) {
        return true;
    }
    return false;
};






export default {
  
    createSite,
    updateSite,
    getSiteList,
    getSiteDetails,
    deleteSite
};