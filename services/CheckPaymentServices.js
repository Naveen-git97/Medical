import appConfig from "configs/app.config";
import { queryOmsService } from "services/apiService";

// create multiple records payment intent
export const createPaymentIntentForFeePayments = async (ids) => {
  const requestParams = {
    method: "GET",
    //url: `${appConfig.payment.createPaymentIntentBulk}?docRequestId=${docRequestIds}&isAdvanceFee=${isAdvanceFee}`,
    url: `${appConfig.newera.createPaymentIntentForFeePayments}?ids=${ids}`,
  };
  return await queryOmsService(requestParams);
};