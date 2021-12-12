import axios from "axios";
import { SiteInterface } from "./helper/Interfaces";


axios.defaults.baseURL = "http://localhost:8080/api/";
axios.defaults.headers.post["Content-Type"] = "application/json";


export async function create_editor(userName: string | undefined) {


    try {
        let result = await axios.post("/v1/site/create-editor", { userName });
        localStorage.setItem("editor", JSON.stringify(result.data.response));
        return result.data.response;
    } catch (error: any) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.error("Request Error:", error.response);
        }
        console.log("Error", error);
    }
}
export async function create_site(site: SiteInterface) {


    try {
        let result = await axios.post("/v1/site/create-site", site);
        return result.data.response;
    } catch (error: any) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.error("Request Error:", error.response);
        }
        console.log("Error", error);
    }
}
export async function update_site(site: SiteInterface) {


    try {
        let result = await axios.put("/v1/site/update-site", site);
        return result.data.response;
    } catch (error: any) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.error("Request Error:", error.response);
        }
        console.log("Error", error);
    }
}
export async function get_site(id: number | undefined) {


    try {
        let result = await axios.get("/v1/site/get-site-details/"+ id);
        return result.data.response;
    } catch (error: any) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.error("Request Error:", error.response);
        }
        console.log("Error", error);
    }
}