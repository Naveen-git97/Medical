import appConfig from "configs/app.config";

const { queryOmsService, invokeOmsService } = require("services/apiService");

// API to get user details
const getUserInformation = async (userId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.userInformation.replace("{userId}", userId),
  };
  return await queryOmsService(requestParams);
};

// API to update user details
const updateUserDetails = async (
  userId,
  bodyData
) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.patient.updateUserDetails.replace(
      "{userId}",
      userId
    ),
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// API to update company details
const updateCompanyDetails = async (
  companyId,
  bodyData
) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.patient.updateCompanyDetails.replace(
      "{companyId}",
      companyId
    ),
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// API to get Payment history
const getPaymentHistory = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getPaymentHistory.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// API to get Messages 
const getMessages = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getMessages.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// API to send Message
const sendMessage = async (
  userId,
  bodyData
) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.patient.sendMessage.replace(
      "{requestId}",
      userId
    ),
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// API to get Order List
const getOrderList = async (scope, filter) => {
  let url = appConfig.patient.documentRequest.replace("{filter}", filter);
  if (scope) url = url.replace("{scope}",scope);
  const requestParams = {
    method: "GET",
    url
  };
  return await queryOmsService(requestParams);
};

// API to get Order Summary
const getOrderSummary = async () => {
  const url = appConfig.patient.documentRequestSummary;
  const requestParams = {
    method: "GET",
    url
  };
  return await queryOmsService(requestParams);
};

const getNotificationList = async (scope, filter) => {
  let url = appConfig.patient.notifications.replace("{filter}", filter);
  if (scope) url = url.replace("{scope}",scope);
  const requestParams = {
    method: "GET",
    url
  };
  return await queryOmsService(requestParams);
};

// API to get Order Details 
const getOrderDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getOrderDetails.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

//API to get Files Uploaded by user 
const getDocumentUploadedByUser = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getDocumentUploadedByUser.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

//API to get Files Uploaded by Admin 
const getDocumentUploadedByAdmin = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getDocumentUploadedByAdmin.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// API to get Xray exam breakdown details
const getXrayDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getXrayDetails.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

const getInvoiceDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getInvoiceDetails.replace("{documentRequestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// API to get Payment History By DocRequestId
const getPaymentHistoryDetailsByDocRequestId = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getPaymentHistoryDetailsByDocRequestId.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams)
};

const getDocumentRequestInvoiceInfo = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.documentRequestInvoiceInfo.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};


const getServiceFeesForInvoice = async (requestData ) => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getServiceFees
    .replace("{processingOrgId}", requestData.processingOrgId)
    .replace("{recordTypeId}", requestData.recordTypeId)
    .replace("{requestTypeId}", requestData.requestTypeId)
    .replace("{invoiceDefaultFees}", requestData.invoiceDefaultFees)
    .replace("{docId}", Number(requestData.docId))
    .replace("{isCnr}", requestData.isCnr)
  };
  return await queryOmsService(requestParams);
};

const getUniversalServiceFeesForInvoice = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.patient.getUniversalServiceFees,
  };
  return await queryOmsService(requestParams);
};

const PatientRequestService = {
    getUserInformation,
    updateUserDetails,
    getPaymentHistory,
    getMessages,
    getOrderDetails,
    getNotificationList,
    sendMessage,
    getOrderList,
    getOrderSummary,
    getDocumentUploadedByUser,
    getDocumentUploadedByAdmin,
    getXrayDetails,
    updateCompanyDetails,
    getInvoiceDetails,
    getPaymentHistoryDetailsByDocRequestId,
    getDocumentRequestInvoiceInfo,
    getServiceFeesForInvoice,
    getUniversalServiceFeesForInvoice
};

export default PatientRequestService;
