import { queryOmsService, invokeOmsService,invokeOmsServiceForPDF } from "../apiService";
import appConfig from "../../configs/app.config";
import axios from "axios";
const getConfiguration = async () => {
    const requestParams = {
        method: 'GET',
        url: appConfig.newera.getConfiguration
    };
    const response = await queryOmsService(requestParams);
    return response;
}

const getOrgConfiguration = async (orgId) => {
  const requestParams = {
      method: 'GET',
      url: appConfig.newera.getOrgConfiguration.replace('{orgId}', orgId)
  };
  const response = await queryOmsService(requestParams);
  return response;
}

// API to update user details
const updateConfiguration = async (
    bodyData
  ) => {
    const requestParams = {
      method: "POST",
      url: appConfig.newera.getConfiguration,
      body: bodyData
    };
    const response = await invokeOmsService(requestParams);
    return response;
  };

const getDocumentByOrgIdAndType = async(docType,orgId)=>{
  const requestParams = {
    method: "GET",
    // url: appConfig.newera.getConfiguration +`/${orgId}` +'/document/'+docType,
    url: appConfig.api.downloadHippaDoc.replace('{orgId}', orgId),
    responseType: 'arraybuffer',
    transformResponse: [data => data], // Disable default transforms
    headers: {
      'Content-Type':  'application/octet-stream'// 'application/pdf', // Ensure this matches the actual content type
    },
  };
  const response = await invokeOmsServiceForPDF(requestParams);
  if (response.status !== 200) {
    throw new Error('Failed to download file');
  }

// Extract filename from Content-Disposition header if available
let filename = 'Hippa Document.pdf'; // Default filename
const contentDisposition = response.headers['content-disposition'];
if (contentDisposition) {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(contentDisposition);
    if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
    }
}

// Create blob link to download
const blob = new Blob([response.data], { type: response.headers['content-type'] });
const blobUrl = window.URL.createObjectURL(blob);

// Create a link element, set its href and download attributes, then simulate click
const a = document.createElement('a');
a.href = blobUrl;
a.download = filename;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

// Clean up
window.URL.revokeObjectURL(blobUrl);
};

const ConfigurationService = {
    getConfiguration,
    updateConfiguration,
    getOrgConfiguration,
    getDocumentByOrgIdAndType
};

export default ConfigurationService;