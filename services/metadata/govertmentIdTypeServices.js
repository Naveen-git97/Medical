import { queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const getGovertmentIdTypes = async () => {
    if (true) {
        return new Promise((resolve) => {
            resolve([
                { Id: 'Passport', Description: 'Passport' },
                { Id: 'Driving License', Description: 'Driving License' },
                { Id: 'Military ID', Description: 'Military ID' }
            ]);
        });
    }
    const requestParams = {
        method: 'GET',
        url: appConfig.api.govertmentIdTypes
    };
    const response = await queryOmsService(requestParams);
    return response;
};

const GovernmentIdTypeService = {
    getGovertmentIdTypes,
};

export default GovernmentIdTypeService;
