import { queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const getRequestStatusTypes = async () => {
    const requestParams = {
        method: 'GET',
        url: appConfig.api.requestStatusTypes
    };
    const response = await queryOmsService(requestParams);
    return response;
};

const RequestStatusTypeService = {
    getRequestStatusTypes,
}

export default RequestStatusTypeService;
