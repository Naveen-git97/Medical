import { queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const getXrayBodyParts = async () => {
    const requestParams = {
        method: 'GET',
        url: appConfig.api.getXrayBodyParts
    };
    return await queryOmsService(requestParams);
    
}

const GetXrayBodyPartsService = {
    getXrayBodyParts
};

export default GetXrayBodyPartsService;