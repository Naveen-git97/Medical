import appConfig from "configs/app.config";
import { queryOmsService } from "services/apiService";

// Create Payment Intent
export const createPaymentIntent = async (docRequestId) => {
  const requestParams = {
    method: "GET",
    url: `${appConfig.payment.createPaymentIntent}?docRequestId=${docRequestId}`,
  };
  return await queryOmsService(requestParams);
};

// create multiple records payment intent
export const createPaymentIntentForMultipleRecords = async (docRequestIds, isAdvanceFee) => {
  const requestParams = {
    method: "GET",
    url: `${appConfig.payment.createPaymentIntentBulk}?docRequestId=${docRequestIds}&isAdvanceFee=${isAdvanceFee}`,
  };
  return await queryOmsService(requestParams);
};

// Create XRay Payment Intent
export const createXRayPaymentIntent = async (docRequestId, xRayRequestIds,createInvoice=false) => {
  const requestParams = {
    method: "GET",
    url: `${appConfig.payment.createXRayPaymentIntent}?docRequestId=${docRequestId}&xRayRequestIds=${xRayRequestIds}&createInvoice=${createInvoice}`,
  };
  return await queryOmsService(requestParams);
};
