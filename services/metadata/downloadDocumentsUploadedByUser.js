import { queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const downloadDocumentsUploadedByUser = async (payload) => {
    const requestParams = {
        method: 'GET',
        url: appConfig.api.downloadDocument.replace('{requestId}', payload)
    };
    const response = await queryOmsService(requestParams);
    return response;
}

const DownloadDocumentUploadedByUserService = {
    downloadDocumentsUploadedByUser
};

export default DownloadDocumentUploadedByUserService;