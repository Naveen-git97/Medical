import { invokeOmsService, queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const getAllRequests = async ({ useOrgId, internalStatus }) => {
  const url = useOrgId
    ? appConfig.api.requestSummaryByorgId
    : appConfig.api.adminRequestSummary;
  const requestParams = {
    method: "GET",
    url: `${url}${internalStatus ? "?internalStatus=" + internalStatus : ""}`,
  };
  return await queryOmsService(requestParams);
};

const getRequestsCountsByStatus = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.getRequestCountsByStatus,
  };
  return await queryOmsService(requestParams);
};

const getAdminEntityCounts = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.getAdminEntityCounts,
  };
  return await queryOmsService(requestParams);
};

const getDocumentRequest = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestDetails.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

const getDocumentRequestStatusHistory = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestStatus.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

//xray body parts
const getXrayBodyParts = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestXrayBodyParts,
  };
  return await queryOmsService(requestParams);
};

//get xray breakdown
const getDocumentRequestXrayBreakdown = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestXrayBreakdown.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

//get user files
const getDocumentRequestUserFiles = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestUserFiles.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

//get admin files
const getDocumentRequestAdminFiles = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestAdminFiles.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

const getBulkFiles = async (bodyData) => {
  const requestParams = {
    method: "POST", // change  GET to POST
    url: appConfig.api.admin.builkuplaodfiles,
    body: bodyData,
  };
  return await queryOmsService(requestParams);
};

const getUnpaid = async (bodyData) => {
  const requestParams = {
    method: "POST", // change  GET to POST
    url: appConfig.api.admin.documentRequestUnpaid,
    body: bodyData,
  };
  return await queryOmsService(requestParams);
};

const getUnpaidSummary = async (bodyData) => {
  const requestParams = {
    method: "GET", // change  GET to POST
    url: appConfig.api.admin.documentRequestUnpaidSummary,
    body: bodyData,
  };
  return await queryOmsService(requestParams);
};

const getUnpaidList = async (bodyData) => {
  const requestParams = {
    method: "POST", // change  GET to POST
    url: appConfig.api.admin.documentRequestUnpaidList,
    body: bodyData,
  };
  return await queryOmsService(requestParams);
};
const getPaidInvoice = async (bodyData) => {
  const requestParams = {
    method: "get",
    url: appConfig.api.admin.getPaidInvoice,
    body: bodyData,
  };
  return await queryOmsService(requestParams);
};

const getPaidFilterInvoice = async (bodyData) => {
  const requestParams = {
    method: "post",
    url: appConfig.api.admin.getPaidFilterInvoice,
    body: bodyData,
  };
  return await queryOmsService(requestParams);
};

const getTaskLogs = async (taskId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getTaskLogs.replace("{taskId}", taskId),
  };
  return await queryOmsService(requestParams);
};

const updateDocumentRequestStatusHistory = async (requestId, updatePayload) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.api.admin.documentRequestStatus.replace(
      "{documentRequestId}",
      requestId
    ),
    body: updatePayload,
  };
  return await invokeOmsService(requestParams);
};

//update order details API

const updateDocumentRequestOrderDetails = async (requestId, updatePayload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.documentRequestUpdateOrderDetails.replace(
      "{documentRequestId}",
      requestId
    ),
    body: updatePayload,
  };
  return await invokeOmsService(requestParams);
};

//update xray API
const updateDocumentRequestXrayBreakdown = async (requestId, updatePayload) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.api.admin.documentRequestXrayBreakdown.replace(
      "{documentRequestId}",
      requestId
    ),
    body: updatePayload,
  };
  return await invokeOmsService(requestParams);
};

// const updateDocumentRequestXrayBreakdown = async (requestId, updatePayload) => {
//   const requestParams = {
//     method: "PATCH",
//     url: appConfig.api.admin.documentRequestXrayBreakdown.replace(

// API's for Invoices for backoffice
const getDocumentRequestInvoiceDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestInvoiceDetails.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

const getDocumentRequestInvoiceInfo = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.documentRequestInvoiceInfo.replace(
      "{documentRequestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

const getServiceFeesForInvoice = async (requestData) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getServiceFees
      .replace("{processingOrgId}", requestData.processingOrgId)
      .replace("{recordTypeId}", requestData.recordTypeId)
      .replace("{requestTypeId}", requestData.requestTypeId)
      .replace("{invoiceDefaultFees}", requestData.invoiceDefaultFees)
      .replace("{docId}", requestData.docId)
      .replace("{isCnr}", requestData.isCnr),
  };
  return await queryOmsService(requestParams);
};

const getUniversalServiceFeesForInvoice = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getUniversalServiceFees,
  };
  return await queryOmsService(requestParams);
};

const updateDocumentRequestInvoiceDetails = async (
  requestId,
  updatePayload
) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.api.admin.documentRequestInvoiceDetailsUpdate.replace(
      "{documentRequestId}",
      requestId
    ),
    body: updatePayload,
  };
  return await invokeOmsService(requestParams);
};

// API TO CREATE CHECK PAYMENT.
const createDocumentRequestCheckPayment = async (requestId, payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.documentRequestCreateCheckPayment.replace(
      "{documentRequestId}",
      requestId
    ),
    body: payload,
  };
  return await invokeOmsService(requestParams);
};

const createFeeDueItem = async (payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.createFeeDueItem,
    body: payload,
  };
  return await invokeOmsService(requestParams);
};

const createFeePaymentRequest = async (payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.createFeePaymentRequest,
    body: payload,
  };
  return await invokeOmsService(requestParams);
};

// API TO CREATE CHECK PAYMENT FOR XRAY.
const createDocumentRequestXrayCheckPayment = async (requestId, payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.documentRequestCreateXrayCheckPayment.replace(
      "{documentRequestId}",
      requestId
    ),
    body: payload,
  };
  return await invokeOmsService(requestParams);
};

// API to get Messages
const getDocumentRequestMessages = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getMessages.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// API to get Payment History
const getPaymentHistory = async (userId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getPaymentHistory.replace("{userId}", userId),
  };
  return await queryOmsService(requestParams);
};

// API to get Payment History By DocRequestId
const getPaymentHistoryByDocRequestId = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getPaymentHistoryByDocRequestId.replace(
      "{requestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

// API to send Message
const sendMessage = async (userId, bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.api.admin.sendMessage.replace("{requestId}", userId),
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// API TO GENERATE INVOICE.
const generateInvoice = async (requestId, payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.generateInvoice.replace("{documentId}", requestId),
    // body: payload,
  };
  return await invokeOmsService(requestParams);
};

// API TO GENERATE INVOICE.
const generateInvoiceAll = async (payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.generateInvoicePost,
    body: payload,
  };
  return await invokeOmsService(requestParams);
};

// API TO WRITE OFF PAYMENT.
const writeOffPayment = async (requestId, payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.writeOffPayment.replace("{requestId}", requestId),
    body: payload,
  };
  return await invokeOmsService(requestParams);
};

// API TO GENERATE PDF.
const generateDeclarationOfRecord = async (requestId, payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.generateDeclarationOfRecord.replace(
      "{documentId}",
      requestId
    ),
    // body: payload,
  };
  return await invokeOmsService(requestParams);
};

const uploadZipFile = async (payload) => {
  const body ={
    fileName:payload?.fileName,
    s3Url:payload?.location?.uploadURL
  }
  const requestId = payload.docId
  const requestParams = {
    method: "POST",
    url: appConfig.api.uploadZipFile.replace(
      "{docId}",
      requestId
    ),
    body,
  };
  return await invokeOmsService(requestParams);
};

// API TO certifyNoRecords.
const certifyNoRecords = async (requestId, payload) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.certifyNoRecords.replace(
      "{documentId}",
      requestId
    ),
    body: payload,
  };
  return await invokeOmsService(requestParams);
};

export const deleteUplodedFile = async (url) => {
  const requestParams = {
    method: "STRICT_DELETE",
    url,
  };
  return await queryOmsService(requestParams);
};

const deleteInvoice = async (invoiceId, docId) => {
  const requestParams = {
    method: "STRICT_DELETE",
    url: appConfig.newera.deleteInvoice
      .replace("{documentRequestId}", docId)
      .replace("{invoiceId}", invoiceId),
    //  body: payload,
  };
  return await invokeOmsService(requestParams);
};

// API to get Notes
const getDocumentRequestNotes = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getNotes.replace("{docId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// API to Add Note
const addNote = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.addNote,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

const AdminRequestService = {
  getAllRequests,
  getDocumentRequest,
  getRequestsCountsByStatus,
  getDocumentRequestStatusHistory,
  updateDocumentRequestStatusHistory,
  getDocumentRequestInvoiceDetails,
  updateDocumentRequestInvoiceDetails,
  updateDocumentRequestXrayBreakdown,
  getDocumentRequestXrayBreakdown,
  getXrayBodyParts,
  getUnpaid,
  getUnpaidList,
  getDocumentRequestUserFiles,
  getDocumentRequestAdminFiles,
  getDocumentRequestInvoiceInfo,
  getServiceFeesForInvoice,
  getUniversalServiceFeesForInvoice,
  createDocumentRequestCheckPayment,
  createDocumentRequestXrayCheckPayment,
  updateDocumentRequestOrderDetails,
  getDocumentRequestMessages,
  getPaymentHistory,
  getPaymentHistoryByDocRequestId,
  sendMessage,
  generateInvoice,
  generateInvoiceAll,
  writeOffPayment,
  generateDeclarationOfRecord,
  certifyNoRecords,
  deleteInvoice,
  getAdminEntityCounts,
  getDocumentRequestNotes,
  addNote,
  getBulkFiles,
  uploadZipFile,
  getPaidInvoice,
  getPaidFilterInvoice,
  getTaskLogs,
  createFeeDueItem,
  createFeePaymentRequest,
  getUnpaidSummary,
};

export default AdminRequestService;
