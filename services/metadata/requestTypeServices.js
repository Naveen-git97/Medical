import { queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const getRequestTypes = async () => {
    const requestParams = {
        method: 'GET',
        // url: appConfig.api.requestTypes
        url: appConfig.newera.getRequestTypes
    };
    const response = await queryOmsService(requestParams);
    return response;
}

const RequestTypeService = {
    getRequestTypes,
}

export default RequestTypeService;
