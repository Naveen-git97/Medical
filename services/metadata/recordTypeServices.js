import { queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const getRecordTypes = async () => {
    const requestParams = {
        method: 'GET',
        // url: appConfig.api.recordTypes
        url: appConfig.newera.getRecordTypes

    };
    const response = await queryOmsService(requestParams);
    return response;
};

const RecordTypeService = {
    getRecordTypes,
}

export default RecordTypeService;
